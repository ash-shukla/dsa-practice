//Capitalize first letter of each word
function sentenceCapitalization(sentence) {
  if (sentence === "") {
    return false;
  }
  let tempStr = sentence.split(" ");
  return tempStr
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}
console.log(sentenceCapitalization("bharat is the best country"));
/===========================================================================/;
