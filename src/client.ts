import {Explorer} from "./explorer";
import {Address} from "./models/address";
import {ErgoBox} from "./models/ergoBox";
import {Transaction} from "./models/transaction";
import {feeValue} from "./constants";

export class Client {

  private ex: Explorer;
  readonly unitsInOneErgo = 1000000000;

  constructor(explorerUri = 'https://api.ergoplatform.com') {
    this.ex = new Explorer(explorerUri);
  }

  async sendErgs(recipient: string, amount: number, sk: string) {
    const amountInt = amount * this.unitsInOneErgo;
    const height = await this.ex.getCurrentHeight();
    const sender: Address = Address.fromSk(sk);
    const myBoxes = await this.ex.getUnspentOutputs(sender);
    const payloadOuts = [new ErgoBox('', amountInt, height, new Address(recipient))];
    const boxesToSpend = ErgoBox.getSolvingBoxes(myBoxes, payloadOuts);
    const unsignedTx = Transaction.fromOutputs(boxesToSpend, payloadOuts);
    const signedTx = unsignedTx.sign(sk);
    return await this.ex.broadcastTx(signedTx)
  }

  async issueToken(name: string, amount: number, decimals: number, description: string, sk: string) {
    const amountInt = amount * Math.pow(10, decimals);
    const height = await this.ex.getCurrentHeight();
    const sender: Address = Address.fromSk(sk);
    const myBoxes = await this.ex.getUnspentOutputs(sender);
    const basePayloadOuts = [new ErgoBox('', feeValue, height, sender)];
    const boxesToSpend = ErgoBox.getSolvingBoxes(myBoxes, basePayloadOuts);
    const token = {
      tokenId: boxesToSpend[0].id,
      amount: amountInt
    };
    // Reminder: serializedByteArrayInRegister = '\x0e' + intToVlq(bytearray.length) + byteArray
    const registers = {
      R4: name,
      R5: description,
      R6: decimals,
    };
    const payloadOutsWithTokens = [new ErgoBox('', feeValue, height, sender, [token], registers)];
    const unsignedTx = Transaction.fromOutputs(boxesToSpend, payloadOutsWithTokens);
    const signedTx = unsignedTx.sign(sk);
    return await this.ex.broadcastTx(signedTx)
  }

  set setExplorer(ex: Explorer) {
    this.ex = ex;
  }

}
