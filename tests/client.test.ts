import {Client} from "../src/client";
import MockAdapter from "axios-mock-adapter";

declare const console;

const client = new Client();
const mock = new MockAdapter(client.explorer.apiClient);
mock.onGet('/blocks?limit=1').reply(200, {
    "items": [{
      "id": "7d2061fc57ab851f8c0dbdc04b954bd0ee3265238338987840a5742249deaee2",
      "height": 98750,
      "timestamp": 1573819527580,
      "transactionsCount": 1,
      "miner": {
        "address": "88dhgzEuTXaVHENQwT2P342mk4Gfmz1AvZTVaYu49CM6AJHFKjUdwxm8H4h1ho6kVedcRUfsytxxoKDN",
        "name": "ytxxoKDN"
      },
      "size": 3078,
      "difficulty": 161465000525824,
      "minerReward": 67500000000
    }], "total": 98750
  }
);

mock.onGet('/transactions/boxes/byAddress/unspent/9gsLq5a12nJe33nKtjMe7NPY7o8CQAtjS9amDgALbebv1wmRXrv').reply(200,
  [{
    "id": "82ebfb6141fbf31bd4a131017af86e24b5c367b17b3a30b3828bd419cf302dc9",
    "value": 72000000,
    "creationHeight": 98740,
    "ergoTree": "0008cd0335717e8ea294d927f59ded0ca77e40bae13853438a8a67fc14e46d411caa4d02",
    "address": "9gsLq5a12nJe33nKtjMe7NPY7o8CQAtjS9amDgALbebv1wmRXrv",
    "assets": [{"tokenId": "13d24a67432d447e53118d920100c747abb52da8da646bc193f03b47b64a8ac5", "amount": 100000000}],
    "additionalRegisters": {},
    "spentTransactionId": null,
    "mainChain": true
  }, {
    "id": "3a9527f9542e18b53258c48c5cd950149f8a68d0e7408b14be0e78f2f7120c51",
    "value": 1000000,
    "creationHeight": 98740,
    "ergoTree": "0008cd0335717e8ea294d927f59ded0ca77e40bae13853438a8a67fc14e46d411caa4d02",
    "address": "9gsLq5a12nJe33nKtjMe7NPY7o8CQAtjS9amDgALbebv1wmRXrv",
    "assets": [{"tokenId": "504ab509b0bd96416824d806b1095f73a21c28537c41400f5270e4e391d61a12", "amount": 123456789}],
    "additionalRegisters": {
      "R4": "0e08436f696e6261726e",
      "R5": "0e1a7465737420746f6b656e206f6620636f696e6261726e2e617070",
      "R6": "0e0133"
    },
    "spentTransactionId": null,
    "mainChain": true
  }]
);
mock.onGet('  /transactions/boxes/byAddress/unspent/9gU3czAt9q4fQPRWBriBbpfLbRP7JrXRmB7kowtwdyw66PMRmaY').reply(200,
  [{
    "id": "cf35422ea33f6b91c4d2cc66094bf5e43421beeb107b894fbbf5e0c9683e4c14",
    "value": 19000000,
    "creationHeight": 98262,
    "ergoTree": "0008cd03008b9b00dfb9f5b3a48a31f951bb8e74c3b0c7a724229a115eb323aabb6718ee",
    "address": "9gU3czAt9q4fQPRWBriBbpfLbRP7JrXRmB7kowtwdyw66PMRmaY",
    "assets": [],
    "additionalRegisters": {},
    "spentTransactionId": null,
    "mainChain": true
  }]
);
mock.onPost('/transactions/send')
  .reply(200, {id: '3ebc014bb19a5098820bef805f51dc3d61713003c8e2fae98e27e6e9d030e388'});

const testAddresses = [
  {
    sk: '8e6993a4999f009c03d9457ffcf8ff3d840ae78332c959c8e806a53fbafbbee1',
    address: '9gsLq5a12nJe33nKtjMe7NPY7o8CQAtjS9amDgALbebv1wmRXrv',
  },
  {
    sk: 'ff00',
    address: '9gU3czAt9q4fQPRWBriBbpfLbRP7JrXRmB7kowtwdyw66PMRmaY',
  }
];

test('transfer Ergo', async () => {

  const resp = await client.transfer(testAddresses[1].address, 0.000123456, testAddresses[0].sk);
  console.log(resp.data.id);
  expect(resp.data.id !== undefined)
    .toBe(true);
});

test('issue token', async () => {

  const resp = await client.tokenIssue('Coinbarn', 123456.789, 3, 'test token of coinbarn.app', testAddresses[0].sk);
  console.log(resp.data.id);
  expect(resp.data.id !== undefined)
    .toBe(true);
});


test('transfer token', async () => {

  const resp = await client.transfer(testAddresses[1].address, 0.000123456, testAddresses[0].sk);
  console.log(resp.data.id);
  expect(resp.data.id !== undefined)
    .toBe(true);
});


