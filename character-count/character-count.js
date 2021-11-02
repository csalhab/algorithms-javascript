// Write code to create a function that accepts a string and returns an object containing the number of times each character appears in the string
var characterCount = function (str) {
  console.log(str);
  //create new obj
  const characterMap = {};
  //loop thru each char in the given string
  for (let letter of str) {
    console.log(letter);

    //create a new key for each character in the string
    if (!characterMap[letter]) {
      characterMap[letter] = 1;
    } else {
      characterMap[letter]++;
    }
  }
  console.log(characterMap);
  return characterMap;

  //the value of the char's key should be the number of times it appears in the string
};
