const solution = () => {
	const { fileToArr } = require('../utils');
	const Ship = require('./ship2');
	const instructions = fileToArr('./test.txt').map(instruction => { return { action: instruction.substring(0, 1), value: instruction.substring(1) } });

	const ship = new Ship({ x: 0, y: 0 }, { x: 10, y: -1, direction: 'E' });
	ship.followJourney = true;
	console.log(ship);
	ship.travel(instructions);
}

module.exports = solution;