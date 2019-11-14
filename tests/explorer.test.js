import { Explorer } from '../src/explorer';

test('get data from explorer', async () => {
  // make real http requests to mainnet explorer
  const address = '9fMPy1XY3GW4T6t3LjYofqmzER6x9cV21n5UVJTWmma4Y9mAW6c';

  const ex = Explorer.mainnet;
  console.log(await ex.getCurrentHeight());
  const outs = await ex.getUnspentOutputs(address);
  console.log(outs.map((o) => o.assets.map((a) => a.amount)));

});
