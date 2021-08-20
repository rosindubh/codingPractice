//phil welsby - 18 aug 2021

const play = setInterval(timer ,1000);
function timer() {
  const d = new Date();
  document.getElementById("start").innerHTML = d.toLocaleTimeString();
};

let count = 0;

const start = setInterval(countTime, 1000);
function countTime () {
    count = count + 1;
    console.log(count);
    if (count == 5) {
        console.log("Game Over!");
    }

}