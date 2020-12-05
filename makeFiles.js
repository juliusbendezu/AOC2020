const fs = require('fs');

const today = new Date().getDate();
const path = `./Day${today}`;

try {
	fs.mkdirSync(path);
	fs.writeFileSync(`${path}/1.js`, '\n\nmodule.exports = solution');
	fs.writeFileSync(`${path}/2.js`, '\n\nmodule.exports = solution');
	fs.openSync(`${path}/input.txt`, 'w');
	fs.openSync(`${path}/problem.txt`, 'w');
} catch (err) {
	console.log(err.code == 'EEXIST' ? 'Folder already present' : err);
}
