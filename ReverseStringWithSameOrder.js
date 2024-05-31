// Reverse String with same order
function reverseStringWithSameOrder(str) {
  if (str === "") {
    return false;
  }

  let tempStr = str.split(" ").map((word) => {
    return word.split("").reverse().join("");
  });

  return tempStr.join(" ");
}

console.log(reverseStringWithSameOrder("hello world"));
//olleh dlrow//
/===========================================================================/;
// console.log(
//   "ashish"
//     .split("")
//     .map((letter, i) => letter.charCodeAt(0))
//     .sort((a, b) => a - b)
//     .map((codes) => String.fromCharCode(codes))
//     .join("")
// );
