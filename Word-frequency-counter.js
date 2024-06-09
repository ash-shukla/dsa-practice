function wordFrequencyCounter(str) {
  const words = str.toLowerCase().split(" ");

  const wordFrequency = new Map();

  for (const word of words) {
    if (word === "") continue;

    if (wordFrequency.has(word)) {
      wordFrequency.set(word, wordFrequency.get(word) + 1);
    } else {
      wordFrequency.set(word, 1);
    }
  }
  return wordFrequency;
}

console.log(wordFrequencyCounter("The Tajmahal is the symbol of love"));
