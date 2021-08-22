// phil welsby - 21 aug 2021 - using fiter() a high order function


// create an array
const numbers = [1, 2, 3, 4, 5];

// function to itterate through an array and add 1 to the value
function isOdd(array, oddArr = []) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      oddArr.push(array[i]);
    }
  }
  return oddArr;
}

const oddArray = isOdd(numbers);
console.log(oddArray);



// using the same array as above [numbers] code can written with a higher order of abstraction
const newOddArray = numbers.filter((number) => number % 2 !== 0);
console.log(newOddArray);
