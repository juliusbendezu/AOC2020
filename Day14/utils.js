
const _ = require('lodash');

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

const applyMaskFloating = (mask, value) => {
	let floatingCount = 0;

	value = value.toString(2).split(''); //Make binary then to char array
	if (value.length < mask.length) {
		while (value.length < mask.length) {
			value.unshift(0);
		}
	}
	for (let i = 0; i < mask.length; i++) {
		if ('X' == mask.charAt(i)) {
			floatingCount++;
		}
		if (0 != mask.charAt(i)) {
			value[i] = mask.charAt(i);
		}
	}

	return floatingCount > 0 ? getValuesFromFloating(value, floatingCount) : [Number.parseInt(value.join(''), 2)];
}

const getValuesFromFloating = (value, floatingCount) => {
	let values = [];
	const maxBits = Math.pow(2, floatingCount) - 1;

	//X:es can fit binary numbers to create all possible combos, numbers depend on floatingCount/x-count
	//Map every X-bit to a bit in the binary number, for every number, to create all combos
	for (let bit = 0; bit <= maxBits; bit++) {
		let bin = bit.toString(2);
		bin = _.padStart(bin, value.length, '0');

		const newValue = [];
		let binIdx = bin.length - 1;
		for (let i = 0; i < value.length; i++) {
			if ('X' == value[i]) {
				newValue.push(bin[binIdx]);
				binIdx--;
			} else {
				newValue.push(value[i]);
			}
		}
		values.push(newValue);
	}
	return values.map(v => Number.parseInt(v.join(''), 2));
}

module.exports = { parseInput, applyMask, applyMaskFloating };