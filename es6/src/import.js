//import : 负责把模块引，也是模块的引入操作

// 注意： ES6的模块化不能直接在浏览器中预览，必须要
// 使用babel-node index.js进行编译之后正常看到结果

import{a,add,obj}from './export.js';
console.log(a);
console.log(add(5,6));
console.log(obj);

// import xx from './exportdefault.js';
// console.log(xx);

// import xx from './exportdefault.js';
// console.log(xx);