import * as blake from 'blakejs';
import * as bs58 from 'bs58';
import * as  ec from 'elliptic';

const {curve} = ec.ec('secp256k1');

declare const Buffer;

export class Address {

  address: string;

  constructor(address: string) {
    this.address = address;
  }

  static fromPk(pk: string, mainnet: boolean = true): Address {
    const P2PK_TYPE = 1;
    const networkType = mainnet ? 0 : 16;

    const prefixByte = Buffer.from([networkType + P2PK_TYPE]);
    const contentBytes = Buffer.from(pk, 'hex');
    const checksum = Buffer.from(blake.blake2b(Buffer.concat([prefixByte, contentBytes]), null, 32), 'hex');
    const address = Buffer.concat([prefixByte, contentBytes, checksum])
      .slice(0, 38);

    return new Address(bs58.encode(address));

  }

  static fromSk(sk: string, mainnet: boolean = true): Address {
    const pk = Buffer.from(curve.g.mul(sk)
      .encodeCompressed());
    return this.fromPk(pk, mainnet);
  }

  get publicKey(): string {
    const addrBytes = bs58.decode(this.address);
    return addrBytes.slice(1, 34);
  }

  // todo rework to be able to work with scripts
  get ergoTree(): string {
    return Buffer.concat([Buffer.from([0x00, 0x08, 0xcd]), this.publicKey])
      .toString('hex');
  }

  isValid(): boolean {
    try {
      const bytes = bs58.decode(this.address);
      const size = bytes.length;
      const script = bytes.slice(0, size - 4);
      const checksum = bytes.slice(size - 4, size);
      const calculatedChecksum = Buffer.from(blake.blake2b(script, null, 32), 'hex')
        .slice(0, 4);
      return calculatedChecksum.toString('hex') === checksum.toString('hex');
    } catch (e) {
      return false;
    }
  }


}
