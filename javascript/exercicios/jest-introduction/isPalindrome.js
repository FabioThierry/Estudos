const reverseString = require("./reverseString");

function hello() {
  return "Hello World";
}

function isPalindrome(word) {
  return word.toLowerCase() === reverseString(word).toLowerCase();
}

module.exports = isPalindrome;
