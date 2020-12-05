
const twoLoopSolution = (input) => {
	for (let i = 0; i < input.length; i++) {
		for (let j = 0; j < input.length; j++) {
			if ((2020 == Number(input[i]) + Number(input[j])) && (i != j)) {
				return result = Number(input[i]) * Number(input[j]);
			}
		}
	}
}

const oneLoopSolution = (input) => {
	//Transform input into set (of numbers)
	input = new Set(input.map(i => Number(i)));

	for (const nr of input) {
		if (input.has(2020 - nr)) {
			return nr * (2020 - nr);
		}
	}
}

const solution = () => {
	const { fileToArr } = require('../utils.js');
	const input = fileToArr('./input.txt');
	return oneLoopSolution(input);
}

module.exports = solution;