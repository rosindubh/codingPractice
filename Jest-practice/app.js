const add = (num1, num2) => {
  return num1 + num2
}

const theObject = {
  singer: "Robert Plant",
  guitar: "Jimmy Page",
  bass: "John Paul Jones",
  drums: "John Heny Bonham"
}

class person {
  constructor(name) {
  this._name = name;
  }
  get name() {
  return this._name;
  }
}

let phil = new person("Phil");

module.exports = {
  add,
  theObject,
  person,
  phil
}
