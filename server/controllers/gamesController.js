module.exports = {
	getRecentGames: async (req, res) => {
		const db = req.app.get("db");
		const { userId } = req.params;
		const stats = await db.stats.get_stats([userId]);
		const updatedGameStats = [];
		res.status(200).send(stats);
	},
	getAllStats: async (req, res) => {
		const db = req.app.get("db");
		const { userId } = req.params;
		const [stats] = await db.stats.get_all_game_stats([userId]);
		const twoPointShot =
			parseInt(stats.layup_shot) +
			parseInt(stats.close_range_shot) +
			parseInt(stats.mid_range_shot);
		const twoPointMade =
			parseInt(stats.layup_made) +
			parseInt(stats.close_range_made) +
			parseInt(stats.mid_range_made);
		const effectiveFieldGoalPercentage =
			(parseInt(stats.field_goals_made) + parseInt(0.5 * stats.three_made)) /
			stats.field_goals_shot;

		const trueShootingAttempts =
			2 *
			(parseInt(stats.field_goals_shot) +
				0.44 * parseInt(stats.free_throw_shot));
		const trueShootingPercentage =
			parseInt(stats.total_points) / trueShootingAttempts;

		const simplePER =
			parseInt(twoPointMade) * 2 -
			parseInt(twoPointShot) * 0.75 +
			parseInt(stats.three_made) * 3 -
			parseInt(stats.three_shot) * 0.84 +
			parseInt(stats.free_throw_made) -
			parseInt(stats.free_throw_shot) * -0.65 +
			parseInt(stats.defensive_rebound) +
			parseInt(stats.offensive_rebound) +
			parseInt(stats.block) +
			parseInt(stats.steal) -
			parseInt(stats.turnover);

		const averageStats = {
			totalGames: stats.number_of_games,
			points: Math.round(stats.points * 100) / 100,
			fieldGoalsMade: stats.field_goals_made,
			fieldGoalsShot: stats.field_goals_shot,
			layupShot: stats.layup_shot,
			closeRangeShot: stats.close_range_shot,
			midRangeShot: stats.mid_range_shot,
			threeShot: stats.three_shot,
			freeThrowShot: stats.free_throw_shot,
			layupMade: stats.layup_made,
			closeRangeMade: stats.close_range_made,
			midRangeMade: stats.mid_range_made,
			threeMade: stats.three_made,
			freeThrowMade: stats.free_throw_made,
			offensiveRebound: stats.offensive_rebound,
			defensiveRebound: stats.defensive_rebound,
			totalRebound:
				parseInt(stats.defensive_rebound) + parseInt(stats.offensive_rebound),
			reboundAverage:
				Math.round(
					((parseInt(stats.defensive_rebound) +
						parseInt(stats.offensive_rebound)) /
						parseInt(stats.number_of_games)) *
						100
				) / 100,
			steal: stats.steal,
			stealAverage:
				Math.round(
					(parseInt(stats.steal) / parseInt(stats.number_of_games)) * 100
				) / 100,
			assist: stats.assist,
			assistAverage:
				Math.round(
					(parseInt(stats.assist) / parseInt(stats.number_of_games)) * 100
				) / 100,
			block: stats.block,
			blockAverage:
				Math.round(
					(parseInt(stats.block) / parseInt(stats.number_of_games)) * 100
				) / 100,
			turnover: stats.turnover,
			turnoverAverage:
				Math.round(
					(parseInt(stats.turnover) / parseInt(stats.number_of_games)) * 100
				) / 100,
			fieldGoalPercentage:
				Math.round((stats.field_goals_made / stats.field_goals_shot) * 10000) /
				100,
			freeThrowPercentage:
				Math.round((stats.free_throw_made / stats.free_throw_shot) * 10000) /
				100,
			twoPointPercentage:
				Math.round((twoPointMade / twoPointShot) * 10000) / 100,
			threePointPercentage:
				Math.round((stats.three_made / stats.three_shot) * 10000) / 100,
			effectiveFieldGoalPercentage:
				Math.round(effectiveFieldGoalPercentage * 10000) / 100,
			trueShootingPercentage: Math.round(trueShootingPercentage * 10000) / 100,
			layupPercentage:
				Math.round((stats.layup_made / stats.layup_shot) * 10000) / 100,
			closeRangePercentage:
				Math.round((stats.close_range_made / stats.close_range_shot) * 10000) /
				100,
			midRangePercentage:
				Math.round((stats.mid_range_made / stats.mid_range_shot) * 10000) / 100
		};

		res.status(200).send(averageStats);
	},
	addStats: async (req, res) => {
		const db = req.app.get("db");
		const {
			opponent,
			date,
			fieldGoalShot,
			fieldGoalMade,
			freeThrowShot,
			freeThrowMade,
			threeMade,
			threeShot,
			offensiveRebound,
			defensiveRebound,
			steal,
			assist,
			block,
			turnover
		} = req.body;
		console.log(opponent, date);
		const [game] = await db.game.create_game([opponent, 1, date]);
		console.log(game);
		const stats = await db.game.create_basic_stat_game([
			game.id,
			1,
			fieldGoalShot,
			fieldGoalMade,
			freeThrowShot,
			freeThrowMade,
			threeShot,
			threeMade,
			offensiveRebound,
			defensiveRebound,
			steal,
			assist,
			block,
			turnover
		]);
		res.status(200).send("Stats Saved");
	}
};
