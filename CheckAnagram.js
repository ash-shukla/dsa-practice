// Check Anagram (listen / silent)
function checkAnagram(str1, str2) {
  let string1 = str1.split("").sort().join("");
  let string2 = str2.split("").sort().join("");
  let result = false;
  if (string1 === string2) {
    result = true;
  } else {
    result = false;
  }
  return console.log(result);
}
checkAnagram("listen", "silent");
// true
/=====================================================================================/;
