const checkPassword = (policy, password) => {
	let { min: idx1, max: idx2, letter } = policy;
	idx1 = Number(idx1) - 1;
	idx2 = Number(idx2) - 1;
	console.log(idx1, idx2);
	return (password.charAt(idx1) == letter || password.charAt(idx2) == letter) && password.charAt(idx1) != password.charAt(idx2);
}

const { fileToArr } = require('../common');
const input = fileToArr('./input.txt');
const { cleanInput } = require('./utils');

let count = 0;
input.forEach(line => {
	const { policy, password } = cleanInput(line);
	if (checkPassword(policy, password)) count++;
});

console.log(count);