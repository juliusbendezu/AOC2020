const { fileToArr } = require('../utils');
const { traverseSlope } = require('./utils');
let input = fileToArr('input.txt');

//Call it slow due to unneccesary render of map, will optimise later by only expanding when needed
const slow = () => {
	const stepsRight = 3;
	const stepsDown = 1;
	const timesToRepeatPattern = input.length * stepsRight;
	const slope = input.map(line => line.repeat(timesToRepeatPattern));
	return traverseSlope(stepsRight, stepsDown, slope)
}

console.time('slow');
console.log(slow());
console.timeEnd('slow');
