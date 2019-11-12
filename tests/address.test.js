import { Address } from '../src/address';

test('simple address validity test', () => {
  const addresses = [
    ['2Z4YBkDsDvQj8BX7xiySFewjitqp2ge9c99jfes2whbtKitZTxdBYqbrVZUvZvKv6aqn9by4kp3LE1c26LCyosFnVnm6b6U1JYvWpYmL2ZnixJbXLjWAWuBThV1D6dLpqZJYQHYDznJCk49g5TUiS4q8khpag2aNmHwREV7JSsypHdHLgJT7MGaw51aJfNubyzSKxZ4AJXFS27EfXwyCLzW1K6GVqwkJtCoPvrcLqmqwacAWJPkmh78nke9H4oT88XmSbRt2n9aWZjosiZCafZ4osUDxmZcc5QVEeTWn8drSraY3eFKe8Mu9MSCcVU', true],
    ['88dhgzEuTXaSLUWK1Ro8mB5xfhwP4y8osUycdBV16EBgycjcBebwd2He7QGiXC1qiSM1KZ6bAcpE2iCv', true],
    ['9fRusAarL1KkrWQVsxSRVYnvWxaAT2A96cKtNn9tvPh5XUyCisr', true],
    ['9fMPy1XY3GW4T6t3LjYofqmzER6x9cV21n5UVJTWmma4Y9mAW6c', true],
    ['9fRusAarL1KkrWQVsxSRVYnvWxaAT2A96cKtNn9tvPh5XUyCiss', false],
    ['9fRusAarL1KkrWQVsxSRVYnvWxaAT2A96c', false],
    ['', false],
    [1234, false],
    [Infinity, false],
    [true, false],
    [null, false],
  ];

  addresses.forEach((address) => {
    expect(Address.checkAddressValidity(address[0]))
      .toBe(address[1]);
  });
});
