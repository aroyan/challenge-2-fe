const checkEmail = (email) => {
  const emailValidation = new RegExp(
    /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/,
    "gm"
  );
  if (email === undefined) {
    return `Error: parameter cannot be ${typeof email}`;
  } else if (typeof email === "number") {
    return `Error: invalid argument cannot be ${typeof email}`;
  } else {
    return emailValidation.test(email) ? "VALID" : "INVALID";
  }
};

const listOfEmails = [
  "bakti@binar.co.id",
  "bakti@binar.com",
  "bakti@binar",
  "bakti",
  123142124,
  undefined,
];

listOfEmails.forEach((email) => console.log(checkEmail(email)));
