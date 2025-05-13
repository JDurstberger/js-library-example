const lib = require('../src/index.js');

// Simple test for add function
console.log('Testing add function:');
console.log(`2 + 3 = ${lib.add(2, 3)}`);
console.assert(lib.add(2, 3) === 5, 'add function failed');

// Simple test for subtract function
console.log('Testing subtract function:');
console.log(`5 - 2 = ${lib.subtract(5, 2)}`);
console.assert(lib.subtract(5, 2) === 3, 'subtract function failed');

console.log('All tests passed!');