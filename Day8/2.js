
const parseInstruction = (line) => {
	let iInc = 1;
	let aInc = 0;

	const inst = line[0];
	const val = Number(line[1]);
	switch (inst) {
		case 'acc':
			return { iInc, aInc: val };
		case 'jmp':
			return { iInc: val, aInc };
		case 'nop':
			return { iInc, aInc };
	}
}

const runProgram = (program) => {
	const performedInstructions = new Map();
	let accumulator = 0;
	for (let i = 0; i < program.length;) {
		const current = program[i];
		performedInstructions.set(i, current);

		let { iInc, aInc } = parseInstruction(current);
		i += iInc;
		accumulator += aInc;
		const next = program[i];
		if (!!next && performedInstructions.get(i) == next) {
			//console.log('Next instruction has already been performed, exiting program. ');
			return { accumulator, finished: false };
		}
	}
	return { accumulator, finished: true }
}

const solution = () => {
	const { fileToArr } = require('../utils');
	const program = fileToArr('./input.txt').map(line => line.split(' '));

	for (let i = 0; i < program.length; i++) {
		const line = program[i];
		if (line.includes('acc')) {
			continue;
		}

		const instruction = line[0];
		const val = line[1];
		const copy = [...program];

		copy[i] = 'jmp' == instruction ? ['nop', val] : ['jmp', val];
		const { accumulator, finished } = runProgram(copy);
		if (finished) {
			// console.log('Made it, returning accumulator');
			return accumulator;
		}
	}
}

module.exports = solution;