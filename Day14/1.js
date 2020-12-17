const solution = () => {
	const { parseInput, applyMask } = require('./utils');
	const input = parseInput('./input.txt', maskLength = 36);

	const adresses = new Map();
	for (const group of input) {
		let mask = group[0];
		let actions = group.slice(1);
		actions.forEach(action => {
			let [adress, value] = action;
			value = applyMask(mask, Number(value));
			adresses.set(adress, value);
		});
	}

	return Array.from(adresses.values()).reduce((acc, curr) => acc + curr, 0);
}

module.exports = solution;