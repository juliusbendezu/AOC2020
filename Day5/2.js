
const solution = () => {
	const { fileToArr } = require('../utils');
	const { findSeatId } = require('./utils');
	const boardingPasses = fileToArr('./input.txt');

	const sorted = boardingPasses
		.map(bp => findSeatId(bp))
		.sort((a, b) => a - b);

	for (let i = 0; i < sorted.length; i++) {
		if (2 == sorted[i + 1] - sorted[i]) //Next id is 2 bigger then current, missing is value in between
			return sorted[i] + 1;
	}
}

module.exports = solution