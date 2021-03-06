
const makeQuestionMap = () => {
	const map = new Map();
	for (let i = 0; i < 26; i++) {
		let char = 97 + i; //97 = 'a'
		map.set(String.fromCharCode(char), 0);
	}
	return map;
}

//Using map to store and calculate common questions
const solution = () => {
	const { fileToArr } = require('../utils');
	const input = fileToArr('./input.txt', '\n\n');

	//groups: [ group: [ person: ['a', 'b', etc..], ..], ..]
	const groups = input.map(group => group.split('\n').map(person => person.split('')));

	const questions = makeQuestionMap();

	let total = 0;
	for (const group of groups) {
		group.forEach(p => p.forEach(q => questions.set(q, questions.get(q) + 1)));
		questions.forEach((v, k) => {
			total += !!(group.length == v);
			questions.set(k, 0);
		});
	}
	return total;
};

//Using array intersection with lodash
const solution2 = () => {
	const _ = require('lodash');
	const { fileToArr } = require('../utils');
	const input = fileToArr('./input.txt', '\n\n');

	//groups: [ group: [ person: ['a', 'b', etc..], ..], ..]
	const groups = input.map(group => group.split('\n').map(person => person.split('')));
	return groups.reduce((total, group) => total + _.intersection(...group).length, 0);
}

module.exports = solution2;