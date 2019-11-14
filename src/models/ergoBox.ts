import {Address} from "./address";
import {Input} from "./input";
import {SpendingProof} from "./spending-proof";
import {feeValue} from "../constants";

export class ErgoBox {

  id: string;
  value: number;
  creationHeight: number;
  address: Address;
  ergoTree: string;
  assets = [];
  additionalRegisters = {};

  constructor(id: string, value: number, creationHeight: number, address: Address, assets = [], additionalRegisters = {}) {
    this.id = id;
    this.value = value;
    this.creationHeight = creationHeight;
    this.address = address;
    this.ergoTree = address.ergoTree;
    this.assets = assets;
    this.additionalRegisters = additionalRegisters;
  }

  static formObject(obj): ErgoBox {
    const id = obj.id || obj.boxId;
    return new ErgoBox(id, obj.value, obj.creationHeight, new Address(obj.address), obj.assets, obj.additionalRegisters)
  }

  static extractAssets(boxes: ErgoBox[]) {
    const assetDict = {};
    for (let i = 0; i < boxes.length; i += 1) {
      for (let j = 0; j < boxes[i].assets.length; j += 1) {
        const currAsset = boxes[i].assets[j];

        if (currAsset.tokenId in assetDict) {
          assetDict[currAsset.tokenId] += currAsset.amount;
        } else {
          assetDict[currAsset.tokenId] = currAsset.amount;
        }
      }
    }

    return Object.entries(assetDict).map((x) => ({tokenId: x[0], amount: x[1]}));
  }


  public toInput(): Input {
    return new Input(this.id, SpendingProof.empty);
  }

  static getSolvingBoxes(myBoxes: ErgoBox[], meaningfulOutputs: ErgoBox[], min = 15): ErgoBox[] {
    const value = meaningfulOutputs.reduce((sum, {value}) => sum + value, 0) + feeValue;
    const assets = this.extractAssets(meaningfulOutputs);

    const remains = {ERG: value};
    assets.forEach((a) => {
      remains[a.tokenId] = (remains[a.tokenId] || 0) + a.amount;
    });

    const boxesToSpend = [];
    const sortedBoxes = this.sort(myBoxes);
    for (const box of sortedBoxes) {
      boxesToSpend.push(box);
      if (remains.ERG > 0) {
        remains.ERG -= box.value;
      }
      box.assets.forEach((a) => {
        if (remains[a.tokenId] > 0) {
          remains[a.tokenId] -= box.value;
        }
      });
      const positiveRemainingToken = Object.values(remains).find((o) => o > 0);

      if (positiveRemainingToken === undefined) {
        if (boxesToSpend.length > min) {
          return boxesToSpend
        } else {
          return boxesToSpend.concat(sortedBoxes.slice(boxesToSpend.length, min));
        }
      }
    }
    return null;
  }

  static sort(boxes) {
    const sortableKeys = Object.keys(boxes).sort((a, b) => boxes[b].value - boxes[a].value);
    return sortableKeys.map((k) => boxes[k]);
  }

}
