// phil welsby 21 aug - 2021

//The os module provides operating system-related utility methods and properties. 
//It can be accessed using:

const os = require('os');

//console.log(os.arch());

//Returns an array of objects containing information about each logical CPU core.
console.log(os.cpus());

console.log(os.homedir());
console.log(os.hostname());
console.log(os.loadavg());
console.log(os.networkInterfaces());
console.log(os.uptime());

