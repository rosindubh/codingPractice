// phil welsby - 23 aug 2021 - this file aquires the add and subtract functions from a file called philsFunctions and is able to use them

let philsFunctions = require("./philsFunctions");

console.log(philsFunctions.add(2, 2));


// if you know exactly the function you require, you can access just that function and not the whole module

const {add} = require("./philsFunctions");

console.log(add(6, 6));
