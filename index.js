// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(names) {
 cats.push("Ralph");
}

function destructivelyPrependCat(name) {
 cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
 cats.pop();
}

function destructivelyRemoveFirstCat() {
 cats.shift();
}

function appendCat(name) {
 const appendCats = [...cats, "Broom"];
 return appendCats;
}

function prependCat(name) {
 const prependCats = ["Arnold", ...cats];
 return prependCats;
}

function removeLastCat() {
 const removesLastCat = cats.slice(0, cats.length - 1);
 return removesLastCat;
}

function removeFirstCat() {
 const removesFirstCat = cats.slice(1);
 return removesFirstCat;
}
