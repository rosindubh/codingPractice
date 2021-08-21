// phil welsby - 21 aug 2021

// script that uses the <require> keyword to access a file elsewhere

// file to accessed will be called accessMe.js

const accessMe = require("./accessMe");
console.log(accessMe.add(3, 3));
console.log(accessMe.multiply(9, 9));
