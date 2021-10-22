// Write code to return the the number of vowels in `str`
/*
String match()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
If the g flag is used, all results matching the complete regular expression will be returned, but capturing groups will not.
If the g flag is not used, only the first complete match and its related capturing groups are returned. In this case, the returned item will have additional properties as described below.
The regular expression includes the i flag so that upper/lower case differences will be ignored.
Ben said match can find "ae" as an example besides working for this.

*/


var vowelNumber;

var vowelCount = function(str) {

    console.log(str);
    if (str === "") {
        vowelNumber = 0;
    } else {
        // find the number of vowels
        vowelNumber = str.match(/[aeiou]/gi).length;
        console.log(vowelNumber);
    }

    return vowelNumber;
};
