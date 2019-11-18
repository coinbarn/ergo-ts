import { SpendingProof } from './spending-proof';

export class Input {

  public static formObject(obj): Input {
    const id = obj.id || obj.boxId;
    const proofBytes = obj.spendingProof.proofBytes !== undefined ? obj.spendingProof.proofBytes : obj.spendingProof;
    return new Input(id, new SpendingProof(proofBytes));
  }
  public boxId: string;
  public spendingProof: SpendingProof;

  constructor(boxId: string, spendingProof: SpendingProof = new SpendingProof('')) {
    this.boxId = boxId;
    this.spendingProof = spendingProof;
  }
}
