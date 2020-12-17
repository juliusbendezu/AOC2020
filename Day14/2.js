const solution = () => {
	const { parseInput, applyMaskFloating } = require('./utils');
	const input = parseInput('./input.txt', 36);

	const adresses = new Map();
	for (const group of input) {
		let mask = group[0];
		let actions = group.slice(1);
		actions.forEach(action => {
			const [adress, value] = action;
			const newAdresses = applyMaskFloating(mask, Number(adress));
			newAdresses.forEach(a => adresses.set(a, Number(value)));
		});
	}
	return Array.from(adresses.values()).reduce((acc, curr) => acc + curr, 0);
}

module.exports = solution;