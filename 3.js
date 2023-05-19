function sumOfNumbers(number1) {
  return function (number2) {
    return number1 + number2;
  };
}

const sum = sumOfNumbers(3)(4);
console.log(sum);

sumOfNumbers();
