import axios, {AxiosInstance} from "axios";
import {ErgoBox} from "./models/ergoBox";
import {Transaction} from "./models/transaction";
import {Address} from "./models/address";

/**
 * Class to interact with explorer
 */
export class Explorer {

  protected url: string;
  protected timeout: number = 1000 * 5;
  protected headers = {
    'Content-Type': 'application/json',
  };
  readonly apiClient: AxiosInstance;

  constructor(url: string) {
    this.url = url;
    this.apiClient = axios.create({
      baseURL: url,
      timeout: this.timeout,
      headers: this.headers,
    });
    this.apiClient.interceptors.response.use(
      (response) => Promise.resolve(response),
      (error) => Promise.reject(new Error(error.response || {})),
    );
  }

  public static readonly testnet: Explorer = new Explorer('https://api-testnet.ergoplatform.com');

  public static readonly mainnet: Explorer = new Explorer('https://api.ergoplatform.com');

  async getCurrentHeight(): Promise<number> {
    const {data: {items}} = await this.getRequest(`/blocks?limit=1`);

    return items[0].height;
  }

  async getUnspentOutputs(address: Address): Promise<ErgoBox[]> {
    const {data} = await this.getRequest(`/transactions/boxes/byAddress/unspent/${address.address}`);

    return data.map((o) => ErgoBox.formObject(o));
  }

  async getTokenInfo(tokenId: string): Promise<ErgoBox> {
    const {data} = await this.getRequest(`/transactions/boxes/${tokenId}`);
    const {data: {outputs}} = await this.getRequest(`/transactions/${data.spentTransactionId}`);
    const parsedOutputs: ErgoBox[] = outputs.map((o) => ErgoBox.formObject(o));
    return parsedOutputs.find((o) => o.assets.find((a) => a.tokenId == tokenId) !== undefined);
  }

  async broadcastTx(signedTransaction: Transaction) {
    return await this.postRequest('/transactions/send', signedTransaction)
  }

  protected async postRequest(url: string, data) {
    return await this.apiClient({
      method: 'POST',
      url: url,
      data: data,
    });
  }

  protected async getRequest(url: string) {
    return await this.apiClient({
      method: 'GET',
      url: url,
    });
  }


}
