const numbers = [2,4,6,8,10]

const square = (a) => {
  return a * a;
}
console.log(numbers);
const newNumbers = numbers.map(square)
console.log(newNumbers);
const newNewNumbers = newNumbers.map(square)
console.log(newNewNumbers);

