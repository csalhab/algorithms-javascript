// Write code to indicate the largest branch in the given binary tree
// Did this as part of Hired.com
// Given a binary tree represented as an array.
// For example, [3,6,2,9,-1,10] represents a binary tree.
// (where -1 is a non existent node): [diagram]
// Write a function that determines whether the left or right branch of the tree is larger.
// The size of each branch is the sum of the node values.
// The function should return the string "Right" if the right size is larger and "Left" if the left size is larger.
// If the tree has 0 nodes of it the size of the branches are equal, return the empty string.
// Example: [3,6,2,9,-1,10]
// Example output: "Left"

const getTreeSum = (numbers, x) => {
  console.log("hit getTreeSum, x= " + x);
  if (x > numbers.length - 1 || numbers[x] == -1) return 0;
  let leftChild = 2 * x + 1;
  let rightChild = 2 * x + 2;
  console.log("leftChild: " + leftChild);
  console.log("rightChild: " + rightChild);
  let sum = 0;
  if (x < numbers.length) {
    sum =
      numbers[x] +
      getTreeSum(numbers, leftChild) +
      getTreeSum(numbers, rightChild);
  }
  return sum;
};

const getBiggerSubtree = (arr) => {
  //If the tree has 0 nodes of it the size of the branches are equal, return the empty string and no further execution needed hence return
  if (arr == null || arr.length == 0) return "";
  console.log("binary tree aka arr coming in: " + arr);

  // we need two loops for this
  // one for left and one for right
  // we keep track of the left and right sums separately

  let leftSum = 0;
  let rightSum = 0;

  let left = 1;
  let right = 2;

  leftSum = getTreeSum(arr, left);
  rightSum = getTreeSum(arr, right);

  if (leftSum === rightSum) {
    return "";
  }

  if (leftSum > rightSum) {
    return "Left";
  } else {
    if (leftSum < rightSum) {
      return "Right";
    }
  }
  //return "";
};

// Trigger/Test code
let binaryTree1 = [3, 6, 2, 9, -1, 10];
console.log(
  "Largest branch/LEFT in given binaryTree1" +
    binaryTree1 +
    " is: " +
    getBiggerSubtree(binaryTree1)
);

let arr2 = [7, 2, 6, 3];
console.log("Largest number in given array2 is " + getBiggerSubtree(arr2));

let arr3 = [];
console.log(
  "Largest number in given array3, empty array, is (empty string hehe)" +
    getBiggerSubtree(arr3)
);

//not working hmm
let arr4 = [2, 5, 5, 5, 5];
console.log(
  "Largest number in given array4, equal sized branches, is (empty string hehe)" +
    getBiggerSubtree(arr4)
);

//worked on self test:

/* const solution = (arr) => {
  // Type your solution here

  const getBranchSum = (nums, x) => {
    if (x > nums.length - 1 || nums[x] == -1) {
      return 0;
    }
    let leftChild = 2 * x + 1;
    let rightChild = 2 * x + 2;

    let sum = 0;

    if (x < nums.length) {
      sum =
        nums[x] +
        getBranchSum(nums, leftChild) +
        getBranchSum(nums, rightChild);
    }

    return sum;
  };

  //0 nodes return empty string
  if (arr == null || arr.length == 0) return "";

  let leftSum = 0;
  let rightSum = 0;

  leftSum = getBranchSum(arr, 1);
  rightSum = getBranchSum(arr, 2);

  if (leftSum === rightSum) {
    return "";
  }
  if (leftSum > rightSum) {
    return "Left";
  } else {
    if (rightSum > leftSum) {
      return "Right";
    }
  }
}; */
