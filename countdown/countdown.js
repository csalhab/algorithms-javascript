// Write code to print all numbers from `num` down to 1
// You may assume `num` will be a positive number

var countdown = function(num) {
    //console.log(num);
    //this is better than changing num the incoming value, assign it to another variable and change this variable instead
    for (var i=num; i >= 1; i--) {
        console.log(i);
    }

};
