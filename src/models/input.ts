import {SpendingProof} from "./spending-proof";

export class Input {

  boxId: string;
  spendingProof: SpendingProof;

  constructor(boxId: string, spendingProof: SpendingProof) {
    this.boxId = boxId;
    this.spendingProof = spendingProof;
  }

  static formObject(obj): Input {
    return new Input(obj.boxId, obj.spendingProof)
  }


}
