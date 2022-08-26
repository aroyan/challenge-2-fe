/**
 *
 * @param {string} password
 * @returns boolean
 */
export const isValidPassword = (password) => {
  const passwordValidation = new RegExp(
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
    "gm"
  );
  if (typeof password !== "string") {
    return "Error: password should be a string";
  } else return passwordValidation.test(password);
};

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  it("isValidPassword", () => {
    expect(isValidPassword("Meong2021")).toBe(true);
    expect(isValidPassword("meong2021")).toBe(false);
    expect(isValidPassword("@eong")).toBe(false);
    expect(isValidPassword("Meong2")).toBe(false);
    expect(isValidPassword(0)).toBe("Error: password should be a string");
    expect(isValidPassword("0asdasdas**&y12//Ad")).toBe(true);
    expect(isValidPassword(undefined)).toBe(
      "Error: password should be a string"
    );
  });
}
