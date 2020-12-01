const fs = require('fs');

const fileToArr = (filePath, delimeter = '\n') => {
	const file = fs.readFileSync(filePath, 'utf-8');
	return file.split(delimeter);
}

module.exports = { fileToArr };