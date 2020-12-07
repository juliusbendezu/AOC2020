
const bagContainingBag = (rule, bag = 'shiny gold') => {
	const regex = new RegExp(bag + ' bags*(\\.|\\,)');
	if (regex.test(rule)) {
		return rule.split(' ').slice(0, 2).join(' ');
	}
	return null;
}
const solution = () => {
	const { fileToArr } = require('../utils');
	const rules = fileToArr('./input.txt');

	const eventuallyContainsGold = ['shiny gold'];
	const checkedBags = [];
	const result = new Set();

	while (!!eventuallyContainsGold.length) {
		const bagToCheck = eventuallyContainsGold.shift();
		if (checkedBags.includes(bagToCheck)) {
			continue;
		}

		for (const rule of rules) {
			const bag = bagContainingBag(rule, bagToCheck);
			if (bag) {
				eventuallyContainsGold.push(bag);
				result.add(bag);
			}
		}
		checkedBags.push(bagToCheck);
	}

	return result.size;
}

module.exports = solution;