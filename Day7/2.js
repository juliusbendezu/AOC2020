const getRuleForBag = (rules, bag) => {
	return rules.find(rule => rule.join(' ').includes(`${bag.join(' ')} bags contain`));
}

const findBags = (rules, bag = ['1', 'shiny', 'gold']) => {
	let instancesOfBag = Number(bag[0]);
	// Logic to extract bags and add to children from rule
	let rule = getRuleForBag(rules, bag.slice(1));
	rule = rule.slice(4);
	const children = [];

	for (let i = 0; i < rule.length; i += 4) {
		if ('no' == rule[i]) { //No children, return instances of self
			return instancesOfBag;
		}
		children.push(rule.slice(i, i + 3));
	}

	const childCount = children.reduce((tot, bag) => tot + findBags(rules, bag), 0);

	return (instancesOfBag * childCount) + instancesOfBag;
}

const solution = () => {
	const { fileToArr } = require('../utils');
	const rules = fileToArr('./input.txt').map(rule => rule.split(' '));
	return findBags(rules) - 1;
}

module.exports = solution;