const hasAllFields = (passport) => {
	if (8 == passport.length) {
		return true;
	} else if (7 == passport.length) {
		return !passport.join().includes('cid');
	} else {
		return false;
	}
}

module.exports = { hasAllFields };