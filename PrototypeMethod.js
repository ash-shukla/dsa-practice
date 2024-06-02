// Prototype Methods
/Create a method numbers.uniqueElements() where numbers is an array of integers/;

Array.prototype.uniqueElements = function () {
  let uniqueArr = [];
  this.forEach((x) => {
    if (!uniqueArr.includes(x)) {
      uniqueArr.push(x);
    }
  });
  return uniqueArr;
};
let numbers = [1, 2, 3, 4, 2, 2, 3, 4, 1, 5, 6, 5];
const uniqueMethod = numbers.uniqueElements();
console.log(uniqueMethod);
