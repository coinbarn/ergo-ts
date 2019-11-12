import {
  getTenBoxesOrCurrent,
  checkAddressValidity,
} from '../src/utils';

describe('getTenBoxesOrCurrent utils func', () => {
  it('should return currentBoxes', () => {
    const currentBoxes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const allBoxes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    expect(getTenBoxesOrCurrent(currentBoxes, allBoxes))
      .toEqual(currentBoxes);
  });

  it('should return 10 boxes', () => {
    const currentBoxes = [1, 2, 3];
    const allBoxes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(getTenBoxesOrCurrent(currentBoxes, allBoxes))
      .toEqual([...allBoxes]);
  });
});

test('simple address validity test', () => {
  const addresses = [
    ['2Z4YBkDsDvQj8BX7xiySFewjitqp2ge9c99jfes2whbtKitZTxdBYqbrVZUvZvKv6aqn9by4kp3LE1c26LCyosFnVnm6b6U1JYvWpYmL2ZnixJbXLjWAWuBThV1D6dLpqZJYQHYDznJCk49g5TUiS4q8khpag2aNmHwREV7JSsypHdHLgJT7MGaw51aJfNubyzSKxZ4AJXFS27EfXwyCLzW1K6GVqwkJtCoPvrcLqmqwacAWJPkmh78nke9H4oT88XmSbRt2n9aWZjosiZCafZ4osUDxmZcc5QVEeTWn8drSraY3eFKe8Mu9MSCcVU', true],
    ['88dhgzEuTXaSLUWK1Ro8mB5xfhwP4y8osUycdBV16EBgycjcBebwd2He7QGiXC1qiSM1KZ6bAcpE2iCv', true],
    ['9fRusAarL1KkrWQVsxSRVYnvWxaAT2A96cKtNn9tvPh5XUyCisr', true],
    ['9fRusAarL1KkrWQVsxSRVYnvWxaAT2A96cKtNn9tvPh5XUyCiss', false],
    ['9fRusAarL1KkrWQVsxSRVYnvWxaAT2A96c', false],
    ['', false],
    [1234, false],
    [Infinity, false],
    [true, false],
    [null, false],
  ];

  addresses.forEach((address) => {
    expect(checkAddressValidity(address[0]))
      .toBe(address[1]);
  });
});
