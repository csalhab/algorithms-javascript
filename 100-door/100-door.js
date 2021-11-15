/*
100 doors observations:
-Doors numbered 1 - 100 start closed. 
-We need to find all the numbers of the open doors at the end of the function, returned in an array.
-We will iterate over the range 100 times, toggling the doors open/closed (represented by true/false, respectively).
Each iteration over the range the gap between toggles increases by a multiple, incremented by one.
-On the last iteration only the 100th door will be toggled.
*/

function hundredDoors(numDoors) {
  // Create an array of 100 boolean values, false means door is closed
  let array = [];
  let num = 0;
  while (num < numDoors) {
    array.push(false);
    num += 1;
  }
  // Create a counter starting at 1 that increments by 1 with each iteration
  let counter = 1;
  // While the counter is less than or equal to the number of doors do the following:
  while (counter <= numDoors) {
    // iterate over the number of doors
    for (let i = counter; i <= numDoors; i += counter) {
      // For each index that it lands on, change the boolean value to the opposite of what it was
      array[i] = !array[i];
    }
    counter += 1;
  }

  // Create an empty array and a variable to keep track of our current arrays index
  // Map over array of boolean arrays, incrementing index counter after each loop
  // When index value == true, push the index into the index array
  // Return the array of index numbers
  let doorNumbers = [];
  //let currentIndex = 0;
  // array.map((bool) => {
  //   if (bool === true) {
  //     doorNumbers.push(currentIndex);
  //   }
  //   currentIndex += 1;
  // });
  for (i = 0; i <= numDoors; i++) {
    if (array[i] === true) {
      doorNumbers.push(i);
    }
  }
  return doorNumbers;
}

//INITIALIZATION - kick it off
const doors = hundredDoors(100);

//ECHO OUT - log out final values
console.log("DOORS: " + doors);
