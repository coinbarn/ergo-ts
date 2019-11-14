import { Serializer } from '../src/serializer';
import { Transaction } from '../src/models/transaction';


test('serialization test vector', () => {

  const mainnetTxJsonStr = '{"summary":{"id":"c102a458d159682d236c7f04526c45573166e1d2145b4a7af3add3052f819bfb","timestamp":1573561591025,"size":502,"confirmationsCount":1368,"block":{"id":"12aed7d62464b9bac8c12e13a5267f417c8c551cb1da365b5c9c340d58668dc3","height":96594}},"ioSummary":{"totalCoinsTransferred":93000000,"totalFee":0,"feePerByte":0},"inputs":[{"id":"774f026ac8dbc39dc65e6ef4730e8d4958de08822b187375a0425c7a8655bd0c","address":"9fMPy1XY3GW4T6t3LjYofqmzER6x9cV21n5UVJTWmma4Y9mAW6c","spendingProof":"132c2a08b71f74935d7b606ab60790bfdc4de575892e4582682911ff8b0065fd3d53abd66d3387912c38fd74c4d48d0454cb525a0d3669dd","value":10000000,"transactionId":"c102a458d159682d236c7f04526c45573166e1d2145b4a7af3add3052f819bfb","outputTransactionId":"00bb269430abd8c18fd3682f4cd71d38267f7c04ee509d6a80f0b4d6704b508f"},{"id":"830299bdedf6fa0d5d6f574e19007abbbefd00860d275eed85a84bb524cc1cf4","address":"9fMPy1XY3GW4T6t3LjYofqmzER6x9cV21n5UVJTWmma4Y9mAW6c","spendingProof":"6d0f20fa504d22e7e36e1b54ffceccea163eb5a3feaff0082b3630cdc6628c1463f314f7196a7f7584eb0d97e1d806fa80a69fd45ec3ac9d","value":83000000,"transactionId":"c102a458d159682d236c7f04526c45573166e1d2145b4a7af3add3052f819bfb","outputTransactionId":"00bb269430abd8c18fd3682f4cd71d38267f7c04ee509d6a80f0b4d6704b508f"}],"outputs":[{"id":"bab0bd07fd3df9694dc7e5299701210b76f742a2479bcfc0b9a828e17f2d6708","value":1000000,"creationHeight":96592,"ergoTree":"1005040004000e36100204a00b08cd0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798ea02d192a39a8cc7a701730073011001020402d19683030193a38cc7b2a57300000193c2b2a57301007473027303830108cdeeac93b1a57304","address":"2iHkR7CWvD1R4j1yZg5bkeDRQavjAaVPeTDFGGLZduHyfWMuYpmhHocX8GJoaieTx78FntzJbCBVL6rf96ocJoZdmWBL2fci7NqWgAirppPQmZ7fN9V6z13Ay6brPriBKYqLp1bT2Fk4FkFLCfdPpe","assets":[],"additionalRegisters":{},"spentTransactionId":"f7501a39a5f332e1af40a0902b5352cf73deaca7614506d974983bc354424efc","mainChain":true},{"id":"55014068a416ec69b989c42e51ecad88a21e6fba8975a6fd3995f5c712a5f85a","value":91000000,"creationHeight":96592,"ergoTree":"0008cd026dc059d64a50d0dbf07755c2c4a4e557e3df8afa7141868b3ab200643d437ee7","address":"9fMPy1XY3GW4T6t3LjYofqmzER6x9cV21n5UVJTWmma4Y9mAW6c","assets":[{"tokenId":"6ea991394565dfe30e604acb1bdac423dfda2d46009f75b37a375cacb6e907d2","amount":20000000000},{"tokenId":"fcc5a122f478918737b7b9dbc3e8fdd76cc9776b260f83168eaff0ad8e793b94","amount":1000000000000}],"additionalRegisters":{},"spentTransactionId":null,"mainChain":true},{"id":"bc2e78c16e19126d27f20c662afed6f354f1c2d5947d9994a0d668d5ee137bff","value":1000000,"creationHeight":96592,"ergoTree":"0008cd026dc059d64a50d0dbf07755c2c4a4e557e3df8afa7141868b3ab200643d437ee7","address":"9fMPy1XY3GW4T6t3LjYofqmzER6x9cV21n5UVJTWmma4Y9mAW6c","assets":[{"tokenId":"830299bdedf6fa0d5d6f574e19007abbbefd00860d275eed85a84bb524cc1cf4","amount":1000000000000}],"additionalRegisters":{},"spentTransactionId":null,"mainChain":true}]}';
  const mainnetTx = Transaction.formObject(JSON.parse(mainnetTxJsonStr));
  // todo test binary representation

  const testVectors = [
    {
      bytesToSign: '02c95c2ccf55e03cac6659f71ca4df832d28e2375569cec178dcb17f3e2e5f77420000ca796a4fc9c0d746a69702a77bd78b1a80a5ef5bf5713bbd95d93a4f23b27ead00000000028094ebdc030008cd0326df75ea615c18acc6bb4b517ac82795872f388d5d180aac90eaa84de750b942e8070000c0843d1005040004000e36100204cf0f08cd0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798ea02d192a39a8cc7a701730073011001020402d19683030193a38cc7b2a57300000193c2b2a57301007473027303830108cdeeac93b1a57304e8070000',
      bytesStr: '02c95c2ccf55e03cac6659f71ca4df832d28e2375569cec178dcb17f3e2e5f774238b4a04b4201da0578be3dac11067b567a73831f35b024a2e623c1f8da230407f63bab62c62ed9b93808b106b5a7e8b1751fa656f4c5de467400ca796a4fc9c0d746a69702a77bd78b1a80a5ef5bf5713bbd95d93a4f23b27ead385aea4d78a234c35accacdf8996b0af5b51e26fee29ea5c05468f23707d31c0df39400127391cd57a70eb856710db48bb9833606e0bf90340000000028094ebdc030008cd0326df75ea615c18acc6bb4b517ac82795872f388d5d180aac90eaa84de750b942e8070000c0843d1005040004000e36100204cf0f08cd0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798ea02d192a39a8cc7a701730073011001020402d19683030193a38cc7b2a57300000193c2b2a57301007473027303830108cdeeac93b1a57304e8070000',
      jsonStr: '{"id":"b59ca51f7470f291acc32e84870d00c4fda8b773f38f757f3d65d45265c13da5","inputs":[{"boxId":"c95c2ccf55e03cac6659f71ca4df832d28e2375569cec178dcb17f3e2e5f7742","spendingProof":{"proofBytes":"b4a04b4201da0578be3dac11067b567a73831f35b024a2e623c1f8da230407f63bab62c62ed9b93808b106b5a7e8b1751fa656f4c5de4674","extension":{}}},{"boxId":"ca796a4fc9c0d746a69702a77bd78b1a80a5ef5bf5713bbd95d93a4f23b27ead","spendingProof":{"proofBytes":"5aea4d78a234c35accacdf8996b0af5b51e26fee29ea5c05468f23707d31c0df39400127391cd57a70eb856710db48bb9833606e0bf90340","extension":{}}}],"dataInputs":[],"outputs":[{"boxId":"da288ce9e9a9d39f69634488a8d82c1bf4fb6ddce2f0930d2536016d8167eeb2","value":1000000000,"address":"9gkveVpgG1w23bNA7dghjbXEQ8Ak5cdAEBor41bwiM6atFkoV8R","ergoTree":"0008cd0326df75ea615c18acc6bb4b517ac82795872f388d5d180aac90eaa84de750b942","assets":[],"creationHeight":1000,"additionalRegisters":{},"transactionId":"b59ca51f7470f291acc32e84870d00c4fda8b773f38f757f3d65d45265c13da5","index":0},{"boxId":"be609af4436111d5592dbd52bc64f6a46a1c0605fd30cd61c74850b7f9875762","value":1000000,"address":"2iHkR7CWvD1R4j1yf7bdE3vEDowjo1xVxZpp2LAUkjcLrCPURrPnnuFgi8PmQ3C3TVDjrMXsss6htbrkzXm7rB8J4CVeCbmSpEAjFQaTtfxkyuFfHaVWfQShHjhbNTzziAXct8ozu4od6xbvAyv5wJ","ergoTree":"1005040004000e36100204cf0f08cd0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798ea02d192a39a8cc7a701730073011001020402d19683030193a38cc7b2a57300000193c2b2a57301007473027303830108cdeeac93b1a57304","assets":[],"creationHeight":1000,"additionalRegisters":{},"transactionId":"b59ca51f7470f291acc32e84870d00c4fda8b773f38f757f3d65d45265c13da5","index":1}],"size":341}',
    }
  ];

  testVectors.forEach((tv) => {
    const tx = Transaction.formObject(JSON.parse(tv.jsonStr));
    const bytes = Serializer.transactionToBytes(tx);

    expect(bytes.toString('hex'))
      .toBe(tv.bytesStr);
  });
});

test('intToVlq test vectors', () => {

  const pairs = [
    [1, '01'],
    [127, '7f'],
    [14882, 'a274'],
    [41256202580718336, '80e6eb9cc3c9a449'],
  ];

  pairs.forEach((pair) => {
    expect(Serializer.intToVlq(pair[0])
      .toString('hex'))
      .toBe(pair[1]);
  });


});
