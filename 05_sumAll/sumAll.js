const sumAll = function (num1, num2) {
  if (num1 < 0 || num2 < 0) return "ERROR";
  if (!isNumber(num1) || !isNumber(num2)) return "ERROR";
  if (num1 > num2) {
    let temp = num1;
    num1 = num2;
    num2 = temp;
  }

  let sum = 0;
  for (let i = num1; i < num2 + 1; i++) {
    sum += i;
  }
  return sum;
};

function isNumber(num) {
  return typeof num === "number";
}

// Do not edit below this line
module.exports = sumAll;
