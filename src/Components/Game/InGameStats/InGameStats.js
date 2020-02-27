import React from "react";
import { connect } from "react-redux";

const InGameStats = props => {
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
	} = props.inGameStats;

	const getShootingPercentage = (shot, made) => {
		return Math.round((made / shot) * 100);
	};

	return (
		<div>
			<h2> v.s.{opponent}</h2>
			<p>
				FG: {layupMade + closeRangeMade + midRangeMade + threeMade}-
				{layupShot + closeRangeShot + midRangeShot + threeShot}
			</p>
			<p>
				Layup/Dunks: {layupMade}-{layupShot}{" "}
				{layupMade / layupShot
					? getShootingPercentage(midRangeShot, midRangeMade)
					: "0"}{" "}
				%
			</p>
			<p>
				CloseRange: {closeRangeMade}-{closeRangeShot}{" "}
				{closeRangeMade / closeRangeShot
					? getShootingPercentage(closeRangeShot, closeRangeMade)
					: "0"}{" "}
				%
			</p>
			<p>
				MidRange: {midRangeMade}-{midRangeShot}{" "}
				{midRangeMade / midRangeShot
					? getShootingPercentage(midRangeShot, midRangeMade)
					: "0"}{" "}
				%
			</p>
			<p>
				3PT: {threeMade}-{threeShot}{" "}
				{threeMade / threeShot
					? getShootingPercentage(threeShot, threeMade)
					: "0"}{" "}
				%
			</p>
			<p>
				FT: {freeThrowMade}-{freeThrowShot}{" "}
				{freeThrowMade / freeThrowShot
					? getShootingPercentage(freeThrowShot, freeThrowMade)
					: "0"}{" "}
				%
			</p>
			<p>OREB: {offensiveRebound}</p>
			<p>DREB: {defensiveRebound}</p>
			<p>STL: {steal}</p>
			<p>AST: {assist}</p>
			<p>BLK: {block}</p>
			<p>TO: {turnover}</p>
		</div>
	);
};

const mapStateToProps = state => {
	const { inGameStats } = state;
	return inGameStats;
};

export default connect(mapStateToProps)(InGameStats);
