/**
 *
 * @param {string} selectedText
 * @param {string} changedText
 * @param {string} text
 * @returns string
 */
export const changeWord = (selectedText, changedText, text) => {
  const selected = new RegExp(selectedText, "i");
  return text.replace(selected, changedText);
};

export const kalimat1 = "Andini sangat mencintai kamu selamanya";
export const kalimat2 =
  "Gunung Bromo tak akan mampu menggambarkan besarnya cintaku padamu";

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  it("changeWord", () => {
    expect(changeWord("mencintai", "membenci", kalimat1)).toBe(
      "Andini sangat membenci kamu selamanya"
    );
    expect(changeWord("Bromo", "Semeru", kalimat2)).toBe(
      "Gunung Semeru tak akan mampu menggambarkan besarnya cintaku padamu"
    );
  });
}
