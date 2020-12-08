const fs = require('fs');

const today = new Date().getDate();
const path = `./Day${today}`;

try {
	const snippet = 'const solution = () => {\n\tconst { fileToArr } = require(\'../utils\');\n\n}\n\nmodule.exports = solution;';
	fs.mkdirSync(path);
	fs.writeFileSync(`${path}/1.js`, snippet);
	fs.writeFileSync(`${path}/2.js`, snippet);
	fs.openSync(`${path}/input.txt`, 'w');
	fs.openSync(`${path}/problem.txt`, 'w');
} catch (err) {
	console.log(err.code == 'EEXIST' ? 'Folder already present' : err);
}
