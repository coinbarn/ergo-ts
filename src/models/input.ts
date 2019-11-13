import {SpendingProof} from "./spending-proof";

export class Input {

  boxId: string;
  spendingProof: SpendingProof;

  constructor(boxId: string, spendingProof: SpendingProof) {
    this.boxId = boxId;
    this.spendingProof = spendingProof;
  }

  static formObject(obj): Input {
    const id = obj.id || obj.boxId;
    return new Input(id, new SpendingProof(obj.spendingProof))
  }


}
