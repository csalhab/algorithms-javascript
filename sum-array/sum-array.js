// Write code to add all the numbers in `arr` and return the total

var arrSum = 0;

var sumArray = function(arr) {
    console.log(arr);
    for (var i=0; i < arr.length; i++) {
        console.log("arr" + i);
        console.log("arr" + i + "value: " + arr[i]);
        //arrSum = arrSum + arr[i];
        arrSum += arr[i];
        console.log("arrSum: " + arrSum);
    }

    return arrSum;

};
