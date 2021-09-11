//phil welsby - 11 sept 2021

//set command to equal argv[2] from terminal input
const command = process.argv[2];

//required libraries
let readline = require("readline");
let fs = require("fs");

//main
const app = () => {
  if(command === 'api') {
    let page = './pages/api.txt'
    displayPage(page)
  }
  else if(command ==='arrays') {
     page = './pages/arrays.txt'
    displayPage(page)
  }
   else if(command === 'classes') {
     page = './pages/classes.txt'
     displayPage(page)
   }
   else if(command === 'flexbox') {
    page = './pages/flexbox.txt'
    displayPage(page)
  } 
  else if(command === 'functions') {
    page = './pages/functions.txt'
    displayPage(page)
  }   
  else if(command === 'jest') {
    page = './pages/jest.txt'
    displayPage(page)
  }   
  else if(command === 'loops') {
    page = './pages/loops.txt'
    displayPage(page)
  }   
  else if(command === 'object') {
    page = './pages/object.txt'
    displayPage(page)
  }
  else if(command === 'react') {
    page = './pages/react.txt'
    displayPage(page)
}
  else {
    console.clear();
    console.log(`${command} is not listed...\n\nchoices are: \napi\narrays\nclasses\nflexbox\nfunctions\njest\nloops\nobject\nreact`)
  }

}

//function to display page
const displayPage = (page) => {
    console.clear();
    let myInterface = readline.createInterface({
        input: fs.createReadStream(page)
      });
      let lineno = 0;
      myInterface.on('line', function (line) {
        lineno++;
        console.log(line);
      });
   }


app();
