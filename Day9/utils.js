
const findInvalid = (preambleSize, arr) => {
	const preambleQueue = arr.slice(0, preambleSize);
	arr = arr.slice(preambleSize);
	const preambleSet = new Set(preambleQueue);

	for (const nr of arr) {
		console.log('nr:', nr);
		const exists = preambleQueue.find(testing => preambleSet.has(nr - testing));

		if (!exists) { //Found the invalid
			return nr;
		}

		preambleSet.delete(preambleQueue.shift());
		preambleQueue.push(nr);
		preambleSet.add(nr);
	}
}

module.exports = { findInvalid };
