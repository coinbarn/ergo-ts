import axios, { AxiosInstance } from 'axios';
import { Address } from './models/address';
import { ErgoBox } from './models/ergoBox';
import { Transaction } from './models/transaction';


declare const console;


/**
 * Class to interact with explorer
 */
export class Explorer {
  public static readonly testnet: Explorer = new Explorer('https://api-testnet.ergoplatform.com');

  public static readonly mainnet: Explorer = new Explorer('https://api.ergoplatform.com');
  public readonly apiClient: AxiosInstance;
  protected url: string;
  protected timeout: number = 1000 * 5;
  protected headers = {
    'Content-Type': 'application/json',
  };

  constructor(url: string) {
    this.url = url;
    this.apiClient = axios.create({
      baseURL: url,
      headers: this.headers,
      timeout: this.timeout,
    });
    this.apiClient.interceptors.response.use(
      response => Promise.resolve(response),
      error => Promise.reject(new Error(error.response || {})),
    );
  }

  public async getCurrentHeight(): Promise<number> {
    const {
      data: { items },
    } = await this.getRequest(`/blocks?limit=1`);

    return items[0].height;
  }

  public async getUnspentOutputs(address: Address): Promise<ErgoBox[]> {
    const { data } = await this.getRequest(`/transactions/boxes/byAddress/unspent/${address.address}`);

    return data.map(o => ErgoBox.formObject(o));
  }

  public async getMempool(): Promise<Transaction[]> {
    const {data} = await this.getRequest(`/transactions/unconfirmed`);
    return data.map(o => Transaction.formObject(o));
  }

  public async getTokenInfo(tokenId: string): Promise<ErgoBox> {
    const { data } = await this.getRequest(`/transactions/boxes/${tokenId}`);
    const {
      data: { outputs },
    } = await this.getRequest(`/transactions/${data.spentTransactionId}`);
    const parsedOutputs: ErgoBox[] = outputs.map(o => ErgoBox.formObject(o));
    return parsedOutputs.find(o => o.assets.find(a => a.tokenId === tokenId) !== undefined);
  }

  public async broadcastTx(signedTransaction: Transaction) {
    return await this.postRequest('/transactions/send', signedTransaction);
  }

  protected async postRequest(url: string, data) {
    return await this.apiClient({
      data: data,
      method: 'POST',
      url: url,
    });
  }

  protected async getRequest(url: string) {
    return await this.apiClient({
      method: 'GET',
      url,
    });
  }
}
