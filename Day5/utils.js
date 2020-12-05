const findSeat = (boardingPass, range) => {
	const mid = Math.round((range.min + range.max) / 2);
	range = ['F', 'L'].includes(boardingPass.charAt(0))
		? { min: range.min, max: mid }
		: { min: mid, max: range.max };

	if (1 == boardingPass.length) {
		return range.min;
	} else {
		return findSeat(boardingPass.substring(1), range);
	}
}

const seatId = (row, col) => {
	return row * 8 + col;
}

module.exports = { findSeat, seatId }