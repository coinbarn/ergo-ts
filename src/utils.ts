declare const Buffer;
declare const Object;
declare const Set;

export class Utils {

  static sortBoxes(boxes) {
    const sortableKeys = Object.keys(boxes).sort((a, b) => boxes[b].value - boxes[a].value);
    return sortableKeys.map((k) => boxes[k]);
  }

  static getTenBoxesOrCurrent(currBoxes, allBoxes) {
    if (currBoxes.length > 10) {
      return currBoxes;
    }

    return currBoxes.concat(allBoxes.slice(currBoxes.length, 10));
  }

}
