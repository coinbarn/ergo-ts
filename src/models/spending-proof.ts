export class SpendingProof {
  proofBytes: String;
  extension: Object = {};

  constructor(proofBytes: string) {
    this.proofBytes = proofBytes;
  }

}
