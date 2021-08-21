// phil welsby - 21 aug 2021

class myClass {
  constructor(name) {
    this._name = name;
  }
  get name() {
    return this._name
  }
}

const player = new myClass('Phil');

console.log(`Hi my name is ${player.name}`);
