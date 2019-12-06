import {Client} from "../src/client";
import MockAdapter from "axios-mock-adapter";
import {Explorer} from "../src";

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

test('mempool transactions', async () => {

  // uncomment to make real requests
  // const client = new Client();
  const mempoolTxs = await explorer.getMempool();
  expect(mempoolTxs.length).toBe(10);
  const lastTx = mempoolTxs[9];
  expect(lastTx.inputs.length).toBe(2);
  expect(lastTx.dataInputs.length).toBe(0);
  expect(lastTx.outputs.length).toBe(3);

});


