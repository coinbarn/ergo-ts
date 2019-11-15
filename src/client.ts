import {Explorer} from "./explorer";
import {Address} from "./models/address";
import {ErgoBox} from "./models/ergoBox";
import {Transaction} from "./models/transaction";
import {feeValue} from "./constants";

export class Client {

  explorer: Explorer;
  readonly unitsInOneErgo = 1000000000;

  constructor(explorerUri = 'https://api.ergoplatform.com') {
    this.explorer = new Explorer(explorerUri);
  }

  async transfer(recipient: string, amount: number, sk: string) {
    const amountInt = amount * this.unitsInOneErgo;
    const height = await this.explorer.getCurrentHeight();
    const sender: Address = Address.fromSk(sk);
    const myBoxes = await this.explorer.getUnspentOutputs(sender);
    const payloadOuts = [new ErgoBox('', amountInt, height, new Address(recipient))];
    const boxesToSpend = ErgoBox.getSolvingBoxes(myBoxes, payloadOuts);
    const unsignedTx = Transaction.fromOutputs(boxesToSpend, payloadOuts);
    const signedTx = unsignedTx.sign(sk);
    return await this.explorer.broadcastTx(signedTx)
  }

  async tokenTransfer(recipient: string, tokenId: string, amount: number, sk: string) {

  }

  async tokenIssue(name: string, amount: number, decimals: number, description: string, sk: string) {
    const amountInt = amount * Math.pow(10, decimals);
    const height = await this.explorer.getCurrentHeight();
    const sender: Address = Address.fromSk(sk);
    const myBoxes = await this.explorer.getUnspentOutputs(sender);
    const basePayloadOuts = [new ErgoBox('', feeValue, height, sender)];
    const boxesToSpend = ErgoBox.getSolvingBoxes(myBoxes, basePayloadOuts);
    const token = {
      tokenId: boxesToSpend[0].id,
      amount: amountInt
    };
    // Reminder: serializedByteArrayInRegister = '\x0e' + intToVlq(bytearray.length) + byteArray
    const registers = ErgoBox.encodeRegisters({
      R4: name,
      R5: description,
      R6: decimals,
    });
    const payloadOutsWithTokens = [new ErgoBox('', feeValue, height, sender, [token], registers)];
    const unsignedTx = Transaction.fromOutputs(boxesToSpend, payloadOutsWithTokens);
    const signedTx = unsignedTx.sign(sk);
    return await this.explorer.broadcastTx(signedTx)
  }

}
