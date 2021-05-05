function sumNumsInString(str = "") {
  let strToArr = str.split("");
  let temp = "";
  let sum = 0;
  for (let i = 0; i < strToArr.length; i++) {
    if (strToArr[i] === "-" || !isNaN(Number(strToArr[i]))) {
      temp += strToArr[i];
    } else {
      sum += Number(temp);
      temp = "";
    }
  }
  if (Number(temp)) {
    sum += Number(temp);
  }
  return sum;
}
console.log(sumNumsInString("FwrtY12KHL45"));
