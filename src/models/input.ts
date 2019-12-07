import { SpendingProof } from './spending-proof';

export class Input {
  public static formObject(obj): Input {
    const id = obj.id || obj.boxId;
    const proofBytes = obj.spendingProof.proofBytes !== undefined ? obj.spendingProof.proofBytes : obj.spendingProof;
    return new Input(id, new SpendingProof(proofBytes), obj.address, obj.value, obj.outputTransactionId);
  }

  public outputTransactionId?: string;
  public value?: number;
  public address?: string;
  public boxId: string;
  public spendingProof: SpendingProof;

  constructor(
    boxId: string,
    spendingProof: SpendingProof = SpendingProof.empty,
    address?: string,
    value?: number,
    outputTransactionId?: string,
  ) {
    this.boxId = boxId;
    this.spendingProof = spendingProof;
    this.address = address;
    this.value = value;
    this.outputTransactionId = outputTransactionId;
  }
}
