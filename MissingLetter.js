// Find the missing letter
function findMissingLetter(strArr) {
  let outputCode;
  const strCharCodes = strArr.map((letter) => letter.charCodeAt(0));
  console.log(strCharCodes);
  strCharCodes.forEach((codes, i) => {
    if (strCharCodes[i + 1] - codes > 1) {
      return (outputCode = strCharCodes[i]);
    }
  });
  return String.fromCharCode(outputCode + 1);
}

console.log(findMissingLetter(["a", "c", "d", "e", "f"]));
//b
/====================================================================================/;
