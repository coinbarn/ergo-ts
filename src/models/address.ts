import * as blake from 'blakejs';
import * as bs58 from 'bs58';
import * as ec from 'elliptic';

const { curve } = ec.ec('secp256k1');

declare const Buffer;
declare const console;

export class Address {

  get publicKey(): string {
    return this.addrBytes.slice(1, 34);
  }

  get ergoTree(): string {
    if (this.isP2PK()) {
      return Buffer.concat([Buffer.from([0x00, 0x08, 0xcd]), this.publicKey]).toString('hex');
    } else {
      return this.addrBytes.slice(1, this.addrBytes.length - 4).toString('hex');
    }
  }

  public static fromPk(pk: string, mainnet = true): Address {
    const P2PK_TYPE = 1;
    const networkType = mainnet ? 0 : 16;

    const prefixByte = Buffer.from([networkType + P2PK_TYPE]);
    const contentBytes = Buffer.from(pk, 'hex');
    const checksum = Buffer.from(blake.blake2b(Buffer.concat([prefixByte, contentBytes]), null, 32), 'hex');
    const address = Buffer.concat([prefixByte, contentBytes, checksum]).slice(0, 38);

    return new Address(bs58.encode(address));
  }

  public static fromSk(sk: string, mainnet = true): Address {
    const pk = Buffer.from(curve.g.mul(sk).encodeCompressed());
    return this.fromPk(pk, mainnet);
  }
  public address: string;
  public addrBytes;

  constructor(address: string) {
    this.address = address;
    this.addrBytes = bs58.decode(this.address);
  }

  public isValid(): boolean {
    try {
      const bytes = bs58.decode(this.address);
      const size = bytes.length;
      const script = bytes.slice(0, size - 4);
      const checksum = bytes.slice(size - 4, size);
      const calculatedChecksum = Buffer.from(blake.blake2b(script, null, 32), 'hex').slice(0, 4);
      return calculatedChecksum.toString('hex') === checksum.toString('hex');
    } catch (e) {
      return false;
    }
  }

  public isMainnet(): boolean {
    return this.headByte() < 16;
  }

  public isP2PK(): boolean {
    return this.headByte() === 1 || this.headByte() === 17;
  }

  private headByte() {
    return this.addrBytes[0];
  }
}
