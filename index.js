const inquirer = require('inquirer');

const questions = [
	{
		type: 'number',
		name: 'math',
		message: 'Math score:',
	},
	{
		type: 'number',
		name: 'physics',
		message: 'Physics score:',
	},
	{
		type: 'number',
		name: 'languageArt',
		message: 'Language art score:',
	},
];

function getInput() {
	return inquirer.prompt(questions);
}

function getAverage(input) {
	return Math.round((input.math + input.physics + input.languageArt) / 3);
}

// const main = () => {
// 	getInput()
// 		.then((input) => {
// 			let average = getAverage(input);

// 			if (average < 60) {
// 				console.log('Grade is F');
// 			} else if (average < 80) {
// 				console.log('Grade is C');
// 			} else if (average < 90) {
// 				console.log('Grade is B');
// 			} else {
// 				console.log('Grade is A!');
// 			}
// 		})
// 		.error((e) => {
// 			console.log('Error occured!');
// 		});
// };

const main = async function () {
	const input = await getInput().catch((e) => {
		console.log('Error occured!');
	});

	let average = getAverage(input);

	if (average < 60) {
		console.log('Grade is F');
	} else if (average < 80) {
		console.log('Grade is C');
	} else if (average < 90) {
		console.log('Grade is B');
	} else {
		console.log('Grade is A!');
	}
};

main();
