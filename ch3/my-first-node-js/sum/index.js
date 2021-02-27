'use strict';
function add(numbers) {
  let result = 0;
  for(let num of numbers) {
    result += num;
  }
  return result;
}

module.exports = {
  add: add
};
//module.exports = { add }; でも良い
