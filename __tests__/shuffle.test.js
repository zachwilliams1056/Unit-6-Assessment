const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  test("return an array", () => {
    const inputArray = [1, 2, 3, 4, 5];
    const result = shuffle(inputArray);
    expect(array.isArray(result)).toBe(true);
  });

  test("return an array with the same length as input array", () => {
    const inputArray = [1, 2, 3, 4, 5];
    const result = shuffle(inputArray);
    expect(result.length).toBe(inputArray.length);
  });
})