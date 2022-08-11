const getAngkaTerbesarKedua = (arrayOfNumbers) => {
  if (arrayOfNumbers <= 1) {
    return `Error: length of the array of numbers cannot be ${arrayOfNumbers.length}, minimum item to be compared is at least 2`;
  } else if (arrayOfNumbers === undefined) {
    return "Error: parameter cannot be empty";
  }

  const sorted = arrayOfNumbers.sort((a, b) => b - a);

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] !== sorted[i + 1]) {
      return sorted[i + 1];
    } else {
      return "Error: cannot get 2nd highest from the same numbers";
    }
  }
};

console.log(getAngkaTerbesarKedua([3, 4, 5, 2, 1, 2, 5, 9, 11, 22, 35, 99]));
console.log(getAngkaTerbesarKedua([2, 2, 2, 2, 2, 2, 2, 2]));
console.log(getAngkaTerbesarKedua());
console.log(getAngkaTerbesarKedua(0));
