import axios, {AxiosInstance} from "axios";
import {Output} from "./models/output";
import {Transaction} from "./models/transaction";

/**
 * Class to interact with explorer
 */
export class Explorer {

  private url: string;
  private timeout: number = 1000 * 5;
  private headers = {
    'Content-Type': 'application/json',
  };
  private client: AxiosInstance;

  constructor(url: string) {
    this.url = url;
    this.client = axios.create({
      baseURL: url,
      timeout: this.timeout,
      headers: this.headers,
    });
    this.client.interceptors.response.use(
      (response) => Promise.resolve(response),
      (error) => Promise.reject(new Error(error.response || {})),
    );
  }

  public static readonly testnet: Explorer = new Explorer('https://api-testnet.ergoplatform.com');

  public static readonly mainnet: Explorer = new Explorer('https://api.ergoplatform.com');

  async getCurrentHeight(): Promise<number> {
    const {data: {items}} = await this.client({
      url: '/blocks?limit=1',
      method: 'GET',
    });

    return items[0].height;
  }

  async getUnspentOutputs(address: string): Promise<Output[]> {
    const {data} = await this.client({
      url: `/transactions/boxes/byAddress/unspent/${address}`,
      method: 'GET',
    });

    return data.map((o) => Output.formObject(o));
  };

  async broadcastTx(signedTransaction: Transaction) {
    return await this.client({
      method: 'POST',
      url: '/transactions/send',
      data: signedTransaction,
    });
  };


}
