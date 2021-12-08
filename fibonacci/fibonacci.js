number = 10;
fiboEvenTotal = 0;

//standard iteration way trigger:
//fibonacci(number);

//standard iteration way:
function fibonacci(number) {
    var a = 1;
    var b = 0;
    var temp = 0;
    while (number >= 0) {
        console.log("number: " + number);
        temp = a;
        a = a + b;
        b = temp;
        console.log("fibonacci: " + a);
        if (a % 2 === 0) {
            fiboEvenTotal += a;
            console.log("fiboEvenTotal: " + fiboEvenTotal)
        }
        number--;
    }
}

//recursion way:
function fibonacciSimpler(number) {
    //break recusion with this if statement:
    if (number < 2) {
        return number;
    }
    else {
        return fibonacciSimpler(number-1) + fibonacciSimpler(number-2);
    }
}
for (var i = 0; i < 10; i++) {
    //recursion way trigger:
    //console.log("fibonacciSimpler: " + fibonacciSimpler(i));
}

//array with recursion way:
var fibonacci_array = function (n) {
    console.log(" beginning of recursion function, n: " + n);
    var fibonacciEvenSum = 0;
  if (n===1) 
  {
    return [0, 1];
  } 
  else 
  {
    console.log("recursion called, n: " + n);
    var s = fibonacci_array(n - 1);
    console.log("s.length: " + s.length);
    console.log("s: " + s);
    s.push(s[s.length - 1] + s[s.length - 2]);
    if (s[s.length] % 2 === 0) {
        fibonacciEvenSum += s[s.length]
    }
    console.log("just before return s, n: " + n);
    console.log("fibonacciEvenSum: " + fibonacciEvenSum);
    return s;
  }
};

//array with recursion way trigger:
console.log("fibonacci_array: " + fibonacci_array(8));