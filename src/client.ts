import {Explorer} from "./explorer";
import {Address} from "./models/address";
import {ErgoBox} from "./models/ergoBox";
import {Transaction} from "./models/transaction";

export class Client {

  private ex: Explorer;
  readonly unitsInOneErgo = 1000000000;

  constructor(explorerUri: string = 'https://api.ergoplatform.com') {
    this.ex = new Explorer(explorerUri);
  }

  async sendErgs(recipient: string, amountDouble: number, sk: string) {
    const amount = amountDouble * this.unitsInOneErgo;
    const sender: Address = Address.fromSk(sk);
    const myBoxes = await this.ex.getUnspentOutputs(sender);
    const height = await this.ex.getCurrentHeight();
    const payloadOuts = [new ErgoBox('', amount, height, new Address(recipient))];
    const boxesToSpend = ErgoBox.getSolvingBoxes(myBoxes, payloadOuts);
    const unsignedTx = Transaction.fromOutputs(boxesToSpend, payloadOuts);
    const signedTx = unsignedTx.sign(sk);
    return await this.ex.broadcastTx(signedTx)
  }

  set setExplorer(ex: Explorer) {
    this.ex = ex;
  }

}
