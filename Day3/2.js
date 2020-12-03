const { fileToArr } = require('../utils');
const { traverseSlope } = require('./utils');
let input = fileToArr('input.txt');

//Call it slow due to unneccesary render of map, will optimise later by only expanding map when needed
const slow = () => {
	const stepsRight = [1, 3, 5, 7, 1];
	const stepsDown = [1, 1, 1, 1, 2];
	const timesToRepeatPattern = input.length * Math.max(...stepsRight);
	const slope = input.map(line => line.repeat(timesToRepeatPattern));

	const slopesCount = stepsRight.length;
	let product = 1;
	for (let i = 0; i < slopesCount; i++) {
		product *= traverseSlope(stepsRight[i], stepsDown[i], slope);
	}
	return product;
}

console.time('time');
console.log(slow());
console.timeEnd('time');
