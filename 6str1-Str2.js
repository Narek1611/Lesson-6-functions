let string1 = "This is some text.";
let string2 = "is";
function minusStr(str1, str2) {
  let res = "";
  str1 = str1.split(" ");
  for (let i = 0; i < str1.length; i++) {
    let word = str1[i];
    if (word.includes(str2)) {
      let startPoint = word.indexOf(str2);
      let endPoint = startPoint + str2.length;
      word = word.slice(0, startPoint) + word.slice(endPoint);
    }
    res += word + " ";
  }
  return res;
}
console.log(minusStr("This is some text.", "is"));
