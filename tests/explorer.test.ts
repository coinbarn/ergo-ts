import {Client} from "../src/client";
import MockAdapter from "axios-mock-adapter";
import {Address, Explorer, feeValue} from "../src";

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

const explorer = Explorer.mainnet;
const mock = new MockAdapter(explorer.apiClient);
mock.onGet('/transactions/unconfirmed').reply(200, [{
  "id": "8f54baa5456220f93705d4fe3aafc017508f70ac9d382cb69693df90d503ee1a",
  "inputs": [{
    "boxId": "d005dfb1aa6d5cf75d2e4c5d0acdc5db186687c7e01046c222d431c4a5fb9169",
    "spendingProof": {
      "proofBytes": "080f685b8c2ef64ba7f96d0a1ba1afa47ca519c9626740550bd5360cfe380b4013183f4ce525d230ecf797790bcae178863b5df60d3cbf23",
      "extension": {}
    }
  }, {
    "boxId": "1a5c881cc2194dd7b38979d15d728437eece0d754690e7b92003548f225d44bd",
    "spendingProof": {
      "proofBytes": "87f04cb479d8da9fcd798dc63296ccb250f1910b93cadeb3fb8089ad893eb6e2a4b311386aa321e5048b87980adbfed8187e51303f6584fe",
      "extension": {}
    }
  }],
  "outputs": [{
    "boxId": "d37852bb2be19f636cb0c49205097695bd5d8f34607717c2e5ca05757acfdced",
    "value": 100000,
    "creationHeight": 101577,
    "ergoTree": "0008cd0335717e8ea294d927f59ded0ca77e40bae13853438a8a67fc14e46d411caa4d02",
    "assets": [{"tokenId": "13d24a67432d447e53118d920100c747abb52da8da646bc193f03b47b64a8ac5", "amount": 123}],
    "additionalRegisters": {}
  }, {
    "boxId": "6bfc35135d21a0f6ca77615b398ce5fb405a6c00a5426d0b770c01153254286e",
    "value": 1000000,
    "creationHeight": 101577,
    "ergoTree": "1005040004000e36100204a00b08cd0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798ea02d192a39a8cc7a701730073011001020402d19683030193a38cc7b2a57300000193c2b2a57301007473027303830108cdeeac93b1a57304",
    "assets": [],
    "additionalRegisters": {}
  }, {
    "boxId": "bcbcaed7604cfa707ac977dd2e26d94713c50c3f84a356894f2720f2795d1b5b",
    "value": 64676544,
    "creationHeight": 101577,
    "ergoTree": "0008cd0335717e8ea294d927f59ded0ca77e40bae13853438a8a67fc14e46d411caa4d02",
    "assets": [{
      "tokenId": "28ae89192c2db84b4caf096768fb7630c4c2894d04fe94561d3410849068e744",
      "amount": 123456789
    }, {
      "tokenId": "9f4a845bf024ff4424e2eeb36b1f0f67335fa27fa6226518ede2d26384b10139",
      "amount": 123456789
    }, {
      "tokenId": "504ab509b0bd96416824d806b1095f73a21c28537c41400f5270e4e391d61a12",
      "amount": 123456789
    }, {
      "tokenId": "13d24a67432d447e53118d920100c747abb52da8da646bc193f03b47b64a8ac5",
      "amount": 99999754
    }, {
      "tokenId": "82ebfb6141fbf31bd4a131017af86e24b5c367b17b3a30b3828bd419cf302dc9",
      "amount": 123456789
    }, {"tokenId": "7ba9220a8a38201d172e6dbf61d5c82793db71ef2760d0bda81539426e5c1db7", "amount": 123456789}],
    "additionalRegisters": {}
  }],
  "size": 610
}, {
  "id": "f8a9d0bc0d675752b344d334f57793aaf538dbf722b745d4ce21123bc64eb053",
  "inputs": [{
    "boxId": "28ae89192c2db84b4caf096768fb7630c4c2894d04fe94561d3410849068e744",
    "spendingProof": {
      "proofBytes": "2fc2451778ffd28fa73a9de0ba21ce1581eaf1a83589ec1f2b7a38d0f36019b294ae37cae6191a254bd6c82c23b37a29349807c61a2a6fa2",
      "extension": {}
    }
  }, {
    "boxId": "608d58267db17a2377f4048358145f74ff5eb34a738d0918ac813fac3325c8be",
    "spendingProof": {
      "proofBytes": "2fc2451778ffd28fa73a9de0ba21ce1581eaf1a83589ec1f2b7a38d0f36019b294ae37cae6191a254bd6c82c23b37a29349807c61a2a6fa2",
      "extension": {}
    }
  }],
  "outputs": [{
    "boxId": "db2842c7ace3e167178d04f9194ba250f3fa13eab725be84d00da12e08b50ffc",
    "value": 100000,
    "creationHeight": 101573,
    "ergoTree": "0008cd0335717e8ea294d927f59ded0ca77e40bae13853438a8a67fc14e46d411caa4d02",
    "assets": [],
    "additionalRegisters": {}
  }, {
    "boxId": "a517f11d496f70ba504a81f74e57ca8e933fc2887499eafed4ba9612d8d0f12f",
    "value": 1000000,
    "creationHeight": 101573,
    "ergoTree": "1005040004000e36100204a00b08cd0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798ea02d192a39a8cc7a701730073011001020402d19683030193a38cc7b2a57300000193c2b2a57301007473027303830108cdeeac93b1a57304",
    "assets": [],
    "additionalRegisters": {}
  }, {
    "boxId": "a214a733f4d0488ac096b156e15f0548ba417855b822f2b20343f929b1a7af5e",
    "value": 66676544,
    "creationHeight": 101573,
    "ergoTree": "0008cd0335717e8ea294d927f59ded0ca77e40bae13853438a8a67fc14e46d411caa4d02",
    "assets": [{
      "tokenId": "9f4a845bf024ff4424e2eeb36b1f0f67335fa27fa6226518ede2d26384b10139",
      "amount": 123456789
    }, {
      "tokenId": "504ab509b0bd96416824d806b1095f73a21c28537c41400f5270e4e391d61a12",
      "amount": 123456789
    }, {
      "tokenId": "13d24a67432d447e53118d920100c747abb52da8da646bc193f03b47b64a8ac5",
      "amount": 99999877
    }, {"tokenId": "82ebfb6141fbf31bd4a131017af86e24b5c367b17b3a30b3828bd419cf302dc9", "amount": 123456789}],
    "additionalRegisters": {}
  }],
  "size": 534
}, {
  "id": "c38c3a2e5554528801fbdfa813d357a2976f789f2f5febe35d9617fc09249807",
  "inputs": [{
    "boxId": "65df604b91cbef18e54aee3753a2955099101a6fd73b7ba63c396a78b345cadb",
    "spendingProof": {
      "proofBytes": "683189eb567247c7fa8515d726c0241ffc90cd60539842e77b2a20accee9b39df0ee4a0282d5189a35bac696436c4104f378544568f13689",
      "extension": {}
    }
  }],
  "outputs": [{
    "boxId": "bb6f32ecd62fbd7637cc724c15425aa40cd0a862380f363011d0aa555eaf2ae8",
    "value": 1000000000,
    "creationHeight": 111673,
    "ergoTree": "0008cd03f00473f6e7dc871b879f44c3c215df14e46e2355bd7ba677d1e2a9aeb36a6bd5",
    "assets": [],
    "additionalRegisters": {}
  }, {
    "boxId": "6e6669d65b12d7020e4f145a13bdc938adaae5f9481b00074ce85afe14f1f0f8",
    "value": 9999000000,
    "creationHeight": 111673,
    "ergoTree": "0008cd03f00473f6e7dc871b879f44c3c215df14e46e2355bd7ba677d1e2a9aeb36a6bd5",
    "assets": [],
    "additionalRegisters": {}
  }, {
    "boxId": "3c5b7043cede4cce78cf73c25abd343eb662070699251840263d7f69c49e499f",
    "value": 1000000,
    "creationHeight": 111673,
    "ergoTree": "1005040004000e36100204a00b08cd0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798ea02d192a39a8cc7a701730073011001020402d19683030193a38cc7b2a57300000193c2b2a57301007473027303830108cdeeac93b1a57304",
    "assets": [],
    "additionalRegisters": {}
  }],
  "size": 299
}, {
  "id": "097c8e493056971f5cf9507fbbeb2fd7d0c8e41830de988d155a29387530fb54",
  "inputs": [{
    "boxId": "ee554c8648ed6437e49277a7745382e76409ba7f97aa968331106acf6b5511fa",
    "spendingProof": {
      "proofBytes": "18ccf17dea1f215d9e232c24fc9d63329831bd9eb43a3533befd6f35c5f5960e3a8abade347e292cffc1f3c5aaba99dacc77d19c06a87059",
      "extension": {}
    }
  }, {
    "boxId": "41981fa31bb2b3439a179287739cecbc06ea87d8707285f2909b37ec62376394",
    "spendingProof": {
      "proofBytes": "42853d846e8025d28f4fd37172ff3efdf6a5e75f6f3ce5fdfb7a0fa94e5b00ccbec66802735a9da75f8424ac9112f70ee2c19d76b52d1c06",
      "extension": {}
    }
  }],
  "outputs": [{
    "boxId": "e044ab76425f3f192a47c42e0ea23a34d52851ab53728d2f99d7962d07a30e7c",
    "value": 4000000000,
    "creationHeight": 111673,
    "ergoTree": "0008cd03f00473f6e7dc871b879f44c3c215df14e46e2355bd7ba677d1e2a9aeb36a6bd5",
    "assets": [],
    "additionalRegisters": {}
  }, {
    "boxId": "f17ef959788fbc92ecbf1bae156c691ac043aef6d0edbc48124187ef934d1c8b",
    "value": 6989000000,
    "creationHeight": 111673,
    "ergoTree": "0008cd03f00473f6e7dc871b879f44c3c215df14e46e2355bd7ba677d1e2a9aeb36a6bd5",
    "assets": [],
    "additionalRegisters": {}
  }, {
    "boxId": "c9e42c376b353ac130dcd6d97f9b2e7d826f8610ed6ec4f237ed0c62efe1a708",
    "value": 1000000,
    "creationHeight": 111673,
    "ergoTree": "1005040004000e36100204a00b08cd0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798ea02d192a39a8cc7a701730073011001020402d19683030193a38cc7b2a57300000193c2b2a57301007473027303830108cdeeac93b1a57304",
    "assets": [],
    "additionalRegisters": {}
  }],
  "size": 389
}, {
  "id": "32fa630d06602e9df5568c1a3e0a19f4b56c8e494de4e79f4e3b1b9b57ce9554",
  "inputs": [{
    "boxId": "b2fbc23a4288afbc5993371702d2c5880d6037b11605dffc72dc63c26ea335f0",
    "spendingProof": {
      "proofBytes": "0ce14babdbc6b3f64ebcffdd476176237e7f1e37a44eb5eceada17df0ed1b8de19e649350eddc4027ac7fa6b29d9a18a1518acb804efb17d",
      "extension": {}
    }
  }],
  "outputs": [{
    "boxId": "fe44490504007e8369b6082f5289e56f99ef977abaa2eb433b820eea2155bad9",
    "value": 1000000,
    "creationHeight": 94249,
    "ergoTree": "1005040004000e36100204a00b08cd0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798ea02d192a39a8cc7a701730073011001020402d19683030193a38cc7b2a57300000193c2b2a57301007473027303830108cdeeac93b1a57304",
    "assets": [],
    "additionalRegisters": {}
  }, {
    "boxId": "2f44143cd76b5ffc82edce420d7eea938fd80e7728891f6bf49010416af73b23",
    "value": 67499000000,
    "creationHeight": 94249,
    "ergoTree": "0008cd02546618d447b524893d047edcc0eb2427e15d66c8b7fd50d046902153354a0845",
    "assets": [],
    "additionalRegisters": {}
  }],
  "size": 254
}, {
  "id": "d4300247beee0662382688e966de52c7e7b2a3ed4550453969dfb8c81c0f9b27",
  "inputs": [{
    "boxId": "da22d51ea5126cd6cd9404df921beecf52a9ee3a502f1175e6bb26eb6c4941da",
    "spendingProof": {
      "proofBytes": "8ff8aa8a8ff423c01437b5c0d64b9819c5ce4c04c8e33e9aab389f86579a1e5af8b548f0abf1b64246cf340e4da141b8426fa24d2215bff4",
      "extension": {}
    }
  }],
  "outputs": [{
    "boxId": "51f4fc57740d360315a810327157cdba848fa189bdab91f06b67d83509b87744",
    "value": 123456,
    "creationHeight": 100993,
    "ergoTree": "0008cd0335717e8ea294d927f59ded0ca77e40bae13853438a8a67fc14e46d411caa4d02",
    "assets": [],
    "additionalRegisters": {}
  }, {
    "boxId": "47010603cb0a070055aee2a3af08ad420ecf54f8cd430fe83cb4069d1101081b",
    "value": 1000000,
    "creationHeight": 100993,
    "ergoTree": "1005040004000e36100204a00b08cd0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798ea02d192a39a8cc7a701730073011001020402d19683030193a38cc7b2a57300000193c2b2a57301007473027303830108cdeeac93b1a57304",
    "assets": [],
    "additionalRegisters": {}
  }, {
    "boxId": "8b4d0ee60af00456fcf6631e15211997f21544f8829d82921e5b9cb3639aca08",
    "value": 68776544,
    "creationHeight": 100993,
    "ergoTree": "0008cd0335717e8ea294d927f59ded0ca77e40bae13853438a8a67fc14e46d411caa4d02",
    "assets": [{
      "tokenId": "9f4a845bf024ff4424e2eeb36b1f0f67335fa27fa6226518ede2d26384b10139",
      "amount": 123456789
    }, {
      "tokenId": "504ab509b0bd96416824d806b1095f73a21c28537c41400f5270e4e391d61a12",
      "amount": 123456789
    }, {
      "tokenId": "13d24a67432d447e53118d920100c747abb52da8da646bc193f03b47b64a8ac5",
      "amount": 99999877
    }, {"tokenId": "82ebfb6141fbf31bd4a131017af86e24b5c367b17b3a30b3828bd419cf302dc9", "amount": 123456789}],
    "additionalRegisters": {}
  }],
  "size": 444
}, {
  "id": "4e8c49cb70e860d90b03801291239f417d572b8da6dc54b3cfd67a2e53552553",
  "inputs": [{
    "boxId": "fcc5a122f478918737b7b9dbc3e8fdd76cc9776b260f83168eaff0ad8e793b94",
    "spendingProof": {
      "proofBytes": "a991b9478af32cb52184f9e244c71fcc52b6095a5ff9a788dfc477cd31ed611673ab43688ed1d79cbe6cf30bd35502c15c6bb50ad4b67952",
      "extension": {}
    }
  }, {
    "boxId": "7e8a2256f14654ae037d800d13b4386f051e78f42e66a04a6213de11a33ee23b",
    "spendingProof": {
      "proofBytes": "80ea58fca5d1dfa0d9e389104b9b24453eda1c752c861f9cc02fadf63455a1b6d212b316ce57ecf53e262478d613730d391edf06e8f8cfdf",
      "extension": {}
    }
  }],
  "outputs": [{
    "boxId": "d6f415c2e772f7296fb39fcc1ee2206f882f6e823cbdcec9cba6702c996314f1",
    "value": 10000000,
    "creationHeight": 95900,
    "ergoTree": "0008cd026dc059d64a50d0dbf07755c2c4a4e557e3df8afa7141868b3ab200643d437ee7",
    "assets": [],
    "additionalRegisters": {}
  }, {
    "boxId": "b2d8a21a8a0844cdb0341a83e75e3f1e69e036eaf14114da659cfad8dd952522",
    "value": 87000000,
    "creationHeight": 95900,
    "ergoTree": "0008cd026dc059d64a50d0dbf07755c2c4a4e557e3df8afa7141868b3ab200643d437ee7",
    "assets": [],
    "additionalRegisters": {}
  }, {
    "boxId": "0586368a5d905ccb3655aecd9a8a1ecdd67f076f2822face159cc8a1d5ff359a",
    "value": 1000000,
    "creationHeight": 95900,
    "ergoTree": "1005040004000e36100204a00b08cd0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798ea02d192a39a8cc7a701730073011001020402d19683030193a38cc7b2a57300000193c2b2a57301007473027303830108cdeeac93b1a57304",
    "assets": [],
    "additionalRegisters": {}
  }],
  "size": 387
}, {
  "id": "fb8a0b1444c6dcaa8bc4fa39b2ebc1d1ee06d0f12badc563a117401ffd146cd1",
  "inputs": [{
    "boxId": "03dc583c46e7c88e8e2bfabfbc14e0f3820e8dd6a02ebe838a5cc08973c7fffc",
    "spendingProof": {
      "proofBytes": "2011f1105b85eb40c0479bfd7a56a23d112a6824c2d2a37145e02416a508c025ba5a3aa668a26b122f35410c6b417045e2315bcbd532c74b",
      "extension": {}
    }
  }, {
    "boxId": "c04d56a3c25af5681465a287b2b4e926e95fdf06d055ecefbe9cc39813633424",
    "spendingProof": {
      "proofBytes": "5d648688517240d4e5d43e5eda01b6b96f6f84f5abbfc1af2218452250254012c2938dad899bab865249f759589dded6530562c482637629",
      "extension": {}
    }
  }, {
    "boxId": "03dc583c46e7c88e8e2bfabfbc14e0f3820e8dd6a02ebe838a5cc08973c7fffc",
    "spendingProof": {
      "proofBytes": "2ad10d3d4a52750326713c644c7917aadc9e787942e79532a3b13e81dfbbeb4aaa38f0582c38f27e9296fad1ae9fa1bafce3bc7cd7598551",
      "extension": {}
    }
  }, {
    "boxId": "614fcc2879c26534fc62c86dc0a7be3007a49387b07c074585557ea6249521eb",
    "spendingProof": {
      "proofBytes": "be196b3e8977cde9589aa92826f7c5bc11b8a17db78c3ad354d1c6622e9d5e1d24a5e9a2ada2bca93dc51e3b83f8d40e9bd417a8c84669d0",
      "extension": {}
    }
  }],
  "outputs": [{
    "boxId": "6ad806c58d16a8057eedfcd711a052561adc89036e6801655709f4a3221d7681",
    "value": 4000000,
    "creationHeight": 82211,
    "ergoTree": "0008cd0240bc1de7a4976580ea98e84920e0854a75a70063d56bed5e8939c8b83a1c9887",
    "assets": [],
    "additionalRegisters": {}
  }, {
    "boxId": "5fda60572212f17c8e70dd3c3df7a5c0095dcef591d21655d68006ca12333788",
    "value": 577779910,
    "creationHeight": 82211,
    "ergoTree": "0008cd020741296f1bf88bab2270929be88f742bb0f6b267643588af85639e1a8c982a41",
    "assets": [],
    "additionalRegisters": {}
  }, {
    "boxId": "9a8c0375e0914b16caa457a512f0b8109a5870549af843a02b78f7acc5336ff2",
    "value": 1000000,
    "creationHeight": 82211,
    "ergoTree": "1005040004000e36100204a00b08cd0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798ea02d192a39a8cc7a701730073011001020402d19683030193a38cc7b2a57300000193c2b2a57301007473027303830108cdeeac93b1a57304",
    "assets": [],
    "additionalRegisters": {}
  }],
  "size": 568
}, {
  "id": "eacdf697ad73b870da2351278d5a99d0bd777212503944215d769d76b4c9fbeb",
  "inputs": [{
    "boxId": "f6fba095d6f6f4b9e673cf1ca5e3bc7cd133ccc94b75cce726afca4d1fb2cd8d",
    "spendingProof": {
      "proofBytes": "0f13a87a1e3e83caeed732b5417e53a9343208d03455a24bd1565debf1507e9e111a417e99969060e700b1f56e3dfd64ffca0c78e97ee99c",
      "extension": {}
    }
  }],
  "outputs": [{
    "boxId": "ef3d2d5ce7070373fa1c5aab8f321e1b49ee2b49c95d0b298d5eca04c8ea2d46",
    "value": 9555000,
    "creationHeight": 98125,
    "ergoTree": "0008cd03008b9b00dfb9f5b3a48a31f951bb8e74c3b0c7a724229a115eb323aabb6718ee",
    "assets": [],
    "additionalRegisters": {}
  }, {
    "boxId": "aae78f1230a4f19f74216112f68a590f680ed46c35d011ab10cd92c1bf302ee0",
    "value": 1000000,
    "creationHeight": 98125,
    "ergoTree": "1005040004000e36100204a00b08cd0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798ea02d192a39a8cc7a701730073011001020402d19683030193a38cc7b2a57300000193c2b2a57301007473027303830108cdeeac93b1a57304",
    "assets": [],
    "additionalRegisters": {}
  }, {
    "boxId": "dff3b49145976a601d4a9570f1f598a8b46aa05f5a1a1e8535b492c609c6746e",
    "value": 78445000,
    "creationHeight": 98125,
    "ergoTree": "0008cd0335717e8ea294d927f59ded0ca77e40bae13853438a8a67fc14e46d411caa4d02",
    "assets": [],
    "additionalRegisters": {}
  }],
  "size": 297
}, {
  "id": "e98636aa8c9eb002c42f05d5230f12670e69b7cac65a634b330fa329d1f759b3",
  "inputs": [{
    "boxId": "d005dfb1aa6d5cf75d2e4c5d0acdc5db186687c7e01046c222d431c4a5fb9169",
    "spendingProof": {
      "proofBytes": "92ca1055e34f340c05cad2836d8e0ce32f4bf3e453f47a5dcf27facf4043aa7868302a39809accc2267b9848f6257108752e1b5f626dab22",
      "extension": {}
    }
  }, {
    "boxId": "1a5c881cc2194dd7b38979d15d728437eece0d754690e7b92003548f225d44bd",
    "spendingProof": {
      "proofBytes": "a4745aa5a7a0ac5c1af309e4ee52fe461d64c94c9676f81179276044a80af6d6fb9cd8650c0d213e56fef69f2ee5d33c1336bd9c9e8b866a",
      "extension": {}
    }
  }],
  "outputs": [{
    "boxId": "61abc43c9f2e39c5b89018fff3106e31f204e89907a9a2d4fb2216e7f3855deb",
    "value": 19000000,
    "creationHeight": 101577,
    "ergoTree": "0008cd0335717e8ea294d927f59ded0ca77e40bae13853438a8a67fc14e46d411caa4d02",
    "assets": [],
    "additionalRegisters": {}
  }, {
    "boxId": "0f2e894e0a11cd1a253ddac10812ba897585cbf41bfdc17c1e7a22b00280a666",
    "value": 1000000,
    "creationHeight": 101577,
    "ergoTree": "1005040004000e36100204a00b08cd0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798ea02d192a39a8cc7a701730073011001020402d19683030193a38cc7b2a57300000193c2b2a57301007473027303830108cdeeac93b1a57304",
    "assets": [],
    "additionalRegisters": {}
  }, {
    "boxId": "df5d2e976ffb9220ecb6bb99de100a3d0be5246c3153f1701694a5d7b74b3927",
    "value": 45776544,
    "creationHeight": 101577,
    "ergoTree": "0008cd0335717e8ea294d927f59ded0ca77e40bae13853438a8a67fc14e46d411caa4d02",
    "assets": [{
      "tokenId": "28ae89192c2db84b4caf096768fb7630c4c2894d04fe94561d3410849068e744",
      "amount": 123456789
    }, {
      "tokenId": "9f4a845bf024ff4424e2eeb36b1f0f67335fa27fa6226518ede2d26384b10139",
      "amount": 123456789
    }, {
      "tokenId": "504ab509b0bd96416824d806b1095f73a21c28537c41400f5270e4e391d61a12",
      "amount": 123456789
    }, {
      "tokenId": "13d24a67432d447e53118d920100c747abb52da8da646bc193f03b47b64a8ac5",
      "amount": 99999877
    }, {
      "tokenId": "82ebfb6141fbf31bd4a131017af86e24b5c367b17b3a30b3828bd419cf302dc9",
      "amount": 123456789
    }, {"tokenId": "7ba9220a8a38201d172e6dbf61d5c82793db71ef2760d0bda81539426e5c1db7", "amount": 123456789}],
    "additionalRegisters": {}
  }],
  "size": 609
}]);

mock.onGet('/transactions/unconfirmed/byAddress/9eaFpf4DR1Fj3WnCvDdgfNNdfa8tAZ1Ga21YchCZpeFSEFtkKDq').reply(200, [{
    "id": "fb8a0b1444c6dcaa8bc4fa39b2ebc1d1ee06d0f12badc563a117401ffd146cd1",
    "inputs": [{
      "boxId": "03dc583c46e7c88e8e2bfabfbc14e0f3820e8dd6a02ebe838a5cc08973c7fffc",
      "spendingProof": {
        "proofBytes": "2011f1105b85eb40c0479bfd7a56a23d112a6824c2d2a37145e02416a508c025ba5a3aa668a26b122f35410c6b417045e2315bcbd532c74b",
        "extension": {}
      }
    }, {
      "boxId": "c04d56a3c25af5681465a287b2b4e926e95fdf06d055ecefbe9cc39813633424",
      "spendingProof": {
        "proofBytes": "5d648688517240d4e5d43e5eda01b6b96f6f84f5abbfc1af2218452250254012c2938dad899bab865249f759589dded6530562c482637629",
        "extension": {}
      }
    }, {
      "boxId": "03dc583c46e7c88e8e2bfabfbc14e0f3820e8dd6a02ebe838a5cc08973c7fffc",
      "spendingProof": {
        "proofBytes": "2ad10d3d4a52750326713c644c7917aadc9e787942e79532a3b13e81dfbbeb4aaa38f0582c38f27e9296fad1ae9fa1bafce3bc7cd7598551",
        "extension": {}
      }
    }, {
      "boxId": "614fcc2879c26534fc62c86dc0a7be3007a49387b07c074585557ea6249521eb",
      "spendingProof": {
        "proofBytes": "be196b3e8977cde9589aa92826f7c5bc11b8a17db78c3ad354d1c6622e9d5e1d24a5e9a2ada2bca93dc51e3b83f8d40e9bd417a8c84669d0",
        "extension": {}
      }
    }],
    "outputs": [{
      "boxId": "6ad806c58d16a8057eedfcd711a052561adc89036e6801655709f4a3221d7681",
      "value": 4000000,
      "creationHeight": 82211,
      "ergoTree": "0008cd0240bc1de7a4976580ea98e84920e0854a75a70063d56bed5e8939c8b83a1c9887",
      "assets": [],
      "additionalRegisters": {}
    }, {
      "boxId": "5fda60572212f17c8e70dd3c3df7a5c0095dcef591d21655d68006ca12333788",
      "value": 577779910,
      "creationHeight": 82211,
      "ergoTree": "0008cd020741296f1bf88bab2270929be88f742bb0f6b267643588af85639e1a8c982a41",
      "assets": [],
      "additionalRegisters": {}
    }, {
      "boxId": "9a8c0375e0914b16caa457a512f0b8109a5870549af843a02b78f7acc5336ff2",
      "value": 1000000,
      "creationHeight": 82211,
      "ergoTree": "1005040004000e36100204a00b08cd0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798ea02d192a39a8cc7a701730073011001020402d19683030193a38cc7b2a57300000193c2b2a57301007473027303830108cdeeac93b1a57304",
      "assets": [],
      "additionalRegisters": {}
    }],
    "size": 568
  }]
);

mock.onGet('/addresses/9gU3czAt9q4fQPRWBriBbpfLbRP7JrXRmB7kowtwdyw66PMRmaY/transactions').reply(200,
  {
    "items": [{
      "id": "b9c543fe275bd97480f9fec17d297c7ec98e4d2c2dec397549b85f5eab709b85",
      "headerId": "454d6ebf501b8a5eed9222d094f94268bb1c42e4c0f8431bc5477dfffc9c86ae",
      "timestamp": 1575556166063,
      "confirmationsCount": 919,
      "inputs": [{
        "id": "df47f3ca04da565cd655ece950067518a946969143dfda4eb8a75f41aa4d8e9d",
        "address": "9gU3czAt9q4fQPRWBriBbpfLbRP7JrXRmB7kowtwdyw66PMRmaY",
        "spendingProof": "95929ed8ec767e2ef3aa3482be3bb6ed74eb7a649766d2956a1caa1afe5aecdc956ae75f22b4754c5c81722aead969532c916035021414b0",
        "value": 18123456,
        "transactionId": "b9c543fe275bd97480f9fec17d297c7ec98e4d2c2dec397549b85f5eab709b85",
        "outputTransactionId": "274cc423c2465c086147d6971beecd9ebaa49b9e4d2ae0d95ddd482524427f81"
      }],
      "outputs": [{
        "id": "0204a1d51389350191e6e8f7bd447caf321f9265a92de4014b210e380777f26b",
        "value": 4777856,
        "creationHeight": 113168,
        "ergoTree": "0008cd03008b9b00dfb9f5b3a48a31f951bb8e74c3b0c7a724229a115eb323aabb6718ee",
        "address": "9gU3czAt9q4fQPRWBriBbpfLbRP7JrXRmB7kowtwdyw66PMRmaY",
        "assets": [{"tokenId": "13d24a67432d447e53118d920100c747abb52da8da646bc193f03b47b64a8ac5", "amount": 100}],
        "additionalRegisters": {},
        "spentTransactionId": null,
        "mainChain": true
      }, {
        "id": "82c7f9d7173979dee32cf2609a9edcd83dd1cf216e9cda5f609b41011e20924d",
        "value": 1000000,
        "creationHeight": 113168,
        "ergoTree": "1005040004000e36100204a00b08cd0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798ea02d192a39a8cc7a701730073011001020402d19683030193a38cc7b2a57300000193c2b2a57301007473027303830108cdeeac93b1a57304",
        "address": "2iHkR7CWvD1R4j1yZg5bkeDRQavjAaVPeTDFGGLZduHyfWMuYpmhHocX8GJoaieTx78FntzJbCBVL6rf96ocJoZdmWBL2fci7NqWgAirppPQmZ7fN9V6z13Ay6brPriBKYqLp1bT2Fk4FkFLCfdPpe",
        "assets": [],
        "additionalRegisters": {},
        "spentTransactionId": "c63cbba5916e2e10ae97123505ae028cad025774a1dfb6da1a9b776f9da225a5",
        "mainChain": true
      }, {
        "id": "65cfd85748bbf3a9acecbd53eecd7220f8e37998c6d81bbf27051e8f30570699",
        "value": 12345600,
        "creationHeight": 113168,
        "ergoTree": "0008cd031d6a3105341a734909ef5a7f4da60d06ef7ffe45b4fa39283008965c6be66927",
        "address": "9ggm43XYvHgqp2DfAuqdPoFJ9UgG33Y3fDrk9ydkH9h9k15eGwK",
        "assets": [],
        "additionalRegisters": {},
        "spentTransactionId": "af2d0f8f3cbcfd0208f9b12880310cced5d4ae524edf45b93360a0926b505abc",
        "mainChain": true
      }]
    }, {
      "id": "274cc423c2465c086147d6971beecd9ebaa49b9e4d2ae0d95ddd482524427f81",
      "headerId": "53db5852ce47d1226b815067a3926a65405d57bf06d5178eb6516cf717d59e57",
      "timestamp": 1575555611949,
      "confirmationsCount": 924,
      "inputs": [{
        "id": "3075412f2715930ecbbfa726089c890b86a647066783357fe1e7ac8f9bfc2a03",
        "address": "9gU3czAt9q4fQPRWBriBbpfLbRP7JrXRmB7kowtwdyw66PMRmaY",
        "spendingProof": "5a6ea95179a28d16a09bb853d6c82917fa225b4c595953cfd7802ecb50a508f92b42c8e226bae3a6b2fae92235eb1c766e619b091873e231",
        "value": 123456,
        "transactionId": "274cc423c2465c086147d6971beecd9ebaa49b9e4d2ae0d95ddd482524427f81",
        "outputTransactionId": "2cb08ad7c765e060697a746b591a7c3ca8963f212dcc6af45990630a2f2b4a12"
      }, {
        "id": "cf35422ea33f6b91c4d2cc66094bf5e43421beeb107b894fbbf5e0c9683e4c14",
        "address": "9gU3czAt9q4fQPRWBriBbpfLbRP7JrXRmB7kowtwdyw66PMRmaY",
        "spendingProof": "b9b0f4c6e166c914a3a156c6fc44f44a1971892c92809849c63cc35cd18f180e113c2c32fb9ce76cb38f2af7e66cd0f6dfc72dbd13668664",
        "value": 19000000,
        "transactionId": "274cc423c2465c086147d6971beecd9ebaa49b9e4d2ae0d95ddd482524427f81",
        "outputTransactionId": "ce728ca46307fdf51bfd481934033af42327095726e3951c20d630117bda0f7f"
      }, {
        "id": "e61225fb5f051c8215649eb2e4018908b4e30d38a973d2e44ee6254a84a16d2c",
        "address": "9gU3czAt9q4fQPRWBriBbpfLbRP7JrXRmB7kowtwdyw66PMRmaY",
        "spendingProof": "4ce677b595cb2c5cdc0fa686b0202a1a7faeeb5320e2bcc8a46891c7c15da918fb975dd912113f279dc273e4ad5d252cc760a12ba103c7ca",
        "value": 100000,
        "transactionId": "274cc423c2465c086147d6971beecd9ebaa49b9e4d2ae0d95ddd482524427f81",
        "outputTransactionId": "6c9597f1fd372eda236fcfbbbd482109337f2895f58119291b63946dcfea3549"
      }],
      "outputs": [{
        "id": "df47f3ca04da565cd655ece950067518a946969143dfda4eb8a75f41aa4d8e9d",
        "value": 18123456,
        "creationHeight": 113163,
        "ergoTree": "0008cd03008b9b00dfb9f5b3a48a31f951bb8e74c3b0c7a724229a115eb323aabb6718ee",
        "address": "9gU3czAt9q4fQPRWBriBbpfLbRP7JrXRmB7kowtwdyw66PMRmaY",
        "assets": [{"tokenId": "13d24a67432d447e53118d920100c747abb52da8da646bc193f03b47b64a8ac5", "amount": 100}],
        "additionalRegisters": {},
        "spentTransactionId": "b9c543fe275bd97480f9fec17d297c7ec98e4d2c2dec397549b85f5eab709b85",
        "mainChain": true
      }, {
        "id": "790031d104e1a459811ade3ec5d9f73de4328a8987f35261003a19f047c957bb",
        "value": 1000000,
        "creationHeight": 113163,
        "ergoTree": "1005040004000e36100204a00b08cd0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798ea02d192a39a8cc7a701730073011001020402d19683030193a38cc7b2a57300000193c2b2a57301007473027303830108cdeeac93b1a57304",
        "address": "2iHkR7CWvD1R4j1yZg5bkeDRQavjAaVPeTDFGGLZduHyfWMuYpmhHocX8GJoaieTx78FntzJbCBVL6rf96ocJoZdmWBL2fci7NqWgAirppPQmZ7fN9V6z13Ay6brPriBKYqLp1bT2Fk4FkFLCfdPpe",
        "assets": [],
        "additionalRegisters": {},
        "spentTransactionId": "e49ea20a77eabe7cbf9b932530f854b90d40fcee9568eaef4c7ff3a873138f92",
        "mainChain": true
      }, {
        "id": "07a275d596b594fdfa70cb73d06938e19a9b9a2850c003be13249570b08175c0",
        "value": 100000,
        "creationHeight": 113163,
        "ergoTree": "0008cd0371bd561e54ff8c9e75d2067751e7eb720c11807c8239f3f6ddf44caeb83ce2fc",
        "address": "9hKu1vagxfbeqEQact32qSTmfWu1aeGnmdPahCo6zkeBRF1ibJa",
        "assets": [{"tokenId": "13d24a67432d447e53118d920100c747abb52da8da646bc193f03b47b64a8ac5", "amount": 23}],
        "additionalRegisters": {},
        "spentTransactionId": null,
        "mainChain": true
      }]
    }, {
      "id": "2cb08ad7c765e060697a746b591a7c3ca8963f212dcc6af45990630a2f2b4a12",
      "headerId": "bb097d61c5670e2ebb60fcf8cb5b675b6e25f7508a1999c4d6a1039b9c8c6986",
      "timestamp": 1574088935370,
      "confirmationsCount": 13094,
      "inputs": [{
        "id": "da22d51ea5126cd6cd9404df921beecf52a9ee3a502f1175e6bb26eb6c4941da",
        "address": "9gsLq5a12nJe33nKtjMe7NPY7o8CQAtjS9amDgALbebv1wmRXrv",
        "spendingProof": "ee8dba79dcaf2ebeb6c5db0f5bbb92583a4a4d2664cbfd5daa2789f8dce0e98128f5955d0fc1698e9fd02353a631d7f41addafcdcbf57ac7",
        "value": 69900000,
        "transactionId": "2cb08ad7c765e060697a746b591a7c3ca8963f212dcc6af45990630a2f2b4a12",
        "outputTransactionId": "6c9597f1fd372eda236fcfbbbd482109337f2895f58119291b63946dcfea3549"
      }],
      "outputs": [{
        "id": "23c5334eb42bbfd4dc19d5a0ed677cf0cbae1fe25c055339651d30ee2cf77778",
        "value": 68776544,
        "creationHeight": 100992,
        "ergoTree": "0008cd0335717e8ea294d927f59ded0ca77e40bae13853438a8a67fc14e46d411caa4d02",
        "address": "9gsLq5a12nJe33nKtjMe7NPY7o8CQAtjS9amDgALbebv1wmRXrv",
        "assets": [{
          "tokenId": "82ebfb6141fbf31bd4a131017af86e24b5c367b17b3a30b3828bd419cf302dc9",
          "amount": 123456789
        }, {
          "tokenId": "13d24a67432d447e53118d920100c747abb52da8da646bc193f03b47b64a8ac5",
          "amount": 99999877
        }, {
          "tokenId": "504ab509b0bd96416824d806b1095f73a21c28537c41400f5270e4e391d61a12",
          "amount": 123456789
        }, {"tokenId": "9f4a845bf024ff4424e2eeb36b1f0f67335fa27fa6226518ede2d26384b10139", "amount": 123456789}],
        "additionalRegisters": {},
        "spentTransactionId": "199f2ddbbcde8565b0c20c1ae5b5ec40ef6b134d64a518e5d15e1880daace674",
        "mainChain": true
      }, {
        "id": "8efc97e41090d2a1d36bd5cd2dbc25ad39ca32dca86fa351f70d31c7cd41a1e8",
        "value": 1000000,
        "creationHeight": 100992,
        "ergoTree": "1005040004000e36100204a00b08cd0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798ea02d192a39a8cc7a701730073011001020402d19683030193a38cc7b2a57300000193c2b2a57301007473027303830108cdeeac93b1a57304",
        "address": "2iHkR7CWvD1R4j1yZg5bkeDRQavjAaVPeTDFGGLZduHyfWMuYpmhHocX8GJoaieTx78FntzJbCBVL6rf96ocJoZdmWBL2fci7NqWgAirppPQmZ7fN9V6z13Ay6brPriBKYqLp1bT2Fk4FkFLCfdPpe",
        "assets": [],
        "additionalRegisters": {},
        "spentTransactionId": "81d3a79614622adfe99068951cd5758c2def1f222c8349d8546ef49a47d07680",
        "mainChain": true
      }, {
        "id": "3075412f2715930ecbbfa726089c890b86a647066783357fe1e7ac8f9bfc2a03",
        "value": 123456,
        "creationHeight": 100992,
        "ergoTree": "0008cd03008b9b00dfb9f5b3a48a31f951bb8e74c3b0c7a724229a115eb323aabb6718ee",
        "address": "9gU3czAt9q4fQPRWBriBbpfLbRP7JrXRmB7kowtwdyw66PMRmaY",
        "assets": [],
        "additionalRegisters": {},
        "spentTransactionId": "274cc423c2465c086147d6971beecd9ebaa49b9e4d2ae0d95ddd482524427f81",
        "mainChain": true
      }]
    }, {
      "id": "6c9597f1fd372eda236fcfbbbd482109337f2895f58119291b63946dcfea3549",
      "headerId": "7885fbaea475da38a8912de2194ac6647b52920660ce6de12772acfc59d3ceb6",
      "timestamp": 1573831235206,
      "confirmationsCount": 15254,
      "inputs": [{
        "id": "ad7e3bccc1b696e091113a1fd93fbffa088403e005a6c7a796091d81e6143896",
        "address": "9gsLq5a12nJe33nKtjMe7NPY7o8CQAtjS9amDgALbebv1wmRXrv",
        "spendingProof": "9c8b215edfcd7d9371d7741019f383d74ecd0551f5924fd7ab5fd91da512ca578586255636a57d4a7899bf18d0f6a2c10f0e9f7c245493a6",
        "value": 1000000,
        "transactionId": "6c9597f1fd372eda236fcfbbbd482109337f2895f58119291b63946dcfea3549",
        "outputTransactionId": "82dea780a43e537c8fffea6bda3fa3a409d4539565fdce9d4ce4eab020f33bac"
      }, {
        "id": "ae79f78feca2c22488ca72a1d296e6aaff9d0574d36f2a7886cf0d4650eaa9d0",
        "address": "9gsLq5a12nJe33nKtjMe7NPY7o8CQAtjS9amDgALbebv1wmRXrv",
        "spendingProof": "f1035de5601b6e15dda15703b160b39cc3bb21481ebf5b3862bd57c77944d37359bc64b82dbdacc292bab40b73075cd989e0412a1e2a749e",
        "value": 70000000,
        "transactionId": "6c9597f1fd372eda236fcfbbbd482109337f2895f58119291b63946dcfea3549",
        "outputTransactionId": "82dea780a43e537c8fffea6bda3fa3a409d4539565fdce9d4ce4eab020f33bac"
      }],
      "outputs": [{
        "id": "da22d51ea5126cd6cd9404df921beecf52a9ee3a502f1175e6bb26eb6c4941da",
        "value": 69900000,
        "creationHeight": 98833,
        "ergoTree": "0008cd0335717e8ea294d927f59ded0ca77e40bae13853438a8a67fc14e46d411caa4d02",
        "address": "9gsLq5a12nJe33nKtjMe7NPY7o8CQAtjS9amDgALbebv1wmRXrv",
        "assets": [{
          "tokenId": "82ebfb6141fbf31bd4a131017af86e24b5c367b17b3a30b3828bd419cf302dc9",
          "amount": 123456789
        }, {
          "tokenId": "13d24a67432d447e53118d920100c747abb52da8da646bc193f03b47b64a8ac5",
          "amount": 99999877
        }, {
          "tokenId": "504ab509b0bd96416824d806b1095f73a21c28537c41400f5270e4e391d61a12",
          "amount": 123456789
        }, {"tokenId": "9f4a845bf024ff4424e2eeb36b1f0f67335fa27fa6226518ede2d26384b10139", "amount": 123456789}],
        "additionalRegisters": {},
        "spentTransactionId": "2cb08ad7c765e060697a746b591a7c3ca8963f212dcc6af45990630a2f2b4a12",
        "mainChain": true
      }, {
        "id": "28b603cceb3927ebcae01d74cd73591ace407df3631e6d2e4b2e9d4796f98f51",
        "value": 1000000,
        "creationHeight": 98833,
        "ergoTree": "1005040004000e36100204a00b08cd0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798ea02d192a39a8cc7a701730073011001020402d19683030193a38cc7b2a57300000193c2b2a57301007473027303830108cdeeac93b1a57304",
        "address": "2iHkR7CWvD1R4j1yZg5bkeDRQavjAaVPeTDFGGLZduHyfWMuYpmhHocX8GJoaieTx78FntzJbCBVL6rf96ocJoZdmWBL2fci7NqWgAirppPQmZ7fN9V6z13Ay6brPriBKYqLp1bT2Fk4FkFLCfdPpe",
        "assets": [],
        "additionalRegisters": {},
        "spentTransactionId": "edb89be3a8e9755af44461808a100ea412985daba7175b6e02dd9792894a67a3",
        "mainChain": true
      }, {
        "id": "e61225fb5f051c8215649eb2e4018908b4e30d38a973d2e44ee6254a84a16d2c",
        "value": 100000,
        "creationHeight": 98833,
        "ergoTree": "0008cd03008b9b00dfb9f5b3a48a31f951bb8e74c3b0c7a724229a115eb323aabb6718ee",
        "address": "9gU3czAt9q4fQPRWBriBbpfLbRP7JrXRmB7kowtwdyw66PMRmaY",
        "assets": [{"tokenId": "13d24a67432d447e53118d920100c747abb52da8da646bc193f03b47b64a8ac5", "amount": 123}],
        "additionalRegisters": {},
        "spentTransactionId": "274cc423c2465c086147d6971beecd9ebaa49b9e4d2ae0d95ddd482524427f81",
        "mainChain": true
      }]
    }, {
      "id": "ce728ca46307fdf51bfd481934033af42327095726e3951c20d630117bda0f7f",
      "headerId": "e004354b8e196e9f2f6d5fb0c332c070119c4fa570974e598e108f11c7ce8486",
      "timestamp": 1573759863133,
      "confirmationsCount": 15825,
      "inputs": [{
        "id": "09fa1d73ae941b5ba10f6d5ca123e83129f9eea243a9751cd3da98c0bb1612fd",
        "address": "9gsLq5a12nJe33nKtjMe7NPY7o8CQAtjS9amDgALbebv1wmRXrv",
        "spendingProof": "79996766f758cb77de131ffb357bafb8defe4da3b1a0696078b6db6fb12469b34652768c1b7da2617093552df5ae97ed520b9f7116130e7f",
        "value": 19000000,
        "transactionId": "ce728ca46307fdf51bfd481934033af42327095726e3951c20d630117bda0f7f",
        "outputTransactionId": "39a8f093fa05c8b594fdb9c5f9c1932bb8b279ff8dce71a4759cf18572fe5033"
      }, {
        "id": "67aaba92a9373978ba7c4b0adf67ec005923a2be86212f4fe0c802a4c5823f51",
        "address": "9gsLq5a12nJe33nKtjMe7NPY7o8CQAtjS9amDgALbebv1wmRXrv",
        "spendingProof": "42a7afdf05a7da3e77dab577eaec56b50723adbf6b8e481a30a657604539b0add3e274c15bef511bd3b7cdd7d813ddfab25ae708526ebe20",
        "value": 78000000,
        "transactionId": "ce728ca46307fdf51bfd481934033af42327095726e3951c20d630117bda0f7f",
        "outputTransactionId": "9b64728f9ec6bd0ee2636ed86d692c425183435f33eaeef5d15d5e625780ef9b"
      }],
      "outputs": [{
        "id": "13d24a67432d447e53118d920100c747abb52da8da646bc193f03b47b64a8ac5",
        "value": 77000000,
        "creationHeight": 98262,
        "ergoTree": "0008cd0335717e8ea294d927f59ded0ca77e40bae13853438a8a67fc14e46d411caa4d02",
        "address": "9gsLq5a12nJe33nKtjMe7NPY7o8CQAtjS9amDgALbebv1wmRXrv",
        "assets": [],
        "additionalRegisters": {},
        "spentTransactionId": "5c131f8ae9fa68dab1bac654aa66d364bc7da12107f337a0c9d3d80d8951ee41",
        "mainChain": true
      }, {
        "id": "2a0a370ac80dc42b93093ba787d256bc85302f66d7b4901480562ec767f1efdb",
        "value": 1000000,
        "creationHeight": 98262,
        "ergoTree": "1005040004000e36100204a00b08cd0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798ea02d192a39a8cc7a701730073011001020402d19683030193a38cc7b2a57300000193c2b2a57301007473027303830108cdeeac93b1a57304",
        "address": "2iHkR7CWvD1R4j1yZg5bkeDRQavjAaVPeTDFGGLZduHyfWMuYpmhHocX8GJoaieTx78FntzJbCBVL6rf96ocJoZdmWBL2fci7NqWgAirppPQmZ7fN9V6z13Ay6brPriBKYqLp1bT2Fk4FkFLCfdPpe",
        "assets": [],
        "additionalRegisters": {},
        "spentTransactionId": "b1cd31c85b4a6cc349e6c84b273e6226675a71e382eaa9c69539ef9df2afdc37",
        "mainChain": true
      }, {
        "id": "cf35422ea33f6b91c4d2cc66094bf5e43421beeb107b894fbbf5e0c9683e4c14",
        "value": 19000000,
        "creationHeight": 98262,
        "ergoTree": "0008cd03008b9b00dfb9f5b3a48a31f951bb8e74c3b0c7a724229a115eb323aabb6718ee",
        "address": "9gU3czAt9q4fQPRWBriBbpfLbRP7JrXRmB7kowtwdyw66PMRmaY",
        "assets": [],
        "additionalRegisters": {},
        "spentTransactionId": "274cc423c2465c086147d6971beecd9ebaa49b9e4d2ae0d95ddd482524427f81",
        "mainChain": true
      }]
    }, {
      "id": "39a8f093fa05c8b594fdb9c5f9c1932bb8b279ff8dce71a4759cf18572fe5033",
      "headerId": "746368d2330e56dd272fe442b9e3428f2a3d0a6741902abb435ff8cc8bc607ff",
      "timestamp": 1573744605897,
      "confirmationsCount": 15959,
      "inputs": [{
        "id": "4a16c6f976cf2a3accfaf030a7af5fa74b24cfcc343c36f01468810b8a2e55a3",
        "address": "9gU3czAt9q4fQPRWBriBbpfLbRP7JrXRmB7kowtwdyw66PMRmaY",
        "spendingProof": "fcd08d2ce8649afaa3b4f236acaf15959d8c908c7a62c94725a5ed958005aef1f96ca3d08289a30f3545b19ba5b914b7de6e23236373c245",
        "value": 10000000,
        "transactionId": "39a8f093fa05c8b594fdb9c5f9c1932bb8b279ff8dce71a4759cf18572fe5033",
        "outputTransactionId": "9b64728f9ec6bd0ee2636ed86d692c425183435f33eaeef5d15d5e625780ef9b"
      }, {
        "id": "933e8b31b3729eab7eaabc89752d1500a83cf38d2e6404ae07dba1662c04ef66",
        "address": "9gU3czAt9q4fQPRWBriBbpfLbRP7JrXRmB7kowtwdyw66PMRmaY",
        "spendingProof": "ecd5fe529ccb831942ba1259c6ea7fcdb71c2bfbe890d1934cbb6042fe556f226fea6259885a53f6045d9ae09f12f267d2f6b11b46afaf83",
        "value": 10000000,
        "transactionId": "39a8f093fa05c8b594fdb9c5f9c1932bb8b279ff8dce71a4759cf18572fe5033",
        "outputTransactionId": "55efebec40417ccda975a71d9cb045bbe464419746bfcc612908ba0c32594ead"
      }],
      "outputs": [{
        "id": "50d8dff6d5906a306acaeb2f16b77b2e2ee64d8cb985a6e906e0f97bf11968b9",
        "value": 1000000,
        "creationHeight": 98128,
        "ergoTree": "1005040004000e36100204a00b08cd0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798ea02d192a39a8cc7a701730073011001020402d19683030193a38cc7b2a57300000193c2b2a57301007473027303830108cdeeac93b1a57304",
        "address": "2iHkR7CWvD1R4j1yZg5bkeDRQavjAaVPeTDFGGLZduHyfWMuYpmhHocX8GJoaieTx78FntzJbCBVL6rf96ocJoZdmWBL2fci7NqWgAirppPQmZ7fN9V6z13Ay6brPriBKYqLp1bT2Fk4FkFLCfdPpe",
        "assets": [],
        "additionalRegisters": {},
        "spentTransactionId": "ad0512c7b9a82bd838602d1c4e4a836668fd568f89575fc893494a10f100207d",
        "mainChain": true
      }, {
        "id": "09fa1d73ae941b5ba10f6d5ca123e83129f9eea243a9751cd3da98c0bb1612fd",
        "value": 19000000,
        "creationHeight": 98128,
        "ergoTree": "0008cd0335717e8ea294d927f59ded0ca77e40bae13853438a8a67fc14e46d411caa4d02",
        "address": "9gsLq5a12nJe33nKtjMe7NPY7o8CQAtjS9amDgALbebv1wmRXrv",
        "assets": [],
        "additionalRegisters": {},
        "spentTransactionId": "ce728ca46307fdf51bfd481934033af42327095726e3951c20d630117bda0f7f",
        "mainChain": true
      }]
    }, {
      "id": "9b64728f9ec6bd0ee2636ed86d692c425183435f33eaeef5d15d5e625780ef9b",
      "headerId": "45ee9cc4a265a25342275733ce93b4e2310e57c841bd782e1b9d8169c7f0e68e",
      "timestamp": 1573744400610,
      "confirmationsCount": 15962,
      "inputs": [{
        "id": "f6fba095d6f6f4b9e673cf1ca5e3bc7cd133ccc94b75cce726afca4d1fb2cd8d",
        "address": "9gsLq5a12nJe33nKtjMe7NPY7o8CQAtjS9amDgALbebv1wmRXrv",
        "spendingProof": "4d4123d78040d4a0c01f4c2aadc56fc6ded5adb564df689c051ac758069b800be701dfac5e9bf29ec1cf77cfbf2b555abea1f0c602d3b885",
        "value": 89000000,
        "transactionId": "9b64728f9ec6bd0ee2636ed86d692c425183435f33eaeef5d15d5e625780ef9b",
        "outputTransactionId": "55efebec40417ccda975a71d9cb045bbe464419746bfcc612908ba0c32594ead"
      }],
      "outputs": [{
        "id": "67aaba92a9373978ba7c4b0adf67ec005923a2be86212f4fe0c802a4c5823f51",
        "value": 78000000,
        "creationHeight": 98125,
        "ergoTree": "0008cd0335717e8ea294d927f59ded0ca77e40bae13853438a8a67fc14e46d411caa4d02",
        "address": "9gsLq5a12nJe33nKtjMe7NPY7o8CQAtjS9amDgALbebv1wmRXrv",
        "assets": [],
        "additionalRegisters": {},
        "spentTransactionId": "ce728ca46307fdf51bfd481934033af42327095726e3951c20d630117bda0f7f",
        "mainChain": true
      }, {
        "id": "f593f764bcb8fa1dbff7d876a53f7753009ec582b5a3bb66e0206dc956610520",
        "value": 1000000,
        "creationHeight": 98125,
        "ergoTree": "1005040004000e36100204a00b08cd0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798ea02d192a39a8cc7a701730073011001020402d19683030193a38cc7b2a57300000193c2b2a57301007473027303830108cdeeac93b1a57304",
        "address": "2iHkR7CWvD1R4j1yZg5bkeDRQavjAaVPeTDFGGLZduHyfWMuYpmhHocX8GJoaieTx78FntzJbCBVL6rf96ocJoZdmWBL2fci7NqWgAirppPQmZ7fN9V6z13Ay6brPriBKYqLp1bT2Fk4FkFLCfdPpe",
        "assets": [],
        "additionalRegisters": {},
        "spentTransactionId": "629d4d34aa66491cb696c66f3b391ed4a1797d1cc28c65abf703521f99674e69",
        "mainChain": true
      }, {
        "id": "4a16c6f976cf2a3accfaf030a7af5fa74b24cfcc343c36f01468810b8a2e55a3",
        "value": 10000000,
        "creationHeight": 98125,
        "ergoTree": "0008cd03008b9b00dfb9f5b3a48a31f951bb8e74c3b0c7a724229a115eb323aabb6718ee",
        "address": "9gU3czAt9q4fQPRWBriBbpfLbRP7JrXRmB7kowtwdyw66PMRmaY",
        "assets": [],
        "additionalRegisters": {},
        "spentTransactionId": "39a8f093fa05c8b594fdb9c5f9c1932bb8b279ff8dce71a4759cf18572fe5033",
        "mainChain": true
      }]
    }, {
      "id": "55efebec40417ccda975a71d9cb045bbe464419746bfcc612908ba0c32594ead",
      "headerId": "5b365e5a22beb8da0323c9f2f2e8cb93c58e6189e6fb0e44907b1005c0d60ba8",
      "timestamp": 1573744218342,
      "confirmationsCount": 15964,
      "inputs": [{
        "id": "5aed3fdbd0b109c6af56186a6e1d72af833bead241b2507d6561f1862f46aebe",
        "address": "9gsLq5a12nJe33nKtjMe7NPY7o8CQAtjS9amDgALbebv1wmRXrv",
        "spendingProof": "90fe75059bd5840ad37685fef9645314d02023f5ffbdfeaedf89dd87f38b19a4dd26a77a7a6d4432ed9f5fa8c983378e5c5b6303954e11ef",
        "value": 100000000,
        "transactionId": "55efebec40417ccda975a71d9cb045bbe464419746bfcc612908ba0c32594ead",
        "outputTransactionId": "caa78ed736127627e821e53a3c3294ff9c1e0814cceba02ef49d8911ce47bb7f"
      }],
      "outputs": [{
        "id": "f6fba095d6f6f4b9e673cf1ca5e3bc7cd133ccc94b75cce726afca4d1fb2cd8d",
        "value": 89000000,
        "creationHeight": 98123,
        "ergoTree": "0008cd0335717e8ea294d927f59ded0ca77e40bae13853438a8a67fc14e46d411caa4d02",
        "address": "9gsLq5a12nJe33nKtjMe7NPY7o8CQAtjS9amDgALbebv1wmRXrv",
        "assets": [],
        "additionalRegisters": {},
        "spentTransactionId": "9b64728f9ec6bd0ee2636ed86d692c425183435f33eaeef5d15d5e625780ef9b",
        "mainChain": true
      }, {
        "id": "77de49db70eaa9d4ad3938f7ac103b394b063b0fc499e6b41a1a194487dd335d",
        "value": 1000000,
        "creationHeight": 98123,
        "ergoTree": "1005040004000e36100204a00b08cd0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798ea02d192a39a8cc7a701730073011001020402d19683030193a38cc7b2a57300000193c2b2a57301007473027303830108cdeeac93b1a57304",
        "address": "2iHkR7CWvD1R4j1yZg5bkeDRQavjAaVPeTDFGGLZduHyfWMuYpmhHocX8GJoaieTx78FntzJbCBVL6rf96ocJoZdmWBL2fci7NqWgAirppPQmZ7fN9V6z13Ay6brPriBKYqLp1bT2Fk4FkFLCfdPpe",
        "assets": [],
        "additionalRegisters": {},
        "spentTransactionId": "e1b54736f836f076eb59eb426a9a11740fe069983b04f5e28b4e97274ed95faa",
        "mainChain": true
      }, {
        "id": "933e8b31b3729eab7eaabc89752d1500a83cf38d2e6404ae07dba1662c04ef66",
        "value": 10000000,
        "creationHeight": 98123,
        "ergoTree": "0008cd03008b9b00dfb9f5b3a48a31f951bb8e74c3b0c7a724229a115eb323aabb6718ee",
        "address": "9gU3czAt9q4fQPRWBriBbpfLbRP7JrXRmB7kowtwdyw66PMRmaY",
        "assets": [],
        "additionalRegisters": {},
        "spentTransactionId": "39a8f093fa05c8b594fdb9c5f9c1932bb8b279ff8dce71a4759cf18572fe5033",
        "mainChain": true
      }]
    }], "total": 8
  }
);

test('mempool transactions', async () => {

  const mempoolTxs = await explorer.getUnconfirmed();
  expect(mempoolTxs.length).toBe(10);
  const lastTx = mempoolTxs[9];
  expect(lastTx.inputs.length).toBe(2);
  expect(lastTx.dataInputs.length).toBe(0);
  expect(lastTx.outputs.length).toBe(3);

});

test('mempool transactions by address', async () => {

  const address = Address.fromErgoTree("0008cd020741296f1bf88bab2270929be88f742bb0f6b267643588af85639e1a8c982a41");
  const mempoolTxs = await explorer.getUnconfirmed(address);
  expect(mempoolTxs.length).toBe(1);
  const lastTx = mempoolTxs[0];
  expect(lastTx.inputs.length).toBe(4);
  expect(lastTx.dataInputs.length).toBe(0);
  expect(lastTx.outputs.length).toBe(3);

});

test('transactions by address', async () => {

  const address = new Address("9gU3czAt9q4fQPRWBriBbpfLbRP7JrXRmB7kowtwdyw66PMRmaY");
  const txs = await explorer.getTransactions(address);
  expect(txs.length).toBe(8);

  // check that single transaction parsed correctly
  const tx = txs[1];
  expect(tx.id).toBe('274cc423c2465c086147d6971beecd9ebaa49b9e4d2ae0d95ddd482524427f81');
  expect(tx.headerId).toBe('53db5852ce47d1226b815067a3926a65405d57bf06d5178eb6516cf717d59e57');
  expect(tx.timestamp).toBe(1575555611949);
  expect(tx.confirmations).toBe(924);
  expect(tx.inputs.length).toBe(3);
  expect(tx.dataInputs.length).toBe(0);
  expect(tx.outputs.length).toBe(3);

  // check that input transaction parsed correctly
  const input = tx.inputs[0];
  expect(input.address).toBe(address.address);
  expect(input.outputTransactionId).toBe("2cb08ad7c765e060697a746b591a7c3ca8963f212dcc6af45990630a2f2b4a12");
  expect(input.value).toBe(123456);

  // check preservation rule
  txs.forEach(t => {
    const inValue = t.inputs.reduce((sum, { value }) => sum + value, 0);
    const outValue = t.outputs.reduce((sum, { value }) => sum + value, 0);
    expect(outValue).toBe(inValue);
  })


});




