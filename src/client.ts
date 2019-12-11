import { feeValue, minBoxValue, unitsInOneErgo } from './constants';
import { Explorer } from './explorer';
import { Address } from './models/address';
import { ErgoBox } from './models/ergoBox';
import { Transaction } from './models/transaction';
import { Serializer } from './serializer';

export class Client {
  public explorer: Explorer;

  constructor(explorerUri = 'https://api.ergoplatform.com') {
    this.explorer = new Explorer(explorerUri);
  }

  /**
   * Transfer ERG or token, specifying the amount in nanoErgs or minimal token units.
   *
   * @param sk - secret key
   * @param recipient - address ot the transaction recipient
   * @param amountInt - amount to transfer in minimal units. Should be integer.
   * @param tokenId - id of a token to send. 'ERG' if  going to send ERG
   */
  public async transferInt(sk: string, recipient: string, amountInt: number, tokenId: string = 'ERG') {
    if (tokenId === 'ERG') {
      return this.ergTransfer(recipient, amountInt, sk);
    } else {
      return this.tokenTransfer(recipient, tokenId, amountInt, sk);
    }
  }

  /**
   * Transfer ERG or token.
   * Sent amount may be slightly different from the specified one due to JS float number representation.
   * For exact transfer us transferInt method.
   *
   * @param sk - secret key
   * @param recipient - address ot the transaction recipient
   * @param amount - amount to transfer
   * @param tokenId - id of a token to send. 'ERG' if  going to send ERG
   */
  public async transfer(sk: string, recipient: string, amount: number, tokenId: string = 'ERG') {
    let factor = unitsInOneErgo;
    if (tokenId !== 'ERG') {
      factor = await this.tokenDecimalsFactor(tokenId);
    }
    return this.transferInt(sk, recipient, amount * factor, tokenId);
  }

  public async tokenIssue(sk: string, name: string, amount: number, decimals: number, description: string) {
    const amountInt = amount * Math.pow(10, decimals);
    const height = await this.explorer.getCurrentHeight();
    const sender: Address = Address.fromSk(sk);
    const myBoxes = await this.explorer.getUnspentOutputs(sender);
    const basePayloadOuts = [new ErgoBox('', feeValue, height, sender)];
    const boxesToSpend = ErgoBox.getSolvingBoxes(myBoxes, basePayloadOuts);
    const token = {
      amount: amountInt,
      tokenId: boxesToSpend[0].id,
    };
    // Reminder: serializedByteArrayInRegister = '\x0e' + intToVlq(bytearray.length) + byteArray
    const registers = ErgoBox.encodeRegisters({
      R4: name,
      R5: description,
      R6: decimals,
    });
    const payloadOutsWithTokens = [new ErgoBox('', minBoxValue, height, sender, [token], registers)];
    const unsignedTx = Transaction.fromOutputs(boxesToSpend, payloadOutsWithTokens);
    const signedTx = unsignedTx.sign(sk);
    return await this.explorer.broadcastTx(signedTx);
  }

  private async ergTransfer(recipient: string, amountInt: number, sk: string) {
    const height = await this.explorer.getCurrentHeight();
    const myBoxes = await this.explorer.getUnspentOutputs(Address.fromSk(sk));
    const payloadOuts = [new ErgoBox('', amountInt, height, new Address(recipient))];
    const boxesToSpend = ErgoBox.getSolvingBoxes(myBoxes, payloadOuts);
    const unsignedTx = Transaction.fromOutputs(boxesToSpend, payloadOuts);
    const signedTx = unsignedTx.sign(sk);
    return await this.explorer.broadcastTx(signedTx);
  }

  private async tokenTransfer(recipient: string, tokenId: string, amountInt: number, sk: string) {
    const height = await this.explorer.getCurrentHeight();
    const tokens = [
      {
        amount: amountInt,
        tokenId,
      },
    ];
    const payloadOuts = [new ErgoBox('', minBoxValue, height, new Address(recipient), tokens)];
    const myBoxes = await this.explorer.getUnspentOutputs(Address.fromSk(sk));
    const boxesToSpend = ErgoBox.getSolvingBoxes(myBoxes, payloadOuts);
    const unsignedTx = Transaction.fromOutputs(boxesToSpend, payloadOuts);
    const signedTx = unsignedTx.sign(sk);
    return await this.explorer.broadcastTx(signedTx);
  }

  private async tokenDecimalsFactor(tokenId: string) {
    const tokenInfo = await this.explorer.getTokenInfo(tokenId);
    const r6 = 'R6';
    const R6: string = tokenInfo.additionalRegisters[r6];
    const decimals = Number(Serializer.stringFromHex(R6.slice(4, R6.length)));
    return Math.pow(10, decimals);
  }
}
