// phil welsby - 20 aug 2021

function foo() {
   return Promise.resolve(1)
}


const p = new Promise((res, rej) => {
  res(1);
})

async function asyncReturn() {
  return p;
}

function basicReturn() {
  return Promise.resolve(p);
}

console.log(p === basicReturn()); // true
console.log(p === asyncReturn()); // false






//Note:

//Even though the return value of an async function behaves
//as if it's wrapped in a Promise.resolve, they are not equivalent.

//An async function will return a different reference,
//whereas Promise.resolve returns the same reference if the given value is a promise.

//It can be a problem when you want to check the equality of a promise and a return value of an async function.
