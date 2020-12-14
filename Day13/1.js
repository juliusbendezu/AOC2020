const solution = () => {
	const { fileToArr } = require('../utils');
	const input = fileToArr('./input.txt');
	const timestamp = input[0];
	const ids = input[1].split(',').filter(v => 'x' != v);

	let closest = Number.MAX_VALUE;
	let closestId;
	for (const id of ids) {
		//Starting from timestamp, go up until find first departure divisible by current id
		let departure = timestamp;
		while (departure % id != 0) {
			departure++;
		}
		//If departure is closer to timestamp then current closest
		if (departure - timestamp < closest - timestamp) {
			closest = departure;
			closestId = id;
		}
	}

	// console.log('Minutes: ', closest - timestamp);
	return (closest - timestamp) * Number(closestId);

}

module.exports = solution;