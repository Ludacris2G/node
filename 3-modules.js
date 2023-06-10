// CommonJS, every file is a module ( by default )
// Modules - encapsulated code (only share minimum)
const names = require('./4-names');
const sayHi = require('./5-utils');
const person = require('./6-alternative');
require('./7-mind-grenade');

// sayHi('susan');
// sayHi(names.john);
// sayHi(names.peter);