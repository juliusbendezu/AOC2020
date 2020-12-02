const checkPassword = (policy, password) => {

}

const fileToArr = require('../common');
const input = fileToArr('./input.txt');
const cleanInput = require('./utils');

let count = 0;
input.forEach(line => {
	const { policy, password } = cleanInput(line);
	if (checkPassword(policy, password)) count++;
});

console.log(count);