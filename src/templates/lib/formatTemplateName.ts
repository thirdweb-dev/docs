function transformName(name: string) {
  const capitalizeWords = ["nft", "ts", "dao"];
  const lowercaseWords = ["thirdweb"];

  return name
    .split("-")
    .map((word) => {
      if (capitalizeWords.includes(word)) {
        return word.toUpperCase();
      }

      if (lowercaseWords.includes(word)) {
        return word.toLowerCase();
      }

      return word[0].toUpperCase() + word.slice(1);
    })
    .join(" ");
}

export default transformName;