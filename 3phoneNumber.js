let phoneNumber = "00911 61101";
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
    }
    //   }
    //   if (number.length !== 10) {
    //     console.log("bad number");
    //   }
    // if (a === "bad number") {
    //   return a;
    else {
      return number;
    }
  }
}
console.log(numberCorrect(arrPhoneNumber));
