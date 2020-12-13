
const solution = () => {
	const { fileToArr } = require('../utils');
	const { deepCopy, firstInEveryDir } = require('./utils');
	let seats = fileToArr('./input.txt').map(l => l.split(''));

	let changing = true;
	while (changing) {
		let copy = deepCopy(seats);
		changing = false;
		for (let i = 0; i < seats.length; i++) {
			let row = seats[i];
			for (let j = 0; j < row.length; j++) {
				let seat = row[j];
				if ('.' == seat) {
					continue;
				}
				let visibleSeats = firstInEveryDir(seats, i, j);
				if ('L' == seat) {
					const noVisibleOccupied = visibleSeats.every(seat => 'L' == seat || '' == seat)
					if (noVisibleOccupied) {
						copy[i][j] = '#';
						changing = true;
					}
				} else if ('#' == seat) {
					let totOccupied = visibleSeats.join('').match(/#/g);
					if (!!totOccupied && 5 <= totOccupied.length) {
						copy[i][j] = 'L';
						changing = true;
					}
				}
			}
		}
		seats = deepCopy(copy);
	}

	return seats.map(r => r.join('')).join('').match(/#/g).length;
}

module.exports = solution;
