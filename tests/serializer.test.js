import { Serializer } from '../src/serializer';


test('serialization test vector', () => {

  const bytesStr = '02c95c2ccf55e03cac6659f71ca4df832d28e2375569cec178dcb17f3e2e5f774238b4a04b4201da0578be3dac11067b567a73831f35b024a2e623c1f8da230407f63bab62c62ed9b93808b106b5a7e8b1751fa656f4c5de467400ca796a4fc9c0d746a69702a77bd78b1a80a5ef5bf5713bbd95d93a4f23b27ead385aea4d78a234c35accacdf8996b0af5b51e26fee29ea5c05468f23707d31c0df39400127391cd57a70eb856710db48bb9833606e0bf90340000000028094ebdc030008cd0326df75ea615c18acc6bb4b517ac82795872f388d5d180aac90eaa84de750b942e8070000c0843d1005040004000e36100204cf0f08cd0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798ea02d192a39a8cc7a701730073011001020402d19683030193a38cc7b2a57300000193c2b2a57301007473027303830108cdeeac93b1a57304e8070000';
  const jsonStr = '{"id":"b59ca51f7470f291acc32e84870d00c4fda8b773f38f757f3d65d45265c13da5","inputs":[{"boxId":"c95c2ccf55e03cac6659f71ca4df832d28e2375569cec178dcb17f3e2e5f7742","spendingProof":{"proofBytes":"b4a04b4201da0578be3dac11067b567a73831f35b024a2e623c1f8da230407f63bab62c62ed9b93808b106b5a7e8b1751fa656f4c5de4674","extension":{}}},{"boxId":"ca796a4fc9c0d746a69702a77bd78b1a80a5ef5bf5713bbd95d93a4f23b27ead","spendingProof":{"proofBytes":"5aea4d78a234c35accacdf8996b0af5b51e26fee29ea5c05468f23707d31c0df39400127391cd57a70eb856710db48bb9833606e0bf90340","extension":{}}}],"dataInputs":[],"outputs":[{"boxId":"da288ce9e9a9d39f69634488a8d82c1bf4fb6ddce2f0930d2536016d8167eeb2","value":1000000000,"ergoTree":"0008cd0326df75ea615c18acc6bb4b517ac82795872f388d5d180aac90eaa84de750b942","assets":[],"creationHeight":1000,"additionalRegisters":{},"transactionId":"b59ca51f7470f291acc32e84870d00c4fda8b773f38f757f3d65d45265c13da5","index":0},{"boxId":"be609af4436111d5592dbd52bc64f6a46a1c0605fd30cd61c74850b7f9875762","value":1000000,"ergoTree":"1005040004000e36100204cf0f08cd0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798ea02d192a39a8cc7a701730073011001020402d19683030193a38cc7b2a57300000193c2b2a57301007473027303830108cdeeac93b1a57304","assets":[],"creationHeight":1000,"additionalRegisters":{},"transactionId":"b59ca51f7470f291acc32e84870d00c4fda8b773f38f757f3d65d45265c13da5","index":1}],"size":341}';

  // Serializer.transactionToBytes(jsonStr)
  // todo real check
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
