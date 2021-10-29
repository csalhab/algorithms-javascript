// Write code to create a function that returns the factorial of `num`
//he product of an integer and all the integers below it; e.g. factorial four ( 4! ) is equal to 24 (4*3*2*1)
var factorial = function (num) {
  let result = num;
  console.log("num: " + num);
  if (num === 0) {
    return 1;
  } else {
    for (let i = num - 1; i > 0; i--) {
      console.log("loop num " + num);
      console.log("loop i " + i);
      result = result * i;
      console.log("result " + result);
    }
    return result;
  }
};
