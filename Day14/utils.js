const parseInput = (file, maskLength) => {
	const { fileToArr } = require('../utils');
	let inputGroups = fileToArr(file, 'mask = ').map(line => line.trim().split('\n')).slice(1);
	return inputGroups.map(group => {
		return group.map(line => {
			if (maskLength != line.length) {
				line = line.split(' = ');
				const adress = line[0].match(/\[[0-9]+\]/);
				if (!!adress) {
					line[0] = adress[0].substring(1, adress[0].length - 1);
				}
			}
			return line;
		});
	});
}

//Take mask and value in decimal, convert to binary, apply mask and return new value in decimal
const applyMask = (mask, value) => {
	value = value.toString(2).split(''); //Make binary then to char array
	if (value.length < mask.length) {
		while (value.length < mask.length) {
			value.unshift(0);
		}
	}
	for (let i = 0; i < mask.length; i++) {
		if ('X' != mask.charAt(i)) {
			value[i] = mask.charAt(i);
		}
	}
	return Number.parseInt(value.join(''), 2);
}

module.exports = { parseInput, applyMask };