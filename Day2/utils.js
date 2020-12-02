const cleanInput = (inputLine) => {
	const parts = inputLine.split(':');
	const password = parts[1].trim();
	let arr = parts[0].split(' ');
	let range = arr[0].split('-');
	const policy = {
		min: range[0],
		max: range[1],
		letter: arr[1]
	}
	return { policy, password };
}

module.exports = { cleanInput };