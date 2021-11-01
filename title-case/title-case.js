// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized

var titleCase = function (str) {
  words = str.split(" ");
  //console.log(words);
  //go thru each word
  const result = words.map((word) => {
    //get the first letter and uppercase it
    const firstLetter = word[0].toUpperCase();
    //get the rest of the word
    const restOfWord = word.slice(1).toLowerCase();
    //combine the first letter with the rest of the word in lowercase
    //add the updated word to a restulting list of words
    return firstLetter + restOfWord;
  });
  console.log(result.join(" "));
  return result.join(" ");
};
