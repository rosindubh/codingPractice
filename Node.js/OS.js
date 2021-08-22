// phil welsby 21 aug - 2021

//The os module provides operating system-related utility methods and properties.
//It can be accessed using:

const os = require('os');

//console.log(os.arch());

//Returns an array of objects containing information about each logical CPU core.
console.log(os.cpus());

console.log(os.homedir()); //displays home dir
console.log(os.hostname()); //displays hostname of computer
console.log(os.loadavg());
console.log(os.networkInterfaces()); // displays network interfaces
console.log(os.uptime()); // displays uptime in seconds

