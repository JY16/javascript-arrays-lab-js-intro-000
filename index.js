const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name);
  return kittens;
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name);
  return kittens;
}

function appendKitten(name) {
  var kittensToo = [...kittens, name];
  return kittensToo;
}

function prependKitten(name) {
  var kittensToo = [name, ...kittens];
  return kittensToo;
}

function removeLastKitten() {
  var kittensToo = kittens.slice(0, kittens.length - 1);
  return kittensToo;
}

function removeFirstKitten() {
  var kittensToo = kittens.slice(1);
  return kittensToo;
}
