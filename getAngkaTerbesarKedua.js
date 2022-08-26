/**
 *
 * @param {array} arrayOfNumbers
 * @returns number
 */
export const getAngkaTerbesarKedua = (arrayOfNumbers) => {
  if (arrayOfNumbers <= 1) {
    return `Error: length of the array of numbers cannot be ${arrayOfNumbers.length}, minimum item to be compared is at least 2`;
  } else if (arrayOfNumbers === undefined) {
    return "Error: parameter cannot be empty";
  }

  const sorted = arrayOfNumbers.sort((a, b) => b - a);

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] !== sorted[i + 1]) {
      return sorted[i + 1];
    } else {
      return "Error: cannot get 2nd highest from the same numbers";
    }
  }
};

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  it("getAngkaTerbesarKedua", () => {
    expect(
      getAngkaTerbesarKedua([3, 4, 5, 2, 1, 2, 5, 9, 11, 22, 35, 99])
    ).toBe(35);
    expect(getAngkaTerbesarKedua([2, 2, 2, 2, 2, 2, 2, 2])).toBe(
      "Error: cannot get 2nd highest from the same numbers"
    );
    expect(getAngkaTerbesarKedua([9, 4, 7, 7, 4, 3, 2, 2, 8])).toBe(8);
    expect(getAngkaTerbesarKedua()).toBe("Error: parameter cannot be empty");
    expect(getAngkaTerbesarKedua(0)).toBe(
      "Error: length of the array of numbers cannot be undefined, minimum item to be compared is at least 2"
    );
  });
}
