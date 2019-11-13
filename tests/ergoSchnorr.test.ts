import {sign, verify} from "../src/ergoSchnorr";
import * as  BN from 'bn.js';

declare const Buffer;


test('simple signature test vector', () => {
  const msgBytes = Buffer.from('1dc01772ee0171f5f614c673e3c7fa1107a8cf727bdf5a6dadb379e93c0d1d00', 'hex');
  const pkBytes = Buffer.from('0326df75ea615c18acc6bb4b517ac82795872f388d5d180aac90eaa84de750b942', 'hex');
  const sk = Buffer.from('f4aa4c487af71fb8b52a3ecd0d398393c2d247d6f0a25275e5d986854b3e2db8', 'hex');
  const signBytes = sign(msgBytes, new BN(sk));

  expect(verify(msgBytes, signBytes, pkBytes)).toBe(true);
});
