let arr = [5, -2, 0, 17, 88];
function separateODdEven(array) {
  let evenArray = [];
  let oddArray = [];
  for (i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      evenArray.push(array[i]);
    } else {
      oddArray.push(array[i]);
    }
  }
  console.log(`Evens: ${evenArray}`, `Odds:${oddArray}`);
}
separateODdEven(arr);
