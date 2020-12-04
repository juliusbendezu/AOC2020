const isValid = (passport) => {
	const passportFields = passport.replace(/\n/g, ' ').split(' ');
	if (8 == passportFields.length) {
		return true;
	} else if (7 == passportFields.length) {
		return !passportFields.join().includes('cid');
	} else {
		return false;
	}
}

const { fileToArr } = require('../utils');

const passports = fileToArr('./input.txt', '\n\n');

let valids = 0;
passports.forEach((passport) => {
	valids += isValid(passport);
})

console.log(valids);
