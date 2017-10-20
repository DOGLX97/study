'use strict';

var _export = require('./export.js');

console.log(_export.a); //import : 负责把模块引，也是模块的引入操作

// 注意： ES6的模块化不能直接在浏览器中预览，必须要
// 使用babel-node index.js进行编译之后正常看到结果

console.log((0, _export.add)(5, 6));
console.log(_export.obj);

// import xx from './exportdefault.js';
// console.log(xx);

// import xx from './exportdefault.js';
// console.log(xx);