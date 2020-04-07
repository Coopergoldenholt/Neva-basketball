module.exports = {
	createGameSession: async (req, res) => {
		req.session.user.game = {
			opponent: "",
			layupShot: 0,
			layupMade: 0,
			closeRangeShot: 0,
			closeRangeMade: 0,
			freeThrowShot: 0,
			freeThrowMade: 0,
			midRangeShot: 0,
			midRangeMade: 0,
			threeShot: 0,
			threeMade: 0,
			offensiveRebound: 0,
			defensiveRebound: 0,
			steal: 0,
			assist: 0,
			block: 0,
			turnover: 0
		};
		if (req.session.user.game)
			return res.status(200).send(req.session.user.game);
		else return res.status(500).send("Not Able to Start a Game");
	},
	updateGameStat: async (req, res) => {
		const { type, stat } = req.body;
		req.session.user.game = {
			...req.session.user.game,
			[type]: stat + req.session.user.game[type]
		};
		res.status(200).send(req.session.user.game);
	},

	endGame: async (req, res) => {
		const db = req.app.get("db");
		const { userId, date } = req.body;
		const {
			opponent,
			layupShot,
			layupMade,
			closeRangeShot,
			closeRangeMade,
			freeThrowShot,
			freeThrowMade,
			midRangeShot,
			midRangeMade,
			threeShot,
			threeMade,
			offensiveRebound,
			defensiveRebound,
			steal,
			assist,
			block,
			turnover
		} = req.session.user.game;
		const fieldGoalsShot =
			layupShot + closeRangeShot + midRangeShot + threeShot;
		const fieldGoalsMade =
			layupMade + closeRangeMade + midRangeMade + threeMade;
		const [game] = await db.game.create_game([opponent, userId, date]);
		const [stats] = await db.game.create_game_stat([
			game.id,
			userId,
			layupShot,
			layupMade,
			closeRangeShot,
			closeRangeMade,
			freeThrowShot,
			freeThrowMade,
			midRangeShot,
			midRangeMade,
			threeShot,
			threeMade,
			offensiveRebound,
			defensiveRebound,
			steal,
			assist,
			block,
			turnover,
			fieldGoalsShot,
			fieldGoalsMade
		]);

		delete req.session.user.game;
		res.status(200).send("Game Session Ended");
	}
};
