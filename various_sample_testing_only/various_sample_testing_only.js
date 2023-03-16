/* const solution = (inputArray) =>
  Math.max(
    ...inputArray.slice(0, -1).map((n, index) => n * inputArray[index + 1])
  ); */

const solution = (inputArray) =>
  Math.max(
    ...inputArray.slice(0, -1).map((n, index) => {
      console.log("n:" + n);
      console.log("index:" + index);
      console.log("sum:" + n * inputArray[index + 1]);
      console.log("...");
      n * inputArray[index + 1];
    })
  );
let arr5 = [3, 6, -2, -5, 7, 3];
console.log("sliced 0, -1 is:" + arr5.slice(0, -1));

console.log("solution:" + solution(arr5));
