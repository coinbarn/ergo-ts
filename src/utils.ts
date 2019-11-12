declare const Buffer;
declare const Object;
declare const Set;
import blake from 'blakejs';
import bs58 from 'bs58';
import is from 'is_js';

export const checkAddressValidity = (address) => {
  try {
    const bytes = bs58.decode(address);
    const size = bytes.length;
    const script = bytes.slice(0, size - 4);
    const checksum = bytes.slice(size - 4, size);
    const calculatedChecksum = Buffer.from(blake.blake2b(script, null, 32), 'hex')
      .slice(0, 4);
    return calculatedChecksum.toString('hex') === checksum.toString('hex');
  } catch (e) {
    return false;
  }
};

export const pkFromAddress = (ergoAdress) => {
  if (
    is.not.string(ergoAdress)
  ) {
    throw new TypeError(`Bad params: ${ergoAdress}`);
  }

  const addrBytes = bs58.decode(ergoAdress);
  return addrBytes.slice(1, 34);
};

export const intToVlq = (num) => {
  let x = num;
  let res = Buffer.from([]);
  let r;
  while (parseInt(String(x / (2 ** 7)), 10)) {
    r = x & 0x7F;
    x = parseInt(String(x / (2 ** 7)), 10);
    res = Buffer.concat([res, Buffer.from([(r | 0x80)], null, 1)]);
  }
  r = (x & 0x7F);
  res = Buffer.concat([res, Buffer.from([r], null, 1)]);
  return res;
};

export const outputBytes = (out, tokenIds) => {
  let res = intToVlq(out.value);
  res = Buffer.concat([res, Buffer.from(out.ergoTree, 'hex')]);
  res = Buffer.concat([res, intToVlq(out.creationHeight)]);

  res = Buffer.concat([res, intToVlq(out.assets.length)]);
  for (let i = 0; i < out.assets.length; i += 1) {
    const t = out.assets[i].tokenId;
    const n = tokenIds.indexOf(t);
    res = Buffer.concat([res, intToVlq(n)]);
    res = Buffer.concat([res, intToVlq(out.assets[i].amount)]);
  }
  const k = out.additionalRegisters.length;
  res = Buffer.concat([res, intToVlq(k)]);
  return res;
};

export const valueSerialize = (a) => '';

export const inputBytes = (i) => {
  let res = Buffer.from(i.boxId, 'hex');
  const sp = i.spendingProof;
  res = Buffer.concat([res, intToVlq(sp.proofBytes.length)]);
  res = Buffer.concat([res, Buffer.from(sp.proofBytes, 'hex')]);
  res = Buffer.concat([res, intToVlq(sp.extension.length)]);

  Object.keys(sp.extension).forEach((k) => {
    res += intToVlq(k);
    res += valueSerialize(sp.extension[k]);
  });

  return res;
};

export const distinctTokenList = (outputs) => {
  const tokenList = outputs.map((x) => x.assets.map((a) => a.tokenId));
  const flatTokenList = tokenList.flat();
  const seenTokens = new Set();
  const res = [];
  for (let i = 0; i < flatTokenList.length; i += 1) {
    const currId = flatTokenList[i];
    if (!(currId in seenTokens)) {
      res.push(currId);
      seenTokens.add(currId);
    }
  }
  return res;
};

export const sortBoxes = (boxes) => {
  const sortableKeys = Object.keys(boxes).sort((a, b) => boxes[b].value - boxes[a].value);
  return sortableKeys.map((k) => boxes[k]);
};

export const getTenBoxesOrCurrent = (currBoxes, allBoxes) => {
  if (currBoxes.length > 10) {
    return currBoxes;
  }

  return currBoxes.concat(allBoxes.slice(currBoxes.length, 10));
};

export const serializeTx = (tx) => {
  let res = intToVlq(tx.inputs.length);

  Object.values(tx.inputs).forEach((v) => {
    res = Buffer.concat([res, inputBytes(v)]);
  });
  res = Buffer.concat([res, intToVlq(tx.dataInputs.length)]);

  tx.dataInputs.forEach((i) => {
    res = Buffer.concat([res, Buffer.from(i.boxId, 'hex')]);
  });

  const distinctIds = distinctTokenList(tx.outputs);

  res = Buffer.concat([res, intToVlq(distinctIds.length)]);

  Object.values(distinctIds).forEach((v) => {
    res = Buffer.concat([res, Buffer.from(v, 'hex')]);
  });

  res = Buffer.concat([res, intToVlq(tx.outputs.length)]);
  Object.values(tx.outputs).forEach((v) => {
    res = Buffer.concat([res, outputBytes(v, distinctIds)]);
  });

  return res;
};

/**
 *
 * @param {String} address
 * @returns {String}
 */
export const ergoTreeFromAddress = (address) => {
  if (!checkAddressValidity(address)) {
    throw new TypeError(`Bad params:${address}`);
  }
  return Buffer.concat([Buffer.from([0x00, 0x08, 0xcd]), pkFromAddress(address)])
    .toString('hex');
};
