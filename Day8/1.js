
const parseInstruction = (line) => {
	let iInc = 1;
	let aInc = 0;

	line = line.split(' ');
	const inst = line[0];
	const val = Number(line[1]);
	switch (inst) {
		case 'acc':
			return { iInc, aInc: val }
		case 'jmp':
			return { iInc: val, aInc }
		case 'nop':
			return { iInc, aInc };
	}
}
const solution = () => {
	const { fileToArr } = require('../utils');
	const program = fileToArr('./input.txt');

	let accumulator = 0;
	const performedInstructions = new Map();
	for (let i = 0; i < program.length;) {
		performedInstructions.set(i, program[i]);

		let { iInc, aInc } = parseInstruction(program[i]);
		i += iInc;
		accumulator += aInc;
		if (performedInstructions.get(i) == program[i]) {
			//console.log('Next instruction has already been performed, exiting program. ');
			return accumulator;
		}
	}
}

module.exports = solution;