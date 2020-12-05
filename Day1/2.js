const func = () => {
	const { fileToArr } = require('../utils.js');
	let input = fileToArr('./input.txt')
	input = input.map(n => Number(n));

	for (let i = 0; i < input.length; i++) {
		for (let j = 0; j < input.length; j++) {
			for (let k = 0; k < input.length; k++) {
				if (2020 == input[i] + input[j] + input[k]) {
					return input[i] * input[j] * input[k];
				}
			}
		}
	}
}

module.exports = func;