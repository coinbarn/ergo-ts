import * as BN from 'bn.js';
import { feeMainnetAddress, feeTestnetAddress, feeValue, minBoxValue } from '../constants';
import { sign } from '../ergoSchnorr';
import { Serializer } from '../serializer';
import { Address } from './address';
import { ErgoBox } from './ergoBox';
import { IIdObject } from './IIdObject';
import { Input } from './input';
import { SpendingProof } from './spending-proof';

declare const console;

export class Transaction implements IIdObject {
  /**
   *
   * @param boxesToSpend - boxes to spend
   * @param payloadOutputs - outputs without fee and change
   */
  public static fromOutputs(boxesToSpend: ErgoBox[], payloadOutputs: ErgoBox[]): Transaction {
    let outputs = payloadOutputs;
    const height = payloadOutputs[0].creationHeight;
    const feeBox = this.createFee(payloadOutputs, height);
    outputs = outputs.concat(feeBox);
    const realChangeAddress = boxesToSpend[0].address;
    const changeOuts = this.createChangeOutputs(boxesToSpend, outputs, realChangeAddress, height);
    outputs = outputs.concat(changeOuts);
    return new Transaction(
      boxesToSpend.map(b => b.toInput()),
      outputs,
      [],
    );
  }

  public static formObject(obj): Transaction {
    const inputs = obj.inputs.map(i => Input.formObject(i));
    const dataInputs = obj.dataInputs === undefined ? [] : obj.dataInputs.map(i => new Input(i.boxId));
    const outputs = obj.outputs.map(i => ErgoBox.formObject(i));
    return new Transaction(inputs, outputs, dataInputs, obj.id, obj.timestamp, obj.headerId, obj.confirmationsCount);
  }

  private static createFee(payloadOutputs: ErgoBox[], height: number): ErgoBox[] {
    if (payloadOutputs.find(o => o.address === feeMainnetAddress || o.address === feeTestnetAddress)) {
      return [];
    } else {
      return [new ErgoBox('', feeValue, height, feeMainnetAddress)];
    }
  }

  private static createChangeOutputs(
    boxesToSpend: ErgoBox[],
    restOutputs: ErgoBox[],
    changeAddress: Address,
    height: number,
  ): ErgoBox[] {
    const totalValueIn = boxesToSpend.reduce((sum, { value }) => sum + value, 0);
    const totalValueOut = restOutputs.reduce((sum, { value }) => sum + value, 0);
    const outputs = [];

    const assetsIn = ErgoBox.extractAssets(boxesToSpend);
    const assetsMap = {};
    assetsIn.forEach(a => {
      assetsMap[a.tokenId] = (assetsMap[a.tokenId] || 0) + a.amount;
    });
    ErgoBox.extractAssets(restOutputs).forEach(a => {
      if (a.tokenId !== boxesToSpend[0].id) {
        assetsMap[a.tokenId] -= a.amount;
      }
    });
    const changeAssets = [];
    Object.keys(assetsMap).forEach(k => {
      changeAssets.push({ tokenId: k, amount: assetsMap[k] });
    });

    const changeAmount = totalValueIn - totalValueOut;
    if (changeAmount > minBoxValue) {
      outputs.push(new ErgoBox('', changeAmount, height, changeAddress, changeAssets, {}));
    } else if (changeAmount !== 0 || assetsIn.length > 0) {
      throw new Error('Insufficient funds');
    }

    return outputs;
  }
  public inputs: Input[];
  public dataInputs: Input[];
  public outputs: ErgoBox[];
  public timestamp?: number;
  public confirmations?: number;
  public headerId?: string;
  public id?: string;

  constructor(
    inputs: Input[],
    outputs: ErgoBox[],
    dataInputs: Input[] = [],
    id?: string,
    timestamp?: number,
    headerId?: string,
    confirmationsCount?: number,
  ) {
    this.inputs = inputs;
    this.dataInputs = dataInputs;
    this.outputs = outputs;
    this.id = id;
    this.timestamp = timestamp;
    this.confirmations = confirmationsCount;
    this.headerId = headerId;
  }

  public sign(sk: string): Transaction {
    const serializeTransaction = Serializer.transactionToBytes(this);
    const signedInputs = this.inputs.map(input => {
      const proofBytes = sign(serializeTransaction, new BN(sk, 16));
      const sp = new SpendingProof(proofBytes.toString('hex'));
      return new Input(input.boxId, sp);
    });
    return new Transaction(signedInputs, this.outputs, this.dataInputs);
  }
}
