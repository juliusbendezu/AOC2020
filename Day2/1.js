
const checkPassword = (policy, password) => {
	const { min, max, letter } = policy;
	let letterCount = 0;
	password.split('').forEach(ch => {
		if (ch == letter) letterCount++;
	});
	return min <= letterCount && letterCount <= max;
}

const solution = () => {

	const { fileToArr } = require('../utils');
	const input = fileToArr('./input.txt');
	const { cleanInput } = require('./utils');

	let count = 0;
	input.forEach(line => {
		const { policy, password } = cleanInput(line);
		if (checkPassword(policy, password)) count++;
	});
	return count;
}

module.exports = solution;