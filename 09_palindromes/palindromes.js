const palindromes = function (string) {
  // Remove spaces and punctuation
  string = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");

  // Convert to lowercase
  string = string.toLowerCase();

  // works with multiple words
  string = string.replace(/\s/g, "");

  // Compare to reverse
  let reverseString = string.split("").reverse().join("");
  return string == reverseString;
};

// Do not edit below this line
module.exports = palindromes;
