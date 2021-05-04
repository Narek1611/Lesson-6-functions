// // let str = "axb";
// // let newStr = str.substr(1, 1);
// // console.log(newStr);
// let str = ["d", "f", "g"];
// console.log(str.join(""));
let string = "A revolution without dancing is a revolution not worth having.";
let arrStr = string.split(" ");
console.log(arrStr);
let wordlength = [];
for (let i = 0; i < arrStr.length; i++) {
  wordlength.push(arrStr[i].length);
}
console.log(wordlength);
