// Hashtag Generator
function capitalizer(str) {
  /we can use this capitalizer method also in the below method/;
  if (str === "") {
    return false;
  }
  let temp = str.split("");
  temp[0] = temp[0].toUpperCase();
  return temp.join("");
}
function hashTagGenerator(str) {
  if (str === "" || str.length > 14) {
    return false;
  }
  let tempStr = str.trim().split(" ");
  return (
    "#" +
    tempStr
      .map((record) => record.charAt(0).toUpperCase() + record.slice(1))
      .join("")
  );
}

console.log(hashTagGenerator("india win t20"));
//#IndiaWinT20
/======================================================================================/;
