declare const Buffer;

import * as blake from 'blakejs';
import * as bs58 from 'bs58';

export class Address {

  static checkAddressValidity(address: string): boolean {
    try {
      const bytes = bs58.decode(address);
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

  static pkFromAddress(address: string): string {
    const addrBytes = bs58.decode(address);
    return addrBytes.slice(1, 34);
  }

  // todo support non-pk addresses
  static ergoTreeFromAddress(address: string): string {
    if (!this.checkAddressValidity(address)) {
      throw new TypeError(`Bad params:${address}`);
    }
    return Buffer.concat([Buffer.from([0x00, 0x08, 0xcd]), this.pkFromAddress(address)])
      .toString('hex');
  }

}
