import { Serializer } from '../src/serializer';
import { Transaction } from '../src/models/transaction';


test('serialization test vector', () => {

  const jsonStr = '{"summary":{"id":"c102a458d159682d236c7f04526c45573166e1d2145b4a7af3add3052f819bfb","timestamp":1573561591025,"size":502,"confirmationsCount":930,"block":{"id":"12aed7d62464b9bac8c12e13a5267f417c8c551cb1da365b5c9c340d58668dc3","height":96594}},"ioSummary":{"totalCoinsTransferred":93000000,"totalFee":0,"feePerByte":0},"inputs":[{"id":"774f026ac8dbc39dc65e6ef4730e8d4958de08822b187375a0425c7a8655bd0c","address":"9fMPy1XY3GW4T6t3LjYofqmzER6x9cV21n5UVJTWmma4Y9mAW6c","spendingProof":"132c2a08b71f74935d7b606ab60790bfdc4de575892e4582682911ff8b0065fd3d53abd66d3387912c38fd74c4d48d0454cb525a0d3669dd","value":10000000,"transactionId":"c102a458d159682d236c7f04526c45573166e1d2145b4a7af3add3052f819bfb","outputTransactionId":"00bb269430abd8c18fd3682f4cd71d38267f7c04ee509d6a80f0b4d6704b508f"},{"id":"830299bdedf6fa0d5d6f574e19007abbbefd00860d275eed85a84bb524cc1cf4","address":"9fMPy1XY3GW4T6t3LjYofqmzER6x9cV21n5UVJTWmma4Y9mAW6c","spendingProof":"6d0f20fa504d22e7e36e1b54ffceccea163eb5a3feaff0082b3630cdc6628c1463f314f7196a7f7584eb0d97e1d806fa80a69fd45ec3ac9d","value":83000000,"transactionId":"c102a458d159682d236c7f04526c45573166e1d2145b4a7af3add3052f819bfb","outputTransactionId":"00bb269430abd8c18fd3682f4cd71d38267f7c04ee509d6a80f0b4d6704b508f"}],"outputs":[{"id":"bab0bd07fd3df9694dc7e5299701210b76f742a2479bcfc0b9a828e17f2d6708","value":1000000,"creationHeight":96592,"ergoTree":"1005040004000e36100204a00b08cd0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798ea02d192a39a8cc7a701730073011001020402d19683030193a38cc7b2a57300000193c2b2a57301007473027303830108cdeeac93b1a57304","address":"2iHkR7CWvD1R4j1yZg5bkeDRQavjAaVPeTDFGGLZduHyfWMuYpmhHocX8GJoaieTx78FntzJbCBVL6rf96ocJoZdmWBL2fci7NqWgAirppPQmZ7fN9V6z13Ay6brPriBKYqLp1bT2Fk4FkFLCfdPpe","assets":[],"additionalRegisters":{},"spentTransactionId":"f7501a39a5f332e1af40a0902b5352cf73deaca7614506d974983bc354424efc","mainChain":true},{"id":"55014068a416ec69b989c42e51ecad88a21e6fba8975a6fd3995f5c712a5f85a","value":91000000,"creationHeight":96592,"ergoTree":"0008cd026dc059d64a50d0dbf07755c2c4a4e557e3df8afa7141868b3ab200643d437ee7","address":"9fMPy1XY3GW4T6t3LjYofqmzER6x9cV21n5UVJTWmma4Y9mAW6c","assets":[{"tokenId":"fcc5a122f478918737b7b9dbc3e8fdd76cc9776b260f83168eaff0ad8e793b94","amount":1000000000000},{"tokenId":"6ea991394565dfe30e604acb1bdac423dfda2d46009f75b37a375cacb6e907d2","amount":20000000000}],"additionalRegisters":{},"spentTransactionId":null,"mainChain":true},{"id":"bc2e78c16e19126d27f20c662afed6f354f1c2d5947d9994a0d668d5ee137bff","value":1000000,"creationHeight":96592,"ergoTree":"0008cd026dc059d64a50d0dbf07755c2c4a4e557e3df8afa7141868b3ab200643d437ee7","address":"9fMPy1XY3GW4T6t3LjYofqmzER6x9cV21n5UVJTWmma4Y9mAW6c","assets":[{"tokenId":"830299bdedf6fa0d5d6f574e19007abbbefd00860d275eed85a84bb524cc1cf4","amount":1000000000000}],"additionalRegisters":{},"spentTransactionId":null,"mainChain":true}]}';
  const tx = Transaction.formObject(JSON.parse(jsonStr));

  // console.log(tx);

  const bytes = Serializer.transactionToBytes(tx);
  console.log(bytes.length)
  // expect(bytes.toString('hex')).toBe(bytesStr);
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
