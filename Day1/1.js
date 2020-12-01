const { fileToArr } = require('../common.js');

const input = fileToArr('./input.txt')

let result;
for (let i = 0; i < input.length; i++) {
	for (let j = 0; j < input.length; j++) {
		if ((2020 == Number(input[i]) + Number(input[j])) && (i != j)) {
			result = Number(input[i]) * Number(input[j]);
			break;
		}
	}
	if (result) {
		break;
	}
}

console.log(result);