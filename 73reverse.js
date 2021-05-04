let string = "dfgjkloypyl";
function groupbygroup(str) {
  let arrStr = str.split("");
  let newArr = [];
  for (let i = 0; i < arrStr.length; i += 3) {
    newArr.push(arrStr.slice(i, i + 3));
  }
  for (let index = 0; index < newArr.length; index++) {
    newArr[index].join("");
    newArr[index] = `${newArr[index][newArr[index].length - 1]}${newArr[
      index
    ].slice(1, 2)}${newArr[index][0]}`;
  }
  return newArr;
}
console.log(groupbygroup(string));
