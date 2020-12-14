
//Based on ship.js but using new waypoint and new rules for moving

const { directions } = require("./ship");

class Ship {
	static directions = ['N', 'E', 'S', 'W'];
	static angles = ['R', 'L'];

	followJourney = false; //Logging

	waypoint = new Map([
		[directions[0], 0],
		[directions[1], 0],
		[directions[2], 0],
		[directions[3], 0],
	]);

	constructor(pos, waypoint) {
		this.pos = pos;
		this.waypoint = waypoint;
	}

	moveWaypoint(distance, dir) {
		let prevWaypoint = [...this.waypoint];
		this.waypoint.set(dir, this.waypoint.get(dir) + Number(distance));

		if (this.followJourney) console.log('Ships waypoint moving from', prevWaypoint, 'to', this.waypoint);
	}

	move(distance) {
		//N and W are negative, E and S positive
		let prevPos = { ...this.pos };
		this.pos.x += (this.waypoint.get('E') * distance) + (this.waypoint.get('W') * distance * -1);
		this.pos.y += (this.waypoint.get('S') * distance) + (this.waypoint.get('N') * distance * -1);

		if (this.followJourney) console.log(`Ship moving from { x: ${prevPos.x}, y: ${prevPos.y} } to { x: ${this.pos.x}, y: ${this.pos.y} }`);
	}

	rotate(degrees, angle) {
		let prevWaypoint = [...this.waypoint];
		let rotations = degrees / 90; //Map degrees to rotations 0-3

		//Manual right/left rotation, coul probably do something smart by mapping the index that access directions to 1/-1 
		if ('R' == angle) {
			//Rotate all values from waypoint 'rotation' amount of times
			for (let i = 0; i < rotations; i++) {
				let tmp = this.waypoint.get(Ship.directions[3]);
				this.waypoint.set(Ship.directions[3], this.waypoint.get(Ship.directions[2]));
				this.waypoint.set(Ship.directions[2], this.waypoint.get(Ship.directions[1]));
				this.waypoint.set(Ship.directions[1], this.waypoint.get(Ship.directions[0]));
				this.waypoint.set(Ship.directions[0], tmp);
			}
		} else {
			//Rotate all values from waypoint 'rotation' amount of times
			for (let i = 0; i < rotations; i++) {
				let tmp = this.waypoint.get(Ship.directions[0]);
				this.waypoint.set(Ship.directions[0], this.waypoint.get(Ship.directions[1]));
				this.waypoint.set(Ship.directions[1], this.waypoint.get(Ship.directions[2]));
				this.waypoint.set(Ship.directions[2], this.waypoint.get(Ship.directions[3]));
				this.waypoint.set(Ship.directions[3], tmp);
			}
		}

		if (this.followJourney) console.log(`Ships waypoint rotating ${degrees} degrees from [${prevWaypoint}] to the ${'R' == angle ? 'right' : 'left'}. New waypoint: [${[...this.waypoint]}]`);
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
			} else if (Ship.directions.includes(action)) {
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