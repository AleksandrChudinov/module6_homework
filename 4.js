function betweenTwoNumbers(number1, number2) {
  let value = number1;
  let timer = setInterval(function () {
    console.log(value);
    if (value === number2) {
      clearInterval(timer);
    }
    value++;
  }, 1000);
}
betweenTwoNumbers(5, 15);
