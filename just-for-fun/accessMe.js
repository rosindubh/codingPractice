// phil welsby 21 aug - 2021

// to be accessed by the file <require.js>

function add  (num1, num2) {
 return num1 + num2;
}

function multiply (num1, num2) {
  return num1 * num2;
}

const name = "accessMe";

module.exports = {
    add,
    multiply
}


