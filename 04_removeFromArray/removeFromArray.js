const removeFromArray = function (arrInput, ...valuesToRemove) {
  let arr = arrInput;
  return arr.filter((x) => !valuesToRemove.includes(x));
};

// Do not edit below this line
module.exports = removeFromArray;
