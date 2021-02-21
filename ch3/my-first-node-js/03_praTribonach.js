// F0 = 0
// F1 = 0
// F2 = 1
// Fn+3 = Fn + Fn+1 + Fn+2 (n ≧ 0)
// Ex) 0, 0, 1, 1, 2, 4, 7, 13, 24, 44, 81, 149, 274,

'use strict';
const memo = new Map();
memo.set(0,0);
memo.set(1,0);
memo.set(2,1);
function tribonach(n){
  if(memo.has(n)) {
    return memo.get(n);
  }
  const value = tribonach(n-1) + tribonach(n - 2) + tribonach(n - 3);
  memo.set(n, value);
  return value;
}

const sampleNum = 10;
for(let i = 0;i <= sampleNum;i++) {
  console.log(tribonach(i));
}
