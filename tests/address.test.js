import { Address } from '../src/models/address';

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
    expect(new Address(address[0]).isValid())
      .toBe(address[1]);
  });
});

test('address from sk', () => {
  const testCases = [
    {
      sk: '8e6993a4999f009c03d9457ffcf8ff3d840ae78332c959c8e806a53fbafbbee1',
      address: '9gsLq5a12nJe33nKtjMe7NPY7o8CQAtjS9amDgALbebv1wmRXrv',
      mainnet: true,
    },
    {
      sk: 'ff00',
      address: '9gU3czAt9q4fQPRWBriBbpfLbRP7JrXRmB7kowtwdyw66PMRmaY',
      mainnet: true,
    },
    {
      sk: '8e6993a4999f009c03d9457ffcf8ff3d840ae78332c959c8e806a53fbafbbee1',
      address: '3WxxVQqxoVSWEKG5B73eNttBX51ZZ6WXLW7fiVDgCFhzRK8R4gmk',
      mainnet: false,
    },
  ];

  testCases.forEach((o) => {
    expect(Address.fromSk(o.sk, o.mainnet).address)
      .toBe(o.address);
  });

});
