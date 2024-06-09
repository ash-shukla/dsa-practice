function anagramGroup(words) {
  const anagramGroups = new Map();

  for (let word of words) {
    const sortedChars = word.split("").sort().join("");

    if (anagramGroups.has(sortedChars)) {
      console.log("first", anagramGroups.get(sortedChars));
      anagramGroups.get(sortedChars).push(word);
    } else {
      anagramGroups.set(sortedChars, [word]);
    }
  }
}

console.log(anagramGroup(["cat", "act", "dog", "god", "tac"]));
