const nameSet = new Set(["john", "ashish", "jack"]);

//Add to set
nameSet.add("Mark");
nameSet.add("Darggg");

//Check values
console.log(nameSet.has("jack"));
console.log(nameSet.has("as"));

// Get Size
console.log(nameSet.size);
console.log(nameSet);

//looping
for (const name of nameSet) {
  console.log(name);
}

// convert ot array
const nameArr = [...nameSet];
console.log(nameArr);

// Clear
nameSet.clear();
console.log(nameSet.size);
