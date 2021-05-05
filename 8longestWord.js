let string = "A revolution without dancing is a revolution not worth having.";
function findLongestWord(str) {
  let arrStr = string.split(" ");
  console.log(arrStr);
  //let wordLength = [];
  let wordLength = arrStr[0].length;
  //console.log(wordLength);
  let longestWord = "";
  for (let i = 1; i < arrStr.length; i++) {
    // wordLength.push(arrStr[i].length);
    if (arrStr[i].length >= wordLength) {
      wordLength = arrStr[i].length;
    }
    //console.log(wordLength);
    for (let index = 0; index < arrStr.length; index++) {
      if (arrStr[index].length === wordLength) {
        longestWord = arrStr[index];
      }
    }
  }
  return longestWord;
}

console.log(findLongestWord(string));
