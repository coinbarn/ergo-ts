import { Network, Address } from '../src/models/address';
import * as constants from './testConstants.js';

declare const console;

const testVectors = [
  {
    address: '9fRusAarL1KkrWQVsxSRVYnvWxaAT2A96cKtNn9tvPh5XUyCisr',
    ergoTree: '0008cd0278011ec0cf5feb92d61adb51dcb75876627ace6fd9446ab4cabc5313ab7b39a7',
    network: Network.Mainnet,
    isValid: true,
  },
  {
    sk: '8e6993a4999f009c03d9457ffcf8ff3d840ae78332c959c8e806a53fbafbbee1',
    address: '9gsLq5a12nJe33nKtjMe7NPY7o8CQAtjS9amDgALbebv1wmRXrv',
    network: Network.Mainnet,
    isValid: true,
  },
  {
    sk: 'ff00',
    address: '9gU3czAt9q4fQPRWBriBbpfLbRP7JrXRmB7kowtwdyw66PMRmaY',
    network: Network.Mainnet,
    isValid: true,
  },
  {
    sk: '8e6993a4999f009c03d9457ffcf8ff3d840ae78332c959c8e806a53fbafbbee1',
    address: '3WxxVQqxoVSWEKG5B73eNttBX51ZZ6WXLW7fiVDgCFhzRK8R4gmk',
    network: Network.Testnet,
    isValid: true,
  },
  {
    address: '2Z4YBkDsDvQj8BX7xiySFewjitqp2ge9c99jfes2whbtKitZTxdBYqbrVZUvZvKv6aqn9by4kp3LE1c26LCyosFnVnm6b6U1JYvWpYmL2ZnixJbXLjWAWuBThV1D6dLpqZJYQHYDznJCk49g5TUiS4q8khpag2aNmHwREV7JSsypHdHLgJT7MGaw51aJfNubyzSKxZ4AJXFS27EfXwyCLzW1K6GVqwkJtCoPvrcLqmqwacAWJPkmh78nke9H4oT88XmSbRt2n9aWZjosiZCafZ4osUDxmZcc5QVEeTWn8drSraY3eFKe8Mu9MSCcVU',
    ergoTree: '101004020e36100204a00b08cd0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798ea02d192a39a8cc7a7017300730110010204020404040004c0fd4f05808c82f5f6030580b8c9e5ae040580f882ad16040204c0944004c0f407040004000580f882ad16d19683030191a38cc7a7019683020193c2b2a57300007473017302830108cdeeac93a38cc7b2a573030001978302019683040193b1a5730493c2a7c2b2a573050093958fa3730673079973089c73097e9a730a9d99a3730b730c0599c1a7c1b2a5730d00938cc7b2a5730e0001a390c1a7730f',
    network: Network.Mainnet,
    isValid: true,
  },
  {
    address: '88dhgzEuTXaSLUWK1Ro8mB5xfhwP4y8osUycdBV16EBgycjcBebwd2He7QGiXC1qiSM1KZ6bAcpE2iCv',
    network: Network.Mainnet,
    isValid: true,
  },
  {
    address: '9fMPy1XY3GW4T6t3LjYofqmzER6x9cV21n5UVJTWmma4Y9mAW6c',
    ergoTree: '0008cd026dc059d64a50d0dbf07755c2c4a4e557e3df8afa7141868b3ab200643d437ee7',
    network: Network.Mainnet,
    isValid: true,
  },
  {
    address: '9fRusAarL1KkrWQVsxSRVYnvWxaAT2A96cKtNn9tvPh5XUyCiss',
    network: Network.Mainnet,
    isValid: false,
  },
  {
    address: '9fRusAarL1KkrWQVsxSRVYnvWxaAT2A96c',
    network: Network.Mainnet,
    isValid: false,
  },
  {
    address: constants.feeMainnetAddress,
    ergoTree: constants.feeErgoTree,
    network: Network.Mainnet,
    isValid: true,
  },
  {
    address: constants.feeTestnetAddress,
    ergoTree: constants.feeErgoTree,
    network: Network.Testnet,
    isValid: true,
  },
].map((o) => {
  o.address = new Address(o.address);
  return o;
});

test('get ergoTree by address', () => {
  testVectors.forEach((tv) => {
    if (tv.ergoTree) {
      expect(tv.address.ergoTree)
        .toBe(tv.ergoTree);
    }
  });
});

test('get address by ergoTree', () => {
  testVectors.forEach((tv) => {
    if (tv.ergoTree) {
      const address = Address.fromErgoTree(tv.ergoTree, tv.network);
      expect(address.address).toBe(tv.address.address);
    }
  });
});

test('check network/testnet', () => {
  testVectors.forEach((tv) => {
    if (tv.address.isValid()) {
      expect(tv.address.getNetwork())
        .toBe(tv.network);
    }
  });
});

test('simple address validity test', () => {
  testVectors.forEach((tv) => {
    expect(tv.address.isValid())
      .toBe(tv.isValid);
  });
});

test('address from sk', () => {
  testVectors.forEach((o) => {
    if (o.sk) {
      expect(Address.fromSk(o.sk, o.network).address)
        .toBe(o.address.address);
    }
  });

});

test('checked construction from base58', () => {
  testVectors.forEach((o) => {
    if (o.isValid) {
      expect(() => Address.fromBase58(o.address.address))
        .not.toThrow();
    } else {
      expect(() => Address.fromBase58(o.address.address))
        .toThrow();
    }
  });
});

test('checked construction from bytes', () => {
  testVectors.forEach((o) => {
    if (o.isValid) {
      expect(() => Address.fromBytes(o.address.addrBytes))
        .not.toThrow();
    } else {
      expect(() => Address.fromBytes(o.address.addrBytes))
        .toThrow();
    }
  });
});
