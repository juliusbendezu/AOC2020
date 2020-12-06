
const Benchmark = require('benchmark')

const runDay = (day) => {
	const path = `Day${day}`;
	process.chdir(`${__dirname}/${path}`);
	const pt1 = require(`./${path}/1`);
	const pt2 = require(`./${path}/2`);
	//Add pt1 & pt2 to benchmark suite
	console.log(`\n\n-- ${day} Solutions for day ${day} --\n\nPart 1: ${pt1()}\tPart 2: ${pt2()}`);
}

const runDays = () => {
	require('fs')
		.readdirSync('.')
		.filter(dir => /Day[0-9]+/.test(dir))
		.map(day => /([0-9]+)/.exec(day)[0])
		.forEach(runDay);
}

const day = process.argv[2];
if (day) {
	runDay(day);
} else {
	runDays();
}
