import { Address } from '../src/models/address';
import * as constants from './testConstants.js';

const testVectors = [
  {
    address: '9fRusAarL1KkrWQVsxSRVYnvWxaAT2A96cKtNn9tvPh5XUyCisr',
    isMainnet: true,
    isValid: true,
  },
  {
    sk: '8e6993a4999f009c03d9457ffcf8ff3d840ae78332c959c8e806a53fbafbbee1',
    address: '9gsLq5a12nJe33nKtjMe7NPY7o8CQAtjS9amDgALbebv1wmRXrv',
    isMainnet: true,
    isValid: true,
  },
  {
    sk: 'ff00',
    address: '9gU3czAt9q4fQPRWBriBbpfLbRP7JrXRmB7kowtwdyw66PMRmaY',
    isMainnet: true,
    isValid: true,
  },
  {
    sk: '8e6993a4999f009c03d9457ffcf8ff3d840ae78332c959c8e806a53fbafbbee1',
    address: '3WxxVQqxoVSWEKG5B73eNttBX51ZZ6WXLW7fiVDgCFhzRK8R4gmk',
    isMainnet: false,
    isValid: true,
  },
  {
    address: '2Z4YBkDsDvQj8BX7xiySFewjitqp2ge9c99jfes2whbtKitZTxdBYqbrVZUvZvKv6aqn9by4kp3LE1c26LCyosFnVnm6b6U1JYvWpYmL2ZnixJbXLjWAWuBThV1D6dLpqZJYQHYDznJCk49g5TUiS4q8khpag2aNmHwREV7JSsypHdHLgJT7MGaw51aJfNubyzSKxZ4AJXFS27EfXwyCLzW1K6GVqwkJtCoPvrcLqmqwacAWJPkmh78nke9H4oT88XmSbRt2n9aWZjosiZCafZ4osUDxmZcc5QVEeTWn8drSraY3eFKe8Mu9MSCcVU',
    isMainnet: true,
    isValid: true,
  },
  {
    address: '88dhgzEuTXaSLUWK1Ro8mB5xfhwP4y8osUycdBV16EBgycjcBebwd2He7QGiXC1qiSM1KZ6bAcpE2iCv',
    isMainnet: true,
    isValid: true,
  },
  {
    address: '9fMPy1XY3GW4T6t3LjYofqmzER6x9cV21n5UVJTWmma4Y9mAW6c',
    ergoTree: '0008cd026dc059d64a50d0dbf07755c2c4a4e557e3df8afa7141868b3ab200643d437ee7',
    isMainnet: true,
    isValid: true,
  },
  {
    address: '9fRusAarL1KkrWQVsxSRVYnvWxaAT2A96cKtNn9tvPh5XUyCiss',
    isMainnet: true,
    isValid: false,
  },
  {
    address: '9fRusAarL1KkrWQVsxSRVYnvWxaAT2A96c',
    isMainnet: true,
    isValid: false,
  },
  {
    address: constants.feeMainnetAddress,
    ergoTree: constants.feeErgoTree,
    isMainnet: true,
    isValid: true,
  },
  {
    address: constants.feeTestnetAddress,
    ergoTree: constants.feeErgoTree,
    isMainnet: false,
    isValid: true,
  },
].map((o) => {
  o.address = new Address(o.address);
  return o;
});


test('get ergoTree by address', () => {
  testVectors.forEach((tv) => {
    expect(tv.address.ergoTree)
      .toBe(tv.ergoTree);
  });


});


test('check isMainnet/testnet', () => {
  testVectors.forEach((tv) => {
    if (tv.address.isValid()) {
      expect(tv.address.isMainnet())
        .toBe(tv.isMainnet);
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
      expect(Address.fromSk(o.sk, o.isMainnet).address)
        .toBe(o.address.address);
    }
  });

});
