// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome

var isPalindrome = function (str) {
  //this does not remove all non-alphanumeric characters:
  //console.log(str.toLowerCase().replace(/[^a-zA-Z0-9]+/g,''));
  //this does remove all non-alphanumeric characters:
  console.log(str.toLowerCase().replace(/[^a-zA-Z]+/g, ""));
  var wordCount = 0;

  // Check if the string is empty and if it is, leave this function
  if (str === "") {
    console.log("str is empty");
    return false;
  }

  //palindrome is always an odd length
  //check if the length of the string is even or odd
  if (str.length % 2 === 0) {
    //it is even here:
    wordCount = str.length / 2;
  } else {
    //if the length of the string is 1 then it is automatically a palindrome
    if (str.length === 1) {
      console.log(
        "String has a length of just 1 character and is automatically a palindrome."
      );
      return true;
    } else {
      //length of the string is odd here so ignore middle character
      wordCount = (str.length - 1) / 2;
    }
  }

  // Loop through to check the first character to the last character and then move next
  for (var x = 0; x < wordCount; x++) {
    // Compare characters and drop them if they do not match
    if (str[x] != str.slice(-1 - x)[0]) {
      console.log("Entry is not a palindrome.");
      return false;
    }
  }
  console.log("The entry is a palindrome.");
  return true;
};
