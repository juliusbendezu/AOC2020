
const solution = () => {
	const { fileToArr } = require('../utils');
	const { findSeat, seatId } = require('./utils');
	const boardingPasses = fileToArr('./input.txt');

	let highest = 0;
	boardingPasses.forEach(bp => {
		let row = bp.substring(0, 7);
		let col = bp.substring(7);
		row = findSeat(row, { min: 0, max: 127 });
		col = findSeat(col, { min: 0, max: 7 });
		const id = seatId(row, col);
		highest = highest < id ? id : highest;
	})
	return highest;
}

module.exports = solution;