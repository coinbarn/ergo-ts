import * as constants from './testConstants.js';
import { ErgoBox } from '../src/models/ergoBox';
import { Transaction } from '../src/models/transaction';
import { Address } from '../src/models/address';

test('from outputs', () => {

  const boxesToSpend = constants.boxesToSpend;
  const recipient = constants.newAddress;
  const totalValueIn = boxesToSpend.reduce((sum, { value }) => sum + value, 0);
  const tokensToTransfer = 12345;
  const payloadOutputs = [new ErgoBox('', tokensToTransfer, 0, recipient)];
  const tx = Transaction.fromOutputs(boxesToSpend, payloadOutputs);

  const totalValueOut = tx.outputs.reduce((sum, { value }) => sum + value, 0);
  expect(totalValueIn)
    .toEqual(totalValueOut);

});

test('from outputs w/ fee pre-included', () => {

  const boxesToSpend = constants.boxesToSpend;
  const recipient = constants.newAddress;
  const totalValueIn = boxesToSpend.reduce((sum, { value }) => sum + value, 0);
  const tokensToTransfer = 12345;
  
  const payloadOutputs = [
    new ErgoBox('', tokensToTransfer, 0, recipient), // regular output
    new ErgoBox('', 1000000, 0, Address.fromBase58(constants.feeMainnetAddress)), // explicit fee
  ];
  const tx = Transaction.fromOutputs(boxesToSpend, payloadOutputs);
  
  expect(tx.outputs).toHaveLength(3);
  const totalValueOut = tx.outputs.reduce((sum, { value }) => sum + value, 0);
  expect(totalValueIn)
    .toEqual(totalValueOut);

});
