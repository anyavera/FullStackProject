
/*a = 40, b = 50;
console.log('Show me sum', a + b);*/

const lodash = require('lodash');

const a = {
	name: 'Kesha'
};

const b = lodash.get(a, 'last name', '---');
console.log('hello', b);