module.exports = {
	getRecentGames: async (req, res) => {
		const db = req.app.get("db");
		const { userId } = req.params;
		const stats = await db.stats.get_stats([userId]);
		res.status(200).send(stats);
	}
};
