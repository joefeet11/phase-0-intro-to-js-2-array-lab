// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}
destructivelyAppendCat(Ralph);

function destructivelyPrependCat(name) {
    cats.unshift(name);
}
destructivelyPrependCat(Bob);

function destructivelyRemoveLastCat() {
    cats.pop();
}
destructivelyRemoveLastCat();

function destructivelyRemoveFirstCat() {
    cats.shift();
}
destructivelyRemoveFirstCat();

function appendCat(name) {
    const copyofCats = [...cats, name];
    return copyofCats;
}
appendCat(Broom);

function prependCat(name) {
    const copyofCats = [name, ...cats];
    return copyofCats;
}
prependCat(Arnold);

function removeLastCat() {
    const copyofCats = [...cats.slice(0,2)];
    return copyofCats;
}
removeLastCat();

function removeFirstCat() {
    const copyofCats = [...cats.slice(-2)];
    return copyofCats;
}
removeFirstCat();
