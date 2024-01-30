const fibonacci = function(input) {
  // returns the nth number in the fibonacci sequence
  // can be done recursively
  // accepts only positive integers
  // accepts strings

  // convert input to integer
  let num = parseInt(input);
  // check if input is a number
  // if not, return '0'
  if (isNaN(num) || num < 0) {
    return 'OOPS';
  }
  
  // base case
  if (num == 0) {
    return 0;
  }
  else if (num == 1) {
    return 1;
  }

  // recursive case
  else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
};

// Do not edit below this line
module.exports = fibonacci;
