let string = "asc5xw12  -25";
function findNum(str) {
  let arrStr = str.split();
  let numArr = [];
  for (let i = 0; i < arrStr.length; i++) {
    if (!isNaN(arrStr[i])) {
      numArr.push(arrStr[i]);
    } /*else{
        numArr.push(" , ")
    }*/
  }
  return numArr;
}
console.log(findNum(string));
