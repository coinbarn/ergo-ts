import * as  constants from './testConstants.js';
import { ErgoBox } from '../src/models/ergoBox';
import { Transaction } from '../src/models/transaction';


test('from outputs', () => {

  const boxesToSpend = constants.boxesToSpend;
  const recipient = constants.newAddress;
  const totalValueIn = boxesToSpend.reduce((sum, { value }) => sum + value, 0);
  const tokensToTransfer = 12345;
  const payloadOutputs = [new ErgoBox('', tokensToTransfer, 0, recipient)];
  const tx = Transaction.fromOutputs(boxesToSpend, payloadOutputs);

  console.log(tx.outputs);

  const totalValueOut = tx.outputs.reduce((sum, { value }) => sum + value, 0);
  expect(totalValueIn)
    .toEqual(totalValueOut);

});
