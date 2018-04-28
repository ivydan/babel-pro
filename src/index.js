// import 'babel-polyfill';
import * as babel from 'babel-core';
// var babel = require('babel-core');

var abc = 'mag';
const a = {
    ins: (abc) => `abc${abc}`,
    pad: () => `iiiiii${abc}`
}

console.log(a.ins('999'));
console.log(a.pad());

var result = babel.transform("code();", options);
console.log(result);