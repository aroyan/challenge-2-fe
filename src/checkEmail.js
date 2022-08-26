/**
 *
 * @param {string} email
 * @returns string
 */
export const checkEmail = (email) => {
  const emailValidation = new RegExp(
    /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/,
    "gm"
  );

  if (email === undefined) {
    return `Error: invalid parameter cannot be ${typeof email}`;
  } else if (typeof email === "number") {
    return `Error: invalid parameter cannot be ${typeof email}`;
  } else if (!email.includes("@")) {
    return "Error: valid email should have @ symbol";
  } else {
    return emailValidation.test(email) ? "VALID" : "INVALID";
  }
};

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  it("checkEmail", () => {
    expect(checkEmail("bakti@binar.co.id")).toBe("VALID");
    expect(checkEmail("bakti@binar.com")).toBe("VALID");
    expect(checkEmail("bakti@binar")).toBe("INVALID");
    expect(checkEmail("bakti")).toBe("Error: valid email should have @ symbol");
    expect(checkEmail(123142124)).toBe(
      "Error: invalid parameter cannot be number"
    );
    expect(checkEmail(undefined)).toBe(
      "Error: invalid parameter cannot be undefined"
    );
  });
}
