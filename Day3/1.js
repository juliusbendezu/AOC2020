const { fileToArr } = require('../utils');
const { traverseSlope } = require('./utils');
let input = fileToArr('input.txt');

const solution = () => {
	const stepsRight = 3;
	const stepsDown = 1;
	return traverseSlope(stepsRight, stepsDown, input)
}

console.time('time');
console.log(solution());
console.timeEnd('time');