'use strict';
const fs       = require('fs');
const readline = require('readline');
const rs       = fs.createReadStream('ch3/my-first-node-js/00_popu-pref.csv');
const rl       = readline.createInterface({input: rs, output: {}});
const prefDataMap = new Map(); //(pref -> 集計データのオブジェクト)
rl.on('line', lineString => {
  const columns     = lineString.split(',');
  const year        = parseInt(columns[0]);
  const pref        = columns[2];
  const popu        = parseInt(columns[4]);
  if (year === 2010 || year === 2015) {
    let value = prefDataMap.get(pref);
    if (!value) {
      value = {
        popu10: 0,
        popu15: 0,
        change: null
      };
    }
    if (year === 2010) {
      value.popu10 = popu;
    }
    if (year === 2015) {
      value.popu15 = popu;
    }
    prefDataMap.set(pref, value);
  }
});
rl.on('close', () => {
  for(let [key, value] of prefDataMap) {
    value.change = value.popu15 / value.popu10;
  }
  const rankingArray = Array.from(prefDataMap).sort((pair1, pair2) => {
    //return pair2[1].change - pair1[1].change;
    return  pair1[1].change - pair2[1].change; //昇順
  });
  const rankingStrings = rankingArray.map(([key, value], rank) => {
    return (
      'No.' +
      (rank+ 1) + //0始まりなるから
      ', ' +
      key +
      ':' +
      value.popu10 +
      '=>' +
      value.popu15 +
      '変化率' +
      value.change
    );
  })
  //console.log(Array.from(prefDataMap));
  console.log(rankingStrings);
});
