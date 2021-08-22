// phil welsby 21 aug 2021 - fot testing code only

const numbers = [1, 2, 3, 4, 5];

// higher level of abstraction using filter
const oddArray = numbers.filter((number) => number % 2 !== 0);
console.log(oddArray);

// simple if/else statement
let age = 18;
let country = 'UK';
if (age >= 18 && country == 'UK') {
  console.log("\nYes I can serve you\n");
} else {
  console.log("You're not old enough");
}

// example using a switch
let toppings = ['mushrooms', 'pepperoni', 'anchovies', 'pineapple'];
for (let i = 0; i < toppings.length; i++) {

    switch(toppings[i]) {
      case 'pepperoni': console.log(`${toppings[i]} is good`);
        break;
      case 'pineapple': console.log(`${toppings[i]} is bad`);
        break;
      case 'mushrooms': console.log(`${toppings[i]} is good`);
        break;
      case 'anchovies': console.log(`${toppings[i]} is well out of order`);
    }
}


// this is an object
const person = {
  fName: 'Phil',
  lName: 'Welsby',
  sayHi () {
    return `\nHi my name is ${person.fName} ${person.lName}`; // Expected ouput - [Hi my name is Phil Welsby]
  }
};

console.log(person.sayHi());
