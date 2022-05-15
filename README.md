# Algorithms

## Description

Many algorithms are covered here.

## Table of Contents

- [Description](#description)
- [Odd or Even](#odd-or-even)
- [Countdown](#countdown)
- [Sum Array](#sum-array)
- [Fizz Buzz](#fizz-buzz)
- [Max Num](#max-num)
- [Vowel count](#vowel-count)
- [Palindrome](#palindrome)
- [Palindrome No Test](#palindrome-no-test)
- [Factorial](#factorial)
- [Fibonacci](#fibonacci)
- [Title Case](#title-case)
- [Character Count](#character-count)
- [Product Of Largest Two](#product-of-largest-two)
- [100 Door](#100-door)

---

## Odd or Even

Determines whether a number is odd or even.

    * If `num` is evenly divisible by 2, return the string `"even"`.

    * If `num` is not evenly divisible by 2, return the string `"odd"`.

- You can check whether your function works properly by opening [odd-or-even/test.html](odd-or-even/test.html) in your web browser.

  - Functions that pass the tests will be denoted with a green check mark.

  - Functions that fail the tests will be denoted with a red X and an error message.

---

## Countdown

Print all numbers from the given `num` argument to `1`, inclusive.

- For example, given the number `10` as the `num` argument, the following should be printed to the console, one log at a time:

        10
        9
        8
        7
        6
        5
        4
        3
        2
        1

- You can check to see if your function works properly by opening [countdown/test.html](countdown/test.html) in your web browser.

  - Functions that pass the tests will be denoted with a green check mark.

  - Functions that fail the tests will be denoted with a red X and an error message.

---

## Sum Array

Adds up all the numbers in a given array and returns the total.

- See the following array for an example:

        var arr = [3, 1, 5, 6];

      - Given the preceding array, the following number should be returned:

        15

- You can check to see if your function works properly by opening [sum-array/test.html](sum-array/test.html) in your web browser.

  - Functions that pass the tests will be denoted with a green check mark.

  - Functions that fail the tests will be denoted with a red X and an error message.

---

## Fizz Buzz

Solves Fizz Buzz problem.

- Iterate through each number in the given array.

  - If a number is evenly divisible by 3, print "Fizz" to the console.

  - If a number is evenly divisible by 5 print "Buzz" to the console.

  - If a number is evenly divisible by 3 and 5, print "Fizz Buzz" to the console.

  - Else, print the number.

    - See the following array for an example:

      var arr = [13, 14, 15, 16, 17, 18, 19, 20];

    - Given the preceding array, the following should be printed to the console:

          13;

          14;

          ("Fizz Buzz");

          16

          17;

          ("Fizz");

          19;

          ("Buzz");

- You can check to see if your function works properly by opening [fizz-buzz/test.html](fizz-buzz/test.html) in your web browser.

  - Functions that pass the tests will be denoted with a green check mark.

  - Functions that fail the tests will be denoted with a red X and an error message.

---

## Max Num

Return the largest number present in the given `arr` array.

      - See the following array for an example:

        var arr = [3, 1, 17, 5, 6];

      - Given the preceding array, the following number should be returned:

        17;

- You can check to see if your function works properly by opening [max-num/test.html](max-num/test.html) in your web browser.

  - Functions that pass the tests will be denoted with a green check mark.

  - Functions that fail the tests will be denoted with a red X and an error message.

---

## Vowel Count

Counts the number of vowels in a given string.

- You can check to see if your function works properly by opening [vowel-count/test.html](vowel-count/test.html) in your web browser.

  - Functions that pass the tests will be denoted with a green check mark.

  - Functions that fail the tests will be denoted with a red X and an error message.

---

## Palindrome

This function takes in a string and determines whether or not it is a palindrome. A **palindrome** is any string spelled the same forwards as it is backwards.

    * Return `true` if the given string is a palindrome.

    * Return `false` if the given string is not a palindrome.

      * See the following string for an example:

        var str = "racecar";

      * Given the preceding string, the following should be returned:

        true;

- You can check to see if your function works properly by opening [palindrome/test.html](palindrome/test.html) in your web browser.

  - Functions that pass the tests will be denoted with a green check mark.

  - Functions that fail the tests will be denoted with a red X and an error message.

---

## Palindrome No Test

This function takes in a string and determines whether or not it is a palindrome. A **palindrome** is any string spelled the same forwards as it is backwards.

    * Return `true` if the given string is a palindrome.

    * Return `false` if the given string is not a palindrome.

      * See the following string for an example:

        var str = "racecar";

      * Given the preceding string, the following should be returned:

        true;

- Run using node on [palindrome-no-test/test.html](palindrome-no-test/test.html)

---

## Factorial

A **factorial** of a number is the product of all positive integers less than or equal to the number. For more information, see the [Wikipedia page on factorials](https://en.wikipedia.org/wiki/Factorial).

    * Return the factorial of the given `num` integer.

    * See the following code for an example:

      var num = 3;

    * Given the preceding number, the following should be returned:

      6;
      // 1 x 2 x 3 === 6

    * If given `0`, the factorial should be `1`. Otherwise, assume that the given number will be a whole positive number.

- You can check to see if your function works properly by opening [factorial/test.html](factorial/test.html) in your web browser.

  - Functions that pass the tests will be denoted with a green check mark.

  - Functions that fail the tests will be denoted with a red X and an error message.

---

## Fibonacci

The **_Fibonacci_** sequence is one of the most famous formulas in mathematics.

Each number in the sequence is the sum of the two numbers that precede it. So, the sequence goes: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, and so on.

The mathematical equation describing it is:

Xn+2= Xn+1 + Xn.

---

## Title Case

Capitalize the first letter of each word.

    * Return a string identical to the given `str` string, but with the first letter of each word capitalized.

    * See the following string for an example:

      var str = "open a new browser tab";

    * Given the preceding string, the following should be returned:

      "Open A New Browser Tab";

- You can check to see if your function works properly by opening [title-case/test.html](title-case/test.html) in your web browser.

  - Functions that pass the tests will be denoted with a green check mark.

  - Functions that fail the tests will be denoted with a red X and an error message.

---

## Character Count

Create a function that takes a string and returns an object containing the characters in the string and the number of times they appear.

- In this file you will be writing code in the body of the `characterCount` function to achieve the following:

  - Create a new object.

  - Loop through each character in the given string and create a new key for each character in the string.

  - The value of the character's key should be the number of times it appears in the string.

  - See the following function for an example:

    var str = "Hello World!";

  - Given the preceding function, the following object should be returned:

    { H: 1, e: 1, l: 3, o: 2, ' ': 1, W: 1, r: 1, d: 1, '!': 1 }

- You can check to see if your function works properly by opening [character-count/test.html](character-count/test.html) in your web browser.

  - Functions that pass the tests will be denoted with a green check mark.

  - Functions that fail the tests will be denoted with a red X and an error message.

---

## Product Of Largest Two

    * Find the largest and the second largest numbers in the given array.

    * Return the product of the largest and the second largest number.

    * See the following array for an example:

      var arr = [10, 20, 9, 6, 3]; // largest is 20, secondLargest is 10

    * Given the preceding array, the following product should be returned:

      200

    * **Note:** The given array will always contain at least two elements.

- You can check to see if your function works properly by opening [product-largest-two/test.html](product-largest-two/test.html) in your web browser.

  - Functions that pass the tests will be denoted with a green check mark.

  - Functions that fail the tests will be denoted with a red X and an error message.

---

## 100 Door

    * There are 100 doors in a row that are all initially closed.

    * You make 100 passes by the doors.

    * The first time through, visit every door and toggle the door (if the door is closed, open it; if it is open, close it).

    * The second time, only visit every 2nd door (i.e., door #2, #4, #6, …) and toggle it.

    * The third time, visit every 3rd door (i.e., door #3, #6, #9, …), etc., until you only visit the 100th door.

    * Implement a function to determine the state of the doors after the last pass.

    * Return the final result in an array, with only the door number included in the array if it is open.

    NOTE:

    Only Perfect Square doors will be open at the end.

    DOORS: 1,4,9,16,25,36,49,64,81,100

---

© 2021 All Rights Reserved.
