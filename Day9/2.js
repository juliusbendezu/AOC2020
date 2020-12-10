
const solution = () => {
	const { fileToArr } = require('../utils');
	const { findInvalid } = require('./utils');
	const input = fileToArr('./input.txt').map(Number);

	const invalid = findInvalid(25, input);
	for (let i = 0; i < input.length; i++) {
		let range = [];
		let idx = i;
		let sum = 0;
		while (sum < invalid) {
			range.push(input[idx]);
			sum += input[idx];
			idx++;
		}
		if (sum == invalid) {
			range = range.sort((n1, n2) => n1 - n2);
			return range.shift() + range.pop();
		}
	}
}

module.exports = solution;