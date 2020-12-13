
//Heavily based on ship.js but using new rules with waypoint

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

	constructor(pos, waypoint) {
		this.pos = pos;
		this.waypoint = waypoint;
	}

	moveWaypoint(distance, dir) {
		let prevWaypoint = { ...this.waypoint };
		let d = Ship.directions.get(dir);
		this.waypoint.x += (d.x * distance);
		this.waypoint.y += (d.y * distance);

		if (this.followJourney) console.log(`Ships waypoint moving from { x: ${prevWaypoint.x}, y: ${prevWaypoint.y} } to { x: ${this.waypoint.x}, y: ${this.waypoint.y} } by x: ${d.x * distance}, y: ${d.y * distance}`);
	}

	move(distance) {
		//Move according to waypoints values * distance
		let prevPos = { ...this.pos };
		this.pos.x += this.waypoint.x * distance;
		this.pos.y += this.waypoint.y * distance;
		if (this.followJourney) console.log(`Ship moving from { x: ${prevPos.x}, y: ${prevPos.y} } to { x: ${this.pos.x}, y: ${this.pos.y} } by x: ${this.waypoint.x * distance}, y: ${this.waypoint.y * distance}`);
	}

	rotate(degrees, angle) {
		const len = Ship.directionsArr.length;
		let d = degrees / 90; //Map degrees to index 0-3
		let idx = Ship.directionsArr.indexOf(this.waypoint.direction);
		idx += d * ('R' == angle ? 1 : -1); // Move 'forward' or 'back' depending on angle rotating to
		//Handle over/underflow
		if (len <= idx) {
			idx -= len;
		} else if (0 > idx) {
			idx += len;
		}
		let prevDir = this.waypoint.direction;
		this.waypoint.direction = Ship.directionsArr[idx];


		if (this.followJourney) console.log(`Ships waypoint rotating ${degrees} degrees from direction ${prevDir} to the ${'R' == angle ? 'right' : 'left'}. New direction: ${this.waypoint.direction}`);
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
				this.moveWaypoint(value, action);
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