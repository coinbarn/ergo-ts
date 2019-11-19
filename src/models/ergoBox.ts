import { feeValue } from '../constants';
import { Serializer } from '../serializer';
import { Address } from './address';
import { Input } from './input';
import { SpendingProof } from './spending-proof';

declare const Buffer;

export class ErgoBox {

  public static formObject(obj): ErgoBox {
    const id = obj.id || obj.boxId;
    return new ErgoBox(
      id,
      obj.value,
      obj.creationHeight,
      new Address(obj.address),
      obj.assets,
      obj.additionalRegisters,
    );
  }

  public static extractAssets(boxes: ErgoBox[]) {
    const assetDict = {};
    for (const box of boxes) {
      for (const asset of box.assets) {
        const currAsset = asset;

        if (currAsset.tokenId in assetDict) {
          assetDict[currAsset.tokenId] += currAsset.amount;
        } else {
          assetDict[currAsset.tokenId] = currAsset.amount;
        }
      }
    }

    return Object.entries(assetDict).map(x => ({ tokenId: x[0], amount: Number(x[1]) }));
  }

  public static encodeRegisters(obj) {
    const encoded = {};
    for (let i = 4; i <= 10; i += 1) {
      const reg = obj['R' + i];
      if (reg !== undefined) {
        const byteArray = Serializer.stringToHex(reg);
        const b1 = Buffer.from([0x0e]);
        const b2 = Buffer.from(Serializer.intToVlq(byteArray.length / 2)).toString('hex');
        encoded['R' + i] = b1.toString('hex') + b2 + byteArray;
      }
    }
    return encoded;
  }

  public static getSolvingBoxes(myBoxes: ErgoBox[], meaningfulOutputs: ErgoBox[], min = 15): ErgoBox[] {
    const ERGValue = meaningfulOutputs.reduce((sum, { value }) => sum + value, 0) + feeValue;
    const assets = this.extractAssets(meaningfulOutputs);

    const remains = { ERG: ERGValue };
    assets.forEach(a => {
      remains[a.tokenId] = (remains[a.tokenId] || 0) + a.amount;
    });

    const boxesToSpend = [];
    const sortedBoxes = this.sort(myBoxes);
    for (const box of sortedBoxes) {
      boxesToSpend.push(box);
      if (remains.ERG > 0) {
        remains.ERG -= box.value;
      }
      box.assets.forEach(a => {
        if (remains[a.tokenId] > 0) {
          remains[a.tokenId] -= box.value;
        }
      });
      const positiveRemainingToken = Object.values(remains).find(o => o > 0);

      if (positiveRemainingToken === undefined) {
        if (boxesToSpend.length > min) {
          return boxesToSpend;
        } else {
          return boxesToSpend.concat(sortedBoxes.slice(boxesToSpend.length, min));
        }
      }
    }
    return null;
  }

  public static sort(boxes) {
    const sortableKeys = Object.keys(boxes).sort((a, b) => boxes[b].value - boxes[a].value);
    return sortableKeys.map(k => boxes[k]);
  }
  public id: string;
  public value: number;
  public creationHeight: number;
  public address: Address;
  public ergoTree: string;
  public assets = [];
  public additionalRegisters = {};

  constructor(
    id: string,
    value: number,
    creationHeight: number,
    address: Address,
    assets = [],
    additionalRegisters = {},
  ) {
    this.id = id;
    this.value = value;
    this.creationHeight = creationHeight;
    this.address = address;
    this.ergoTree = address.ergoTree;
    this.assets = assets;
    this.additionalRegisters = additionalRegisters;
  }

  public toInput(): Input {
    return new Input(this.id, SpendingProof.empty);
  }
}
