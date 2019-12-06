import {Client} from "../src/client";
import MockAdapter from "axios-mock-adapter";

declare const console;

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
mock.onGet('/transactions/boxes/byAddress/unspent/9gU3czAt9q4fQPRWBriBbpfLbRP7JrXRmB7kowtwdyw66PMRmaY').reply(200,
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
mock.onGet('/transactions/boxes/13d24a67432d447e53118d920100c747abb52da8da646bc193f03b47b64a8ac5').reply(200,
  {
    "id": "13d24a67432d447e53118d920100c747abb52da8da646bc193f03b47b64a8ac5",
    "value": 77000000,
    "creationHeight": 98262,
    "ergoTree": "0008cd0335717e8ea294d927f59ded0ca77e40bae13853438a8a67fc14e46d411caa4d02",
    "address": "9gsLq5a12nJe33nKtjMe7NPY7o8CQAtjS9amDgALbebv1wmRXrv",
    "assets": [],
    "additionalRegisters": {},
    "spentTransactionId": "5c131f8ae9fa68dab1bac654aa66d364bc7da12107f337a0c9d3d80d8951ee41",
    "mainChain": true
  }
);
mock.onGet('/transactions/5c131f8ae9fa68dab1bac654aa66d364bc7da12107f337a0c9d3d80d8951ee41').reply(200,
  {
    "summary": {
      "id": "5c131f8ae9fa68dab1bac654aa66d364bc7da12107f337a0c9d3d80d8951ee41",
      "timestamp": 1573762896038,
      "size": 367,
      "confirmationsCount": 526,
      "block": {"id": "ec1f21144418b6d9b7b6e7c7355c720ce167ac19025600f204a7dc3fb595e72d", "height": 98288}
    },
    "ioSummary": {"totalCoinsTransferred": 77000000, "totalFee": 0, "feePerByte": 0},
    "inputs": [{
      "id": "13d24a67432d447e53118d920100c747abb52da8da646bc193f03b47b64a8ac5",
      "address": "9gsLq5a12nJe33nKtjMe7NPY7o8CQAtjS9amDgALbebv1wmRXrv",
      "spendingProof": "1b1a40574b59696358a9bf9a054e63a7335ce44d074276b15d0c1f951118663117afffda1c4fdd596e87a9c9aab90b145cb484fee0e22ac2",
      "value": 77000000,
      "transactionId": "5c131f8ae9fa68dab1bac654aa66d364bc7da12107f337a0c9d3d80d8951ee41",
      "outputTransactionId": "ce728ca46307fdf51bfd481934033af42327095726e3951c20d630117bda0f7f"
    }],
    "outputs": [{
      "id": "e2c47c5571ca5c621617157831c0133edf72f83c623579a00d4d3fb879e453dd",
      "value": 75000000,
      "creationHeight": 98286,
      "ergoTree": "0008cd0335717e8ea294d927f59ded0ca77e40bae13853438a8a67fc14e46d411caa4d02",
      "address": "9gsLq5a12nJe33nKtjMe7NPY7o8CQAtjS9amDgALbebv1wmRXrv",
      "assets": [],
      "additionalRegisters": {},
      "spentTransactionId": "6e5ac53edfe02d59ed6272c209432ebb894e9fb3e3aeb1fbeadb113c9e679df6",
      "mainChain": true
    }, {
      "id": "ae5423a3190173c97a2ecde4b16cb882370929dfbf5023fe2990b696e295fef9",
      "value": 1000000,
      "creationHeight": 98286,
      "ergoTree": "1005040004000e36100204a00b08cd0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798ea02d192a39a8cc7a701730073011001020402d19683030193a38cc7b2a57300000193c2b2a57301007473027303830108cdeeac93b1a57304",
      "address": "2iHkR7CWvD1R4j1yZg5bkeDRQavjAaVPeTDFGGLZduHyfWMuYpmhHocX8GJoaieTx78FntzJbCBVL6rf96ocJoZdmWBL2fci7NqWgAirppPQmZ7fN9V6z13Ay6brPriBKYqLp1bT2Fk4FkFLCfdPpe",
      "assets": [],
      "additionalRegisters": {},
      "spentTransactionId": "58f003a615a01dab67ead9c855ab6ca7f0be2e1d055cfa558f211fe649367100",
      "mainChain": true
    }, {
      "id": "0a6b9b49631f8822c8132f76d6f6ffe7db56258cc414f49a349c283ccc80eb0b",
      "value": 1000000,
      "creationHeight": 98286,
      "ergoTree": "0008cd0335717e8ea294d927f59ded0ca77e40bae13853438a8a67fc14e46d411caa4d02",
      "address": "9gsLq5a12nJe33nKtjMe7NPY7o8CQAtjS9amDgALbebv1wmRXrv",
      "assets": [{"tokenId": "13d24a67432d447e53118d920100c747abb52da8da646bc193f03b47b64a8ac5", "amount": 100000000}],
      "additionalRegisters": {
        "R4": "0e03555344",
        "R5": "0e184e6f7468696e67206261636b65642055534420746f6b656e",
        "R6": "0e0132"
      },
      "spentTransactionId": "6e5ac53edfe02d59ed6272c209432ebb894e9fb3e3aeb1fbeadb113c9e679df6",
      "mainChain": true
    }]
  }
);

mock.onPost('/transactions/send')
  .reply(200, {id: '3ebc014bb19a5098820bef805f51dc3d61713003c8e2fae98e27e6e9d030e388'});

test('ergTransfer Ergo', async () => {

  // uncomment to make real requests
  // const client = new Client();
  const resp = await client.transfer(testAddresses[0].sk, testAddresses[1].address, 0.000123456);
  // console.log(resp.data);
  expect(resp.data.id !== undefined)
    .toBe(true);
});

test('issue token', async () => {

  // uncomment to make real requests
  // const client = new Client();
  const resp = await client.tokenIssue('Coinbarn', 123456.789, 3, 'test token of coinbarn.app', testAddresses[0].sk);
  // console.log(resp.data);
  expect(resp.data.id !== undefined)
    .toBe(true);
});


test('ergTransfer token', async () => {

  // uncomment to make real requests
  // const client = new Client();
  const resp = await client.transfer(testAddresses[0].sk, testAddresses[1].address, 1.23, '13d24a67432d447e53118d920100c747abb52da8da646bc193f03b47b64a8ac5');
  // console.log(resp);
  expect(resp.data.id !== undefined).toBe(true);
});


