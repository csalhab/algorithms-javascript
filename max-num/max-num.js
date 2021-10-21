// Write code to return the largest number in the given array

var tempNum;

// var maxNum = function(arr) {
//     // what does the array look like?
//     console.log(arr);
//     // go through the array from beginning to next of last num
//     for (var i=0; i < arr.length-1; i++) {
//         console.log(Math.max(arr[i], arr[i+1]));
//         //console.log(arr[i]);
//         //console.log(arr[i+1]);
//         // checking the current number against the next number
//         // which one is bigger
//         // save the big one
//         tempNum = Math.max(arr[i], arr[i+1]);
//     }
//     return tempNum;
// };

var maxNum = function(arr) {
    // what does the array look like?
    console.log(arr);
    var biggest = arr[0];
    // go through the array from beginning to next of last num
    for (var i=0; i < arr.length-1; i++) {
        var currentNum = arr[i];
        var nextNum = arr[i+1];
        // checking the current number against the next number
        // which one is bigger
        // save the big one
        if (currentNum > nextNum) {
            biggest = currentNum;
        } else if (nextNum > currentNum) {
            biggest = nextNum
        }
    }
    return biggest;
};


