
const cleanInput = (inputLine) => {
	const parts = inputLine.split(':');
	const password = parts[1].trim();
	let arr = parts[0].split(' ');
	let range = arr[0].split('-');
	const policy = {
		min: range[0],
		max: range[1],
		letter: arr[1]
	}
	return { policy, password };
}

const checkPassword = (policy, password) => {
	const { min, max, letter } = policy;
	let letterCount = 0;
	password.split('').forEach(ch => {
		if (ch == letter) letterCount++;
	});
	return min <= letterCount && letterCount <= max;
}


const { fileToArr } = require('../common');
const input = fileToArr('./input.txt');

let count = 0;
input.forEach(line => {
	const { policy, password } = cleanInput(line);
	if (checkPassword(policy, password)) count++;
});

console.log(count);