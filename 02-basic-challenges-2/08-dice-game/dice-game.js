function diceGameSimulation(numSimulations) {
	const simulations = [];
	const roll = () => Math.floor(Math.random() * 6) + 1;

	const simulation = () => {
		const game = {
			dice1: roll(),
			dice2: roll(),
			sum: 0,
			result: '',
		};

		game.sum = game.dice1 + game.dice2;

		if (game.sum === 7 || game.sum === 11) {
			game.result = 'win';
		} else if (game.sum === 2 || game.sum === 3 || game.sum === 12) {
			game.result = 'lose';
		} else {
			game.result = 'roll again';
		}

		return game;
	};

	for (let i = 0; i < numSimulations; i++) {
		simulations.push(simulation());
	}

	return simulations;
}

module.exports = diceGameSimulation;
