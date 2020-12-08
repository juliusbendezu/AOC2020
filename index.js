
const runDay = (day, benchmarking) => {
	const path = `Day${day}`;
	process.chdir(`${__dirname}/${path}`);
	const pt1 = require(`./${path}/1`);
	const pt2 = require(`./${path}/2`);

	if (benchmarking) {
		const Benchmark = require('benchmark');
		const suite = new Benchmark.Suite;
		suite.add(`Day ${day} part 1`, pt1)
			.add(`Day ${day} part 2`, pt2)
			.on('cycle', (event) => console.log(String(event.target)))
			.run();
	} else {
		console.log(`\n\n-- ${day} Solutions for day ${day} --\n\nPart 1: ${pt1()}\tPart 2: ${pt2()}`);
	}
}

const runDays = (benchmarking) => {
	require('fs')
		.readdirSync('.')
		.filter(dir => /Day[0-9]+/.test(dir))
		.map(day => /([0-9]+)/.exec(day)[0])
		.forEach(day => runDay(day, benchmarking));
}

const args = process.argv.slice(2);
const benchmarking = 'true' == args[0];
console.log('benchmarking: ', benchmarking);
const day = args[1];
if (day) {
	runDay(day, benchmarking);
} else {
	runDays(benchmarking);
}
