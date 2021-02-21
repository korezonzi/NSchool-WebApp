'use strict';
const fs       = require('fs');
const readline = require('readline');
const rs       = fs.createReadStream('ch3/my-first-node-js/00_popu-pref.csv');
const rl       = readline.createInterface({input: rs, output: {}});
rl.on('line', lineString => {
  const columns     = lineString.split(',');
  const year        = parseInt(columns[0]);
  const pref        = columns[2];
  const popu        = parseInt(columns[4]);
  const TARGET_YEAR = [1995, 2000];

  if(TARGET_YEAR.includes(year)) {
    console.log(year + '/ ' + pref + '/ ' + popu);
  }
});
/* これでもいける??
rl.line = () => {
  console.log(rl);
} */
