class Ship {
	static directions = new Map([
		['E', { x: 1, y: 0 }],
		['S', { x: 0, y: 1 }],
		['W', { x: -1, y: 0 }],
		['N', { x: 0, y: -1 }]
	]);
	static directionsArr = Array.from(Ship.directions.keys());
	static angles = ['R', 'L'];

	followJourney = false; //Logging

	constructor(pos, dir) {
		this.pos = pos;
		this.direction = dir;
	}

	move(distance, dir = this.direction) {
		let prevPos = { ...this.pos };
		let d = Ship.directions.get(dir);
		this.pos.x += (d.x * distance);
		this.pos.y += (d.y * distance);

		if (this.followJourney) console.log(`Ship moving from { x: ${prevPos.x}, y: ${prevPos.y} } to { x: ${this.pos.x}, y: ${this.pos.y} } by x: ${d.x * distance}, y: ${d.y * distance}`);
	}

	rotate(degrees, angle) {
		const len = Ship.directionsArr.length;
		let d = degrees / 90; //Map degrees to index 0-3
		let idx = Ship.directionsArr.indexOf(this.direction);
		idx += d * ('R' == angle ? 1 : -1); // Move 'forward' or 'back' depending on angle rotating to
		//Handle over/underflow
		if (len <= idx) {
			idx -= len;
		} else if (0 > idx) {
			idx += len;
		}
		let prevDir = this.direction;
		this.direction = Ship.directionsArr[idx];

		if (this.followJourney) console.log(`Ship rotating ${degrees} degrees from direction ${prevDir} to the ${'R' == angle ? 'right' : 'left'}. New direction: ${this.direction}`);
	}

	x() {
		return this.pos.x;
	}

	y() {
		return this.pos.y;
	}

	travel(instructions) {
		instructions.forEach(instruction => {
			let { action, value } = instruction;
			if ('F' == action) {
				this.move(value);
			} else if (Ship.directions.has(action)) {
				this.move(value, action);
			} else if (Ship.angles.includes(action)) {
				this.rotate(value, action);
			} else {
				if (this.followJourney) console.log(`Action: ${action} not recognized. Value was: ${value}`);
			}
		});
		if (this.followJourney) console.log('Ships final state:', this);
	}
}

module.exports = Ship;