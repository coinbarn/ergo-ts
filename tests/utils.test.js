import { Utils } from '../src/utils';

describe('getTenBoxesOrCurrent utils func', () => {
  it('should return currentBoxes', () => {
    const currentBoxes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const allBoxes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    expect(Utils.getTenBoxesOrCurrent(currentBoxes, allBoxes))
      .toEqual(currentBoxes);
  });

  it('should return 10 boxes', () => {
    const currentBoxes = [1, 2, 3];
    const allBoxes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(Utils.getTenBoxesOrCurrent(currentBoxes, allBoxes))
      .toEqual([...allBoxes]);
  });
});
