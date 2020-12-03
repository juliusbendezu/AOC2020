const { fileToArr } = require('../utils');
const { traverseSlope } = require('./utils');
let input = fileToArr('input.txt');

const solution = () => {
	const stepsRight = [1, 3, 5, 7, 1];
	const stepsDown = [1, 1, 1, 1, 2];
	const slopesCount = stepsRight.length;

	let product = 1;
	for (let i = 0; i < slopesCount; i++) {
		product *= traverseSlope(stepsRight[i], stepsDown[i], input);
	}
	return product;
}

console.time('time');
console.log(solution());
console.timeEnd('time');
