export class SpendingProof {
  proofBytes: String;
  extension: Object;

  constructor(proofBytes: string, extension: Object = {}) {
    this.proofBytes = proofBytes;
    this.extension = extension;
  }

  static readonly empty: SpendingProof = new SpendingProof('', {})

}
