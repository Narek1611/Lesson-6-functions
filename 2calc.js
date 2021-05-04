let arr = [1000, 2, 5, 1, 4];
function operations(array) {
  let sum = 0;
  let difference = array[0];
  let product = 1;
  let division = array[0];
  function sum1(array) {
    for (let index = 0; index < array.length; index++) {
      sum = sum + array[index];
    }
    return sum;
  }
  console.log(sum1(arr));

  function difference1(array) {
    for (let index = 1; index < array.length; index++) {
      difference = difference - array[index];
    }
    return difference;
  }
  console.log(difference1(arr));

  function multiplication1(array) {
    for (let index = 0; index < array.length; index++) {
      product = product * array[index];
    }
    return product;
  }
  console.log(multiplication1(arr));

  function division1(array) {
    for (let index = 1; index < array.length; index++) {
      division = division / array[index];
    }
    return division;
  }
  console.log(division1(arr));
  return [sum, difference, product, division];
}
console.log(operations(arr));
