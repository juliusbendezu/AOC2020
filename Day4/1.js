
const solution = () => {
	const { fileToArr } = require('../utils');
	const { hasAllFields } = require('./utils');
	const input = fileToArr('./input.txt', '\n\n');
	passports = input.map((str) => str.replace(/\n/g, ' ').split(' '));
	return passports.reduce((acc, pass) => acc += hasAllFields(pass), 0);
}

console.log(solution());