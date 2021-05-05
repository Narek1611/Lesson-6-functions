let array = [1, 0, -9, 5, -3];
let number = 10;

function findLargerNumbers(arr, num) {
  let largers = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num) {
      largers.push(arr[i]);
    }
  }
  if (largers.length === 0) {
    largers.push("Such values do not exist");
  }
  return largers;
}
console.log(findLargerNumbers(array, number));
