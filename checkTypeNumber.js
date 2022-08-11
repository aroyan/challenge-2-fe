const checkTypeNumber = (givenNumber) => {
  if (givenNumber === undefined) {
    return "Error: Bro where is the parameter?";
  } else if (typeof givenNumber !== "number") {
    return "Error: Invalid data type";
  } else {
    return givenNumber % 2 === 0 ? "GENAP" : "GANJIL";
  }
};

console.log(checkTypeNumber(2));
console.log(checkTypeNumber(1));
console.log(checkTypeNumber("3"));
console.log(checkTypeNumber({}));
console.log(checkTypeNumber([]));
console.log(checkTypeNumber());
