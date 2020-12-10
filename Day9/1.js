
const solution = () => {
	const { fileToArr } = require('../utils');
	const { findInvalid } = require('./utils');
	const input = fileToArr('./input.txt').map(nr => Number(nr));

	return findInvalid(25, input);
}

module.exports = solution;
