/**
 *
 * @param {number} givenNumber
 * @returns string
 */
export const checkTypeNumber = (givenNumber) => {
  if (givenNumber === undefined) {
    return "Error: Bro where is the parameter?";
  } else if (typeof givenNumber !== "number") {
    return "Error: Invalid data type";
  } else {
    return givenNumber % 2 === 0 ? "GENAP" : "GANJIL";
  }
};

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  it("checkTypeNumber", () => {
    expect(checkTypeNumber(2)).toBe("GENAP");
    expect(checkTypeNumber(1)).toBe("GANJIL");
    expect(checkTypeNumber("3")).toBe("Error: Invalid data type");
    expect(checkTypeNumber({})).toBe("Error: Invalid data type");
    expect(checkTypeNumber([])).toBe("Error: Invalid data type");
    expect(checkTypeNumber()).toBe("Error: Bro where is the parameter?");
  });
}
