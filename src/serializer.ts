import {ErgoBox} from "./models/ergoBox";
import {Input} from "./models/input";
import {Transaction} from "./models/transaction";
import * as flat from 'array.prototype.flat'

declare const Buffer;
declare const Object;
declare const Number;

export class Serializer {

  static outputToBytes(out: ErgoBox, tokenIds) {
    let res = this.intToVlq(out.value);
    res = Buffer.concat([res, Buffer.from(out.ergoTree, 'hex')]);
    res = Buffer.concat([res, this.intToVlq(out.creationHeight)]);

    res = Buffer.concat([res, this.intToVlq(out.assets.length)]);
    for (let i = 0; i < out.assets.length; i += 1) {
      const t = out.assets[i].tokenId;
      const n = tokenIds.indexOf(t);
      res = Buffer.concat([res, this.intToVlq(n)]);
      res = Buffer.concat([res, this.intToVlq(out.assets[i].amount)]);
    }
    // todo: const k = out.additionalRegisters.length;
    const k = 0;
    res = Buffer.concat([res, this.intToVlq(k)]);
    return res;
  }

  static inputToBytes(input: Input) {
    let res = Buffer.from(input.boxId, 'hex');
    const sp = input.spendingProof;
    res = Buffer.concat([res, this.intToVlq(sp.proofBytes.length >> 1)]);
    res = Buffer.concat([res, Buffer.from(sp.proofBytes, 'hex')]);
    res = Buffer.concat([res, this.intToVlq(Object.keys(sp.extension).length)]);

    Object.keys(sp.extension).forEach((k) => {
      res += this.intToVlq(Number(k));
      res += this.valueSerialize(sp.extension[k]);
    });

    return res;
  }

  static transactionToBytes(tx: Transaction) {

    let res = this.intToVlq(tx.inputs.length);

    Object.values(tx.inputs).forEach((input) => {
      res = Buffer.concat([res, this.inputToBytes(input)]);
    });
    res = Buffer.concat([res, this.intToVlq(tx.dataInputs.length)]);

    tx.dataInputs.forEach((i) => {
      res = Buffer.concat([res, Buffer.from(i.boxId, 'hex')]);
    });

    const distinctIds = this.distinctTokenList(tx.outputs);

    res = Buffer.concat([res, this.intToVlq(distinctIds.length)]);

    Object.values(distinctIds).forEach((v) => {
      res = Buffer.concat([res, Buffer.from(v, 'hex')]);
    });

    res = Buffer.concat([res, this.intToVlq(tx.outputs.length)]);
    Object.values(tx.outputs).forEach((v) => {
      res = Buffer.concat([res, this.outputToBytes(v, distinctIds)]);
    });

    return res;
  }

  // todo (?) merge with ErgoBox.extractAssets()
  protected static distinctTokenList(outputs: ErgoBox[]) {
    // todo use flatMap after switching to es2019
    const flatTokenList = flat(Array.from(outputs).map((x) => x.assets.map((a) => a.tokenId)));
    const seenTokens = new Set();
    const res = [];
    for (let i = 0; i < flatTokenList.length; i += 1) {
      const currId = flatTokenList[i];
      if (seenTokens.has(currId)) {
        res.push(currId);
        seenTokens.add(currId);
      }
    }
    return res;
  }

  static intToVlq(num: number): string {
    let x = num;
    let res = Buffer.from([]);
    let r;
    while (parseInt(String(x / (2 ** 7)), 10)) {
      r = x & 0x7F;
      x = parseInt(String(x / (2 ** 7)), 10);
      res = Buffer.concat([res, Buffer.from([(r | 0x80)], null, 1)]);
    }
    r = (x & 0x7F);
    res = Buffer.concat([res, Buffer.from([r], null, 1)]);
    return res;
  }

  // TODO implementi
  protected static valueSerialize(_) {
    return ''
  }

}
