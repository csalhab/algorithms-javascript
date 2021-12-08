//check if a number is a prime number:
function test_prime(n) {
  if (n === 1) {
    return "n: " + n + " is NOT a Prime Number .. " + false;
  } else if (n === 2) {
    return "n: " + n + " is a Prime Number! " + true;
  } else {
    for (var x = 2; x < n; x++) {
      if (n % x === 0) {
        return "n: " + n + " is NOT a Prime Number .. " + false;
      }
    }
    return "n: " + n + " is a Prime Number .. " + true;
  }
}

//trigger for checking if a number is a prime number:
console.log(test_prime(12));
console.log(test_prime(15));
console.log(test_prime(17));
