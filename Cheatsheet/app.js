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
  else if(command === 'heroku') {
    page = './pages/heroku.txt'
    displayPage(page)
  }
  else if (command === 'json-web-tokens') {
    page = './pages/json-web-tokens.txt'
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
   else if(command === 'middleware') {
    page = './pages/middleware.txt'
    displayPage(page)
  }
   else if(command === 'mongo') {
     page = './pages/mongo.txt'
     displayPage(page)
   }
   else if(command === 'mongoose') {
     page = './pages/mongoose.txt'
     displayPage(page)
   }
  else if(command === 'mysql') {
     page = './pages/mysql.txt'
     displayPage(page)
  }
  else if(command === 'netlify') {
    page = './pages/netlify.txt'
    displayPage(page)
  }
  else if(command === 'node') {
    page = './pages/node.txt'
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
  else if (command === 'react-router-dom') {
    page = './pages/react-router-dom.txt'
    displayPage(page)
  }
  else if(command === 'rest-api') {
    page = './pages/rest-api.txt'
    displayPage(page)
  }
  else if(command === 'topics') {
    page = './pages/topics.txt'
    displayPage(page)
  }
  else {
    console.clear();
    console.log(`${command} is not listed...\n\nchoices are: \napi\narrays\nclasses\nflexbox\nfunctions\nheroku\njest\njson-web-tokens\nloops\nmiddleware\nmongoose\nmongo\nmysql\nnetlify\nnode\nobject\nreact\nreact-router-dom\nrest-api\ntopics\n`)
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
