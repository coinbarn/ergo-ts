import {Address} from "./address";

export class Output {

  id: string;
  value: number;
  creationHeight: number;
  address: Address;
  ergoTree: string;
  assets = [];
  additionalRegisters = {R4: '05a0a5e005'};

  constructor(id: string, value: number, creationHeight: number, address: Address, assets, additionalRegisters) {
    this.id = id;
    this.value = value;
    this.creationHeight = creationHeight;
    this.address = address;
    this.ergoTree = address.ergoTree;
    this.assets = assets;
    this.additionalRegisters = additionalRegisters;
  }

  static formObject(obj): Output {
    return new Output(obj.id, obj.value, obj.creationHeight, new Address(obj.address), obj.assets, obj.additionalRegisters)
  }

}
