import {Address} from "./address";
import {Input} from "./input";
import {SpendingProof} from "./spending-proof";

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

    return Object.entries(assetDict).map((x) => ({ tokenId: x[0], amount: x[1] }));
  };


  public toInput(): Input {
    return new Input(this.id, SpendingProof.empty);
  }

}
