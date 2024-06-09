const myfn = () => {};
const myObj = {};

const wordMap = new Map([
  [1, "ashish"],
  [2, "mrig"],
  [3, "trishna"],
  [myfn, "my fn"],
  [myObj, "my Obj"],
]);
console.log("adfsd", wordMap);

// wordMap.set(6, "new value at 6");
// console.log(wordMap);
// console.log(wordMap.has(myfn));
wordMap.delete(1);
console.log(wordMap.has(1));

for (let [key, value] of wordMap) {
  console.log(key, value);
}

//Get Keys
console.log(wordMap.keys());

//Get values
console.log(wordMap.values());

//Clear map
wordMap.clear();
console.log(wordMap.size);
