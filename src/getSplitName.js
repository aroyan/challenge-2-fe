/**
 *
 * @param {string} personName
 * @returns object
 */
export const getSplitName = (personName) => {
  if (typeof personName !== "string") {
    return `Error: parameter type cannot be ${typeof personName}`;
  }

  const splittedName = personName.split(" ");

  if (splittedName.length > 3) {
    return "Error: This function is only for 3 characters name";
  } else if (splittedName.length === 1) {
    return {
      firstName: splittedName[0],
      middleName: null,
      lastName: null,
    };
  } else if (splittedName.length === 2) {
    return {
      firstName: splittedName[0],
      middleName: null,
      lastName: splittedName[1],
    };
  } else {
    return {
      firstName: splittedName[0],
      middleName: splittedName[1],
      lastName: splittedName[2],
    };
  }
};

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  it("getSplitName", () => {
    expect(getSplitName("Aldi Daniela Pranata")).toStrictEqual({
      firstName: "Aldi",
      middleName: "Daniela",
      lastName: "Pranata",
    });
    expect(getSplitName("Dwi Kuncoro")).toStrictEqual({
      firstName: "Dwi",
      middleName: null,
      lastName: "Kuncoro",
    });
    expect(getSplitName("Aurora")).toStrictEqual({
      firstName: "Aurora",
      middleName: null,
      lastName: null,
    });
    expect(getSplitName("Aurora Aureliya Sukma Darma")).toBe(
      "Error: This function is only for 3 characters name"
    );
    expect(getSplitName(0)).toBe("Error: parameter type cannot be number");
  });
}
