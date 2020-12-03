const traverseSlope = (stepsRight, stepsDown, slope) => {
	let pos = 0;
	let trees = 0;
	for (let i = 0; i < slope.length; i += stepsDown) {
		if (slope[i].charAt(pos) == '#') trees++;
		pos += stepsRight;
	}
	return trees;
}

module.exports = { traverseSlope };