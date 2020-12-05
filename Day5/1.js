
const solution = () => {
	const { fileToArr } = require('../utils');
	const { findSeatId } = require('./utils');
	const boardingPasses = fileToArr('./input.txt');

	let highest = 0;
	boardingPasses.forEach(bp => {
		const id = findSeatId(bp);
		highest = highest < id ? id : highest;
	})
	return highest;
}

module.exports = solution;