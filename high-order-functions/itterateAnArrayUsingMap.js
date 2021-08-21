// phil welsby - 21 aug 2021 - example of high order function using map()

const numbers = [1, 2, 3, 4, 5];

const newArray = numbers.map((number) => number + 1);
console.log(`Contents of original array called numbers = ${numbers}`);
console.log(`Contents of new array created using [map()] called newArray = ${newArray}`);
