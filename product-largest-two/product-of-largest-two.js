// Write code to create a function that accepts an array of numbers, finds the largest two numbers, and returns the product of the two

// 1:
// "Given an array of integers, find the highest product you can get from two of the integers."
// O(n^2) time
// BUT NOTE that this fails the 2nd test for:
// should return the number 2 when given [-10, -5, -2, -15, -1, -33, -88, -100]
// so commented it out
// 2:
// Math.max and using spread operator ... returns correct largest value in the array
// Math.min and using spread operator ... returns correct smallest value in the array
var productOfLargestTwo = function (arr) {
  console.log("arr: " + arr);

  //   let maxProduct = 0;
  //   for (let i = 0; i < arr.length; i++) {
  //     console.log("i: " + i);
  //     for (let j = i + 1; j < arr.length; j++) {
  //       // i+1 here!
  //       console.log("j: " + j);
  //       let product = arr[j] * arr[i];
  //       console.log(product);
  //       if (product > maxProduct) {
  //         maxProduct = product;
  //       }
  //     }
  //   }
  //   return maxProduct;

  //   console.log("largest is: " + Math.max(...arr));
  //   console.log("smallest is: " + Math.min(...arr));
  let first = Math.min(...arr);
  let second = Math.min(...arr);

  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    //console.log("current: " + current);
    if (first < current) {
      second = first;
      first = current;
    } else if (second < current) {
      second = current;
    }
    console.log("largest 2 elements are: " + first + " and " + second);
  }
  console.log("product of largest 2 elements is: " + first * second);
  return first * second;
};
