
const solution = () => {
	const { fileToArr } = require('../utils');
	const input = fileToArr('./input.txt', '\n\n');
	const groups = input.map(group => new Set(group.replace(/\n/g, '').split('')));
	return groups.map(group => group.size).reduce((acc, curr) => acc + curr);
}

module.exports = solution;