
const solution = () => {
	const { fileToArr } = require('../utils');
	const { deepCopy, adjacents, noAdjacent } = require('./utils');
	let seats = fileToArr('./input.txt').map(l => l.split(''));

	let changing = true;
	while (changing) {
		let copy = deepCopy(seats);
		changing = false;
		for (let i = 0; i < seats.length; i++) {
			let row = seats[i];
			for (let j = 0; j < row.length; j++) {
				if ('L' == row[j] && noAdjacent(seats, i, j)) {
					copy[i][j] = '#';
					changing = true;
				} else if ('#' == row[j] && adjacents(seats, i, j, 4)) {
					copy[i][j] = 'L';
					changing = true;
				}
			}
		}
		seats = deepCopy(copy);
	}

	return seats.map(r => r.join('')).join('').match(/#/g).length;
}

module.exports = solution;