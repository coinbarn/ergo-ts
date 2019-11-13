declare const Buffer;
import * as blake from 'blakejs';
import * as ec from 'elliptic';
import * as BN from 'bn.js';
import * as secureRandom from "secure-random";

const {curve} = ec.ec('secp256k1');

const numHash = (s) => {
  const KEY = null;
  const OUTPUT_LENGTH = 32;
  const context = blake.blake2bInit(OUTPUT_LENGTH, KEY);
  blake.blake2bUpdate(context, Buffer.from(s));
  const h = blake.blake2bFinal(context);
  return new BN(h.slice(0, 24));
};

const genCommitment = (pk, w) => {
  const prefix = Buffer.from('010027100108cd', 'hex');
  const postfix = Buffer.from('73000021', 'hex');
  return Buffer.concat([prefix, pk, postfix, w]);
};

const tryToSign = (msgBytes, sk) => {
  const randBytes = secureRandom(32);
  const y = new BN(randBytes).umod(curve.n);

  // crucial: y has to remain secret and be removed ASAP
  // it also should come from a good entropy source
  if (y.isZero()) {
    return null;
  }

  const w = Buffer.from(curve.g.mul(y).encodeCompressed());
  const pk = Buffer.from(curve.g.mul(sk).encodeCompressed());
  const commitment = genCommitment(pk, w);
  const s = Buffer.concat([commitment, msgBytes]);
  const c = numHash(s);
  if (c.isZero()) {
    return null;
  }
  const z = sk.mul(c).add(y).umod(curve.n);
  const cb = Buffer.from(c.toArray('big', 24));
  const zb = Buffer.from(z.toArray('big', 32));

  return Buffer.concat([cb, zb]);
};

export const sign = (msgBytes, sk) => {
  let sig = tryToSign(msgBytes, sk);

  while (!sig) {
    sig = tryToSign(msgBytes, sk);
  }
  return sig;
};

export const verify = (msgBytes, sigBytes, pkBytes) => {
  if (sigBytes.length !== 56) {
    throw new Error();
  }
  const c = new BN(sigBytes.slice(0, 24));
  const z = new BN(sigBytes.slice(24, 56));
  const pk = curve.decodePoint(pkBytes);
  const t = pk.mul(curve.n.sub(c));
  const w = curve.g.mul(z).add(t);
  const wb = Buffer.from(w.encodeCompressed());
  const commitment = genCommitment(Buffer.from(pkBytes), wb);

  const s = Buffer.concat([commitment, msgBytes]);
  const c2 = numHash(s);

  return c2.eq(c);
};
