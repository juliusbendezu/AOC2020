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

const findSeatId = (boardingPass) => {
	let row = boardingPass.substring(0, 7);
	let col = boardingPass.substring(7);
	row = findSeat(row, { min: 0, max: 127 });
	col = findSeat(col, { min: 0, max: 7 });
	return seatId(row, col);
}

const findSeatIdBin = (boardingPass) => {
	return Number.parseInt(boardingPass.replace(/F|L/g, '0').replace(/B|R/g, '1'), 2);
}

module.exports = { findSeat, seatId, findSeatId, findSeatIdBin }