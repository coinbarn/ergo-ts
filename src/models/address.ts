import * as blake from 'blakejs';
import * as bs58 from 'bs58';

declare const Buffer;

export class Address {

  address: string;

  constructor(address: string) {
    this.address = address;
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
