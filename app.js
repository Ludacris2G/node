const names = require('./4-names');
const sayHi = require('./5-utils');
console.log(names);
console.log(sayHi);
const person = require('./6-alternative');
console.log(person);

sayHi('susan');
sayHi(names.john);
sayHi(names.peter);