/*
  Function Arrow Challenges
*/

//
// Challenge 2
//

// [1] One Statement In Function
// [2] Convert To Arrow Function
// [3] Print The Output [Arguments May Change]

// let names = function (...names) {
//   return `String [${names.join(", ")}] => Done !`;
// };

let names = (...names) => `String [${names.join(", ")}] => Done !`;

console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));

//
// Challenge 2
//

// [1] Replace ??? In Return Statement To Get The Output
// [2] Create The Same Function With Regular Syntax
// [3] Use Array Inside The Arguments To Get The Output

let myNumbers = [20, 50, 10, 60];

// let calc = (one, two, ...nums)=> {let result = 0;for (let i = 0; i < nums.length; i++) {result += nums[i];}return result + one + two;};

let calc = function (one, two, ...nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result += nums[i];
  }
  return result + one + two;
};

console.log(calc(10, myNumbers[3], myNumbers[(2)])); // 80
