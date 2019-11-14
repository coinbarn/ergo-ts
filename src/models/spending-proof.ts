export class SpendingProof {
  proofBytes: string;
  extension: Record<string, any>;

  constructor(proofBytes: string, extension: Record<string, any> = {}) {
    this.proofBytes = proofBytes;
    this.extension = extension;
  }

  static readonly empty: SpendingProof = new SpendingProof('', {})

}
