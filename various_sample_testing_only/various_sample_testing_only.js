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

function adjacentElementsMinProduct(inputArray) {
  var curr = inputArray[0] * inputArray[1];
  var prod = curr;
  for (var i = 1; i < inputArray.length; i++) {
    console.log("curr:" + curr);
    var curr = inputArray[i] * inputArray[i + 1];
    if (curr > prod) {
      prod = curr;
      console.log("prod:" + prod);
    }
  }
  return prod;
}
console.log(
  "minimum product = " + adjacentElementsMinProduct([-23, 4, -3, 8, -12])
);
