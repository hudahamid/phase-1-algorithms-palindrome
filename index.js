let reversedArray = [];
let fwdArray;
let rvsString;

function isPalindrome(fwdString) {
  stringSplitter(fwdString);
  return fwdString === `${rvsString}`;
}

function stringSplitter(string) {
  fwdArray = string.split("");
  reverseSplitWord(fwdArray);
}

function reverseSplitWord(array) {
  for (let i = array.length; i > 0; i--) {
    reversedArray = [...reversedArray, array.pop()];
  }
  arraytoString(reversedArray);
}

function arraytoString(array) {
  debugger;
  rvsString = array.join("");
  reversedArray = [];
}

/* 
  Add your pseudocode here
*/
//takes a string as an argument

//separates letters and pushes them to an array testWord

//reverses elements in the testWord array

//returns reversed testWord letters as a string

//reunites array elements to a string

//compares testWord output to original string

//if matches returns true, if not returns false

/*
  Add written explanation of your solution here
*/

//isPalindrome receives a string as an argument and stores it under fwdWord and passes it to the stringSplitter function before executing it's remaining comparison code.

//stringSplitter receives the string and calls the split method to separate the letters and push them to an empty array fwdArray. It then calls the handleSplitWord passing the array as an argument.

//handleSplitWord receives the array of letters and uses a for loop to iterate over them in descending order of index applying he pop method to return the elements to reversedArray. handleSplitWord then invokes arrayToString function passing the reversedArray as an argument.

//arrayToString receives the reversedArray and applies the join method to re-join the array elements and uses the parameter of an empty string to join the array elements and remove the commas, assigning it to the previously declared global variable rvsWord.

//isPalindrome then executes the remaining amount of code which is a strict comparison between fwdString and an interpolated value of rvsWord, returning true if so and false if not.

//You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;