// phil welsby - 20 aug 2021

async function foo() {
   await 1
}






function foo() {
   return Promise.resolve(1).then(() => undefined)
}

