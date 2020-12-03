const fs = require('fs');

const today = new Date().getDate();
const path = `./Day${today}`;

try {
	fs.mkdirSync(path);
	fs.openSync(`${path}/1.js`, 'w');
	fs.openSync(`${path}/2.js`, 'w');
	fs.openSync(`${path}/input.txt`, 'w');
	fs.openSync(`${path}/problem.txt`, 'w');
} catch (err) {
	console.log(err.code == 'EEXIST' ? 'Folder already present' : err);
}
