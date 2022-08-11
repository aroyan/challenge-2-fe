const isValidPassword = (password) => {
  const passwordValidation = new RegExp(
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
    "gm"
  );
  return passwordValidation.test(password);
};

// Min length 8
// Uppercase letter min 1
// Lowercase letter min 1
// Number atleast 1

const listOfPassword = [
  "Meong2021",
  "meong2021",
  "@eong",
  "Meong2",
  0,
  "0asdasdas**&y12//Ad",
  undefined,
];

listOfPassword.forEach((pass) => console.log(isValidPassword(pass)));
