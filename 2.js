function showPrimeNumber(number) {
  let info = "число простое";
  let counter = 0;
  if (number > 1000) {
    return console.log("данные не верны");
  } else if (number === 0) {
    info = "число 0";
  } else if (number === 1) {
    info = "число 1";
  }
  for (let i = 1; i < number; i++) {
    if (number % i === 0) {
      counter++;
      if (counter > 1) {
        info = "число не простое";
      }
    }
  }
  console.log(info);
}
showPrimeNumber(0);
