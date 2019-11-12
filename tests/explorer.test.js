import { Explorer } from '../src/explorer';

test('get data from explorer', async () => {
  // make real http requests to mainnet explorer
  const address = '9fMPy1XY3GW4T6t3LjYofqmzER6x9cV21n5UVJTWmma4Y9mAW6c';

  const ex = Explorer.mainnet;
  // console.log(await ex.getCurrentHeight());
  const outs = await ex.getUnspentOutputs(address)
  console.log(outs.map((o) => o.assets.map((a) => a.amount)));

});

test('parse ', () => {
  /*
    const mockTestnetServer = new MockAdapter(testNetServer);
    const address = '9fMPy1XY3GW4T6t3LjYofqmzER6x9cV21n5UVJTWmma4Y9mAW6c';
    const resp = '[{"id":"55014068a416ec69b989c42e51ecad88a21e6fba8975a6fd3995f5c712a5f85a","value":91000000,"creationHeight":96592,"ergoTree":"0008cd026dc059d64a50d0dbf07755c2c4a4e557e3df8afa7141868b3ab200643d437ee7","address":"9fMPy1XY3GW4T6t3LjYofqmzER6x9cV21n5UVJTWmma4Y9mAW6c","assets":[{"tokenId":"fcc5a122f478918737b7b9dbc3e8fdd76cc9776b260f83168eaff0ad8e793b94","amount":1000000000000},{"tokenId":"6ea991394565dfe30e604acb1bdac423dfda2d46009f75b37a375cacb6e907d2","amount":20000000000}],"additionalRegisters":{},"spentTransactionId":null,"mainChain":true},{"id":"bc2e78c16e19126d27f20c662afed6f354f1c2d5947d9994a0d668d5ee137bff","value":1000000,"creationHeight":96592,"ergoTree":"0008cd026dc059d64a50d0dbf07755c2c4a4e557e3df8afa7141868b3ab200643d437ee7","address":"9fMPy1XY3GW4T6t3LjYofqmzER6x9cV21n5UVJTWmma4Y9mAW6c","assets":[{"tokenId":"830299bdedf6fa0d5d6f574e19007abbbefd00860d275eed85a84bb524cc1cf4","amount":1000000000000}],"additionalRegisters":{},"spentTransactionId":null,"mainChain":true}]';

    mockTestnetServer.onGet(`/transactions/boxes/byAddress/unspent/${address}`)
      .reply(200, resp);
  */
});
