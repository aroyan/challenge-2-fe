/**
 *
 * @param {string} personName
 * @returns object
 */
const getSplitName = (personName) => {
  const result = {
    firstName: "",
    middleName: "",
    lastName: "",
  };

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

const listOfNames = [
  "Aldi Daniela Pranata",
  "Dwi Kuncoro",
  "Aurora",
  "Aurora Aureliya Sukma Darma",
  0,
];

listOfNames.forEach((name) => console.log(getSplitName(name)));
