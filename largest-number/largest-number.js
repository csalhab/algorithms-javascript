// Write code to return the largest number in the given array
// There is another algorithm named max-num that does something similar
// Did this as part of Hired.com

// Write code to return the largest number in the given array

const solution = (numbers) => {
  // Type your solution here

  if (numbers.length === 0) return 0;

  let i;

  //init max element
  let max = numbers[0];

  //traverse the numbers, comparing every element with the current max
  for (i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
};

// Trigger/Test code
let arr1 = [10, 324, 45, 90, 9808];
console.log("Largest number in given array1 is " + solution(arr1));

let arr2 = [7, 2, 6, 3];
console.log("Largest number in given array2 is " + solution(arr2));

let arr3 = [];
console.log(
  "Largest number in given array3, empty array, is " + solution(arr3)
);
