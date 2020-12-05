
const rules = new Map([
	['byr', (value) => inRange(value, 1920, 2002)],
	['iyr', (value) => inRange(value, 2010, 2020)],
	['eyr', (value) => inRange(value, 2020, 2030)],
	['hgt', (value) => checkHGT(value)],
	['hcl', (value) => checkHCL(value)],
	['ecl', (value) => checkECL(value)],
	['pid', (value) => checkPID(value)],
	['cid', (value) => true]
]);

const inRange = (nr, min, max) => {
	try {
		nr = Number(nr);
		return min <= nr && nr <= max;
	} catch (err) {
		return false;
	}
}

const checkHGT = (height) => {
	return /^(59|6[0-9]|7[0-6])in|(15[0-9]|1[6-8][0-9]|19[0-3])cm$/.test(height);
}

const checkHCL = (hcl) => {
	return /^#{1}[a-f0-9]{6}$/.test(hcl);
}

const checkECL = (ecl) => {
	return /^amb|blu|brn|gry|grn|hzl|oth$/.test(ecl);
}

const checkPID = (pid) => {
	return /^[0-9]{9}$/.test(pid);
}

const validateField = (field) => {
	field = field.split(':');
	return rules.get(field[0])(field[1]);
}

const solution = () => {
	const { fileToArr } = require('../utils');
	const { hasAllFields } = require('./utils');
	const input = fileToArr('./input.txt', '\n\n');
	const passports = input.map((str) => str.replace(/\n/g, ' ').split(' '));

	//Accumulates instances that pass the condition and returns a no of passports
	return passports.reduce((acc, pass) => acc += (hasAllFields(pass) && pass.every(validateField)), 0);
}

module.exports = solution;