// phil welsby - 20 aug 2021

async function foo() {
    await 1

}



// is equivelent to

function foo() {
    return Promise.resolve(1).then(() => undefined)
}


