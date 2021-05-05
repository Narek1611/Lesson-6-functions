let number1 = 19;
let number2 = 42;

function evenDigitNumbers(num1, num2) {
  let strNum = [];
  let evenStrNum = [];
  for (let i = num1; i <= num2; i++) {
    i = i.toString();
    strNum.push(i);
  }
  let isEven = false;
  for (let j = 0; j < strNum.length; j++) {
    for (let k = 0; k < strNum[j].length; k++) {
      if (strNum[j][k] % 2 === 0) {
        isEven = true;
        continue;
      } else {
        isEven = false;
        break;
      }
    }
    if (isEven === true) {
      evenStrNum.push(strNum[j]);
    }
  }
  if (evenStrNum.length === 0) {
    evenStrNum.push("Such numbers does not exist.");
  }
  evenStrNum = evenStrNum.join(" , ");
  return evenStrNum;
}
console.log(evenDigitNumbers(199, 250));
