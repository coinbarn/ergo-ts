import {ErgoBox} from '../src/models/ergoBox';


test('correct registers', () => {
  const testVectors = [{
    registers: {
      R4: 'USD',
      R5: 'Nothing backed USD token',
      R6: '2',
    },
    encodedRegisters: {
      R4: '0e03555344',
      R5: '0e184e6f7468696e67206261636b65642055534420746f6b656e',
      R6: '0e0132',
    },
  }];

  testVectors.forEach((tv) => {
    expect(ErgoBox.encodeRegisters(tv.registers))
      .toStrictEqual(tv.encodedRegisters);
  });


});

