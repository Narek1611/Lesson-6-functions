let phoneNumber = "0091161101";
let arrPhoneNumber = phoneNumber.split("");
//console.log(phoneNumber);
function numberCorrect(number) {
  for (let index = 0; index < number.length; index++) {
    if (number[index] === " ") {
      number.splice(index, 1);
    }
  }
  //console.log(number);
  if (number[0] === "+") {
    number.shift();
  }
  //console.log(number);
  for (let index = 0; index < number.length; index++) {
    let a = "bad number";
    if (isNaN(number[index]) || number.length !== 10) {
      return a;
    } else {
      return number.join("");
    }
  }
}
console.log(numberCorrect(arrPhoneNumber));
