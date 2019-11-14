import {ErgoBox} from "./ergoBox";
import {Input} from "./input";
import {Address} from "./address";
import * as  constants from '../constants.js';

export class Transaction {

  inputs: Input[];
  dataInputs: Input[];
  outputs: ErgoBox[];

  constructor(inputs: Input[], outputs: ErgoBox[], dataInputs: Input[] = []) {
    this.inputs = inputs;
    this.dataInputs = dataInputs;
    this.outputs = outputs;
  }

  /**
   *
   * @param boxesToSpend - boxes to spend
   * @param payloadOutputs - outputs without fee and change
   */
  static fromOutputs(boxesToSpend: ErgoBox[], payloadOutputs: ErgoBox[]): Transaction {
    let outputs = payloadOutputs;
    const height = payloadOutputs[0].creationHeight;
    const feeBox = this.createFee(payloadOutputs, height);
    outputs = outputs.concat(feeBox);
    const realChangeAddress = boxesToSpend[0].address;
    const changeOuts = this.createChangeOutputs(boxesToSpend, outputs, realChangeAddress, height);
    outputs = outputs.concat(changeOuts);
    return new Transaction(boxesToSpend.map((b) => b.toInput()), outputs, [])
  }

  static formObject(obj): Transaction {
    const inputs = obj.inputs.map((i) => Input.formObject(i));
    const outputs = obj.outputs.map((i) => ErgoBox.formObject(i));
    return new Transaction(inputs, outputs)
  }

  sign(sk: string): Transaction {
    // todo
    return this;
  }


  private static createFee(payloadOutputs: ErgoBox[], height: number): ErgoBox[] {
    if (payloadOutputs.find((o) => o.address == constants.feeMainnetAddress || o.address == constants.feeTestnetAddress)) {
      return [];
    } else {
      return [new ErgoBox('', constants.feeValue, height, constants.feeMainnetAddress)];
    }
  }

  private static createChangeOutputs(boxesToSpend: ErgoBox[], restOutputs: ErgoBox[], changeAddress: Address, height: number): ErgoBox[] {

    const totalValueIn = boxesToSpend.reduce((sum, {value}) => sum + value, 0);
    const totalValueOut = restOutputs.reduce((sum, {value}) => sum + value, 0);
    const outputs = [];

    const changeAssets = ErgoBox.extractAssets(boxesToSpend);
    const changeAmount = totalValueIn - totalValueOut;
    if (changeAmount > 0) {
      outputs.push(new ErgoBox('', changeAmount, height, changeAddress, changeAssets, {}));
    } else if (changeAmount < 0 || changeAssets.length > 0) {
      throw new Error('Insufficient funds');
    }

    return outputs;
  };

}
