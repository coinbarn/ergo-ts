import {Output} from "./output";
import {Input} from "./input";

export class Transaction {

  inputs: Input[];
  dataInputs: Input[];
  outputs: Output[];

  constructor(inputs: Input[], outputs: Output[], dataInputs: Input[] = []) {
    this.inputs = inputs;
    this.dataInputs = dataInputs;
    this.outputs = outputs;
  }

  static formObject(obj): Transaction {
    const inputs = obj.inputs.map((i) => Input.formObject(i));
    const outputs = obj.outputs.map((i) => Output.formObject(i));
    return new Transaction(inputs, outputs)
  }

}
