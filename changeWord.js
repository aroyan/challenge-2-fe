/**
 *
 * @param {string} selectedText
 * @param {string} changedText
 * @param {string} text
 * @returns string
 */
const changeWord = (selectedText, changedText, text) => {
  const selected = new RegExp(selectedText, "i");
  return text.replace(selected, changedText);
};

const kalimat1 = "Andini sangat mencintai kamu selamanya";
const kalimat2 =
  "Gunung Bromo tak akan mampu menggambarkan besarnya cintaku padamu";

console.log(changeWord("mencintai", "membenci", kalimat1));
console.log(changeWord("Bromo", "Semeru", kalimat2));
