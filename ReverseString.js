// Reverse String
// Method-1
function reverseString(str) {
  let tempStr = str.split("");
  return tempStr.reverse().join("");
}

console.log(reverseString("Ashish is a good boy"));

// Method-2
function reverseString2(str) {
  if (str === "") {
    return "";
  }
  return reverseString2(str.substring(1)) + str.charAt(0);
}

console.log(reverseString2("this is for second method"));
