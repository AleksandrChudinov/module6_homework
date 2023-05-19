const exampleArr = [
  500,
  "500",
  null,
  0,
  12,
  13,
  0,
  14,
  15,
  "stroke",
  "undefined",
];

function getEvenOrOddNumber(arr) {
  let evenNumber = 0;
  let oddNumber = 0;
  let nullNumber = 0;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "number" && !isNaN(arr[i])) {
      if (arr[i] == 0) {
        nullNumber++;
      } else if (arr[i] % 2 === 0) {
        evenNumber++;
      } else if (arr[i] % 2 !== 0) {
        oddNumber++;
      }
    }
  }

  console.log(
    `количество четных значений элементов - ${evenNumber}, нечетных - ${oddNumber}, равных нулю - ${nullNumber}`
  );
}

getEvenOrOddNumber(exampleArr);
