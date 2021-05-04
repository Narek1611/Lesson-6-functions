let givenWord = "nnaab";
//console.log(arrGivenWord);
let array = ["nanab", "banan", "fizik", "azrum"];
function findAnagram(word, possible) {
  let arrWord = word.split("");
  let a = arrWord.sort();
  for (let index = 0; index < possible.length; index++) {
    let b = possible[index].split("");
    b.sort();
    if (a.join("") === b.join("")) {
      console.log(possible[index]);
    }
  }
  return " ";
}
console.log(findAnagram(givenWord, array));
