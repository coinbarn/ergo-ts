export class SpendingProof {

  public static readonly empty: SpendingProof = new SpendingProof('', {});
  public proofBytes: string;
  public extension: Record<string, any>;

  constructor(proofBytes: string, extension: Record<string, any> = {}) {
    this.proofBytes = proofBytes;
    this.extension = extension;
  }
}
