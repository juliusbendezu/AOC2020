
const solution = () => {
	const { fileToArr } = require('../utils');
	const Ship = require('./ship');
	const instructions = fileToArr('./input.txt').map(instruction => { return { action: instruction.substring(0, 1), value: instruction.substring(1) } });

	const ship = new Ship({ x: 0, y: 0 }, 'E');
	// ship.followJourney = true;
	ship.travel(instructions);
	return Math.abs(ship.x()) + Math.abs(ship.y());
}

module.exports = solution;