// phil welsby - 21 aug 2021 - example of Node.js Readline Module

let readline = require('readline');
let fs = require('fs');

let myInterface = readline.createInterface({
  input: fs.createReadStream('index.html')
});

let lineno = 0;
myInterface.on('line', function (line) {
  lineno++;
  console.log('Line number ' + lineno + ': ' + line);
});
