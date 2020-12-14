const solution = () => {
	const { fileToArr } = require('../utils');
	const ids = fileToArr('./input.txt')[1].split(',');
	console.log(ids);
}

module.exports = solution;