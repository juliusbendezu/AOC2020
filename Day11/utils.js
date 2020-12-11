
const deepCopy = (arr) => {
	return JSON.parse(JSON.stringify(arr));
}

const getSeat = (arr, col, row) => {
	if (!!arr[col] && !!arr[col][row]) {
		return arr[col][row];
	} else {
		return '.';
	}
}

const adjacents = (arr, col, row, tolerance) => {
	let seats = [];
	seats.push(getSeat(arr, col, row - 1));
	seats.push(getSeat(arr, col, row + 1));
	seats.push(getSeat(arr, col - 1, row - 1));
	seats.push(getSeat(arr, col - 1, row));
	seats.push(getSeat(arr, col - 1, row + 1));
	seats.push(getSeat(arr, col + 1, row - 1));
	seats.push(getSeat(arr, col + 1, row));
	seats.push(getSeat(arr, col + 1, row + 1));
	return tolerance <= seats.reduce((acc, curr) => '#' == curr ? acc + 1 : acc, 0);
}

const noAdjacent = (arr, col, row) => {
	let seats = [];
	seats.push(getSeat(arr, col, row - 1));
	seats.push(getSeat(arr, col, row + 1));
	seats.push(getSeat(arr, col - 1, row - 1));
	seats.push(getSeat(arr, col - 1, row));
	seats.push(getSeat(arr, col - 1, row + 1));
	seats.push(getSeat(arr, col + 1, row - 1));
	seats.push(getSeat(arr, col + 1, row));
	seats.push(getSeat(arr, col + 1, row + 1));
	return seats.every(seat => 'L' == seat || '.' == seat);
}

module.exports = { deepCopy, getSeat, adjacents, noAdjacent };