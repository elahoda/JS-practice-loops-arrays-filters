var stuff = [
  "cars",
  "blankets",
  "sunflowers",
  "sky",
  "yellow",
  "code",
  "perfume",
  "coffee",
  "books"
];
console.log(stuff);

/*logout even items

stuff.forEach(function (item, index) {
  if (index % 2 === 0) console.log(`${item}`);
});
*/

/* remove an array item
var removeItem = function (array, item) {
  var index = stuff.indexOf(item);

  if (index === -1) {
    return "item is not in this array";
  } else {
    stuff.splice(index, 1);
    console.log(`${item} was removed`);
  }
};
removeItem(stuff, "cars");
*/

// log out items with letter s

for (var item of stuff) {
  if (item.includes("s")) console.log(`${item}`);
}

var filterStuff = stuff.filter(function (item) {
  return item.includes("s");
});
console.log(filterStuff);
