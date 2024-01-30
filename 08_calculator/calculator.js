const add = function(...args) {
  return args.reduce((total, current) => total + current, 0);
};

const subtract = function(...args) {
  let total = args[0];
  for (let i = 1; i < args.length; i++) {
    total -= args[i];
  }
  return total;
};

const sum = function(array) {
  return array.reduce((total, current) => total + current, 0);};

const multiply = function(array) {
  return array.reduce((total, current) => total * current, 1);
};

const power = function(...args) {
  return args.reduce((total, current) => total ** current);
};

const factorial = function(value) {
  if (value === 0) return 1;
  let total = 1;
  for (let i = value; i > 0; i--) {
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
