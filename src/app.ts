import {Explorer} from "./explorer";
import {Address} from "./models/address";
import {ErgoBox} from "./models/ergoBox";
import {Transaction} from "./models/transaction";

class App {

  private ex: Explorer;

  constructor(ex: Explorer = Explorer.mainnet) {
    this.ex = ex;
  }

  async sendErgs(recipient: string, amount: number, sk: string) {
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
