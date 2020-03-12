import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAverageStats } from "../../../ducks/statReducer";
import "./AverageDisplay.css";

const AveragesDisplay = props => {
	useEffect(() => {
		props.getAverageStats(props.user.user.id);
	}, []);

	const {
		totalGames,
		points,
		fieldGoalsMade,
		fieldGoalsShot,
		layupShot,
		closeRangeShot,
		midRangeShot,
		threeShot,
		freeThrowShot,
		layupMade,
		closeRangeMade,
		midRangeMade,
		threeMade,
		freeThrowMade,
		offensiveRebound,
		defensiveRebound,
		totalRebound,
		reboundAverage,
		steal,
		stealAverage,
		assist,
		assistAverage,
		block,
		blockAverage,
		turnover,
		turnoverAverage,
		fieldGoalPercentage,
		freeThrowPercentage,
		twoPointPercentage,
		threePointPercentage,
		effectiveFieldGoalPercentage,
		trueShootingPercentage,
		layupPercentage,
		midRangePercentage,
		closeRangePercentage
	} = props.stats.averageStats;

	return (
		<>
			<h2>Averages:</h2>
			<div className="average-display-container">
				<div className="average-display-stat-name-stat-container">
					<p>PTS</p>
					<hr className="line"></hr> <p>{points}</p>
				</div>
				<div className="average-display-stat-name-stat-container">
					<p>FG%</p>
					<hr className="line"></hr> <p>{fieldGoalPercentage}</p>
				</div>
				<div className="average-display-stat-name-stat-container">
					<p>eFG%</p>
					<hr className="line"></hr> <p>{effectiveFieldGoalPercentage}</p>
				</div>
				<div className="average-display-stat-name-stat-container">
					<p>TS%</p>
					<hr className="line"></hr> <p>{trueShootingPercentage}</p>
				</div>
				<div className="average-display-stat-name-stat-container">
					<p>3P%</p>
					<hr className="line"></hr> <p>{threePointPercentage}</p>
				</div>
				<div className="average-display-stat-name-stat-container">
					<p>LP%</p>
					<hr className="line"></hr> <p>{layupPercentage}</p>
				</div>
				<div className="average-display-stat-name-stat-container">
					<p>CR%</p>
					<hr className="line"></hr> <p>{closeRangePercentage}</p>
				</div>
				<div className="average-display-stat-name-stat-container">
					<p>MR%</p>
					<hr className="line"></hr> <p>{midRangePercentage}</p>
				</div>
				<div className="average-display-stat-name-stat-container">
					<p>FT%</p>
					<hr className="line"></hr> <p>{freeThrowPercentage}</p>
				</div>
				<div className="average-display-stat-name-stat-container">
					<p>RB</p>
					<hr className="line"></hr> <p>{reboundAverage}</p>
				</div>
				<div className="average-display-stat-name-stat-container">
					<p>STL</p>
					<hr className="line"></hr> <p>{stealAverage}</p>
				</div>
				<div className="average-display-stat-name-stat-container">
					<p>AST</p>
					<hr className="line"></hr> <p>{assistAverage}</p>
				</div>
				<div className="average-display-stat-name-stat-container">
					<p>BLK</p>
					<hr className="line"></hr> <p>{blockAverage}</p>
				</div>
				<div className="average-display-stat-name-stat-container last-item">
					<p>TO</p>
					<hr className="line"></hr> <p>{turnoverAverage}</p>
				</div>
			</div>

			<h2>Totals:</h2>

			<div className="average-display-container">
				<div className="average-display-stat-name-stat-container">
					<p className="average-display-stat-name">GP</p>
					<hr className="line"></hr> <p>{totalGames}</p>
				</div>

				<div className="average-display-stat-name-stat-container">
					<p>FGA</p> <hr className="line"></hr> <p>{fieldGoalsShot}</p>
				</div>
				<div className="average-display-stat-name-stat-container">
					<p>FGM</p>
					<hr className="line"></hr>
					<p>{fieldGoalsMade}</p>
				</div>

				<div className="average-display-stat-name-stat-container">
					<p>3PA</p>
					<hr className="line"></hr> <p>{threeShot}</p>
				</div>
				<div className="average-display-stat-name-stat-container">
					<p>3PM</p>
					<hr className="line"></hr> <p>{threeMade}</p>
				</div>

				<div className="average-display-stat-name-stat-container">
					<p>LPA</p> <hr className="line"></hr>
					<p>{layupShot}</p>
				</div>
				<div className="average-display-stat-name-stat-container">
					<p>LPM</p>
					<hr className="line"></hr> <p>{layupMade}</p>
				</div>

				<div className="average-display-stat-name-stat-container">
					<p>CRA</p>
					<hr className="line"></hr> <p>{closeRangeShot}</p>
				</div>
				<div className="average-display-stat-name-stat-container">
					<p>CRM</p>
					<hr className="line"></hr> <p>{closeRangeMade}</p>
				</div>

				<div className="average-display-stat-name-stat-container">
					<p>MRA</p>
					<hr className="line"></hr> <p>{midRangeShot}</p>
				</div>
				<div className="average-display-stat-name-stat-container">
					<p>MRM</p>
					<hr className="line"></hr> <p>{midRangeMade}</p>
				</div>

				<div className="average-display-stat-name-stat-container">
					<p>FTA</p>
					<hr className="line"></hr> <p>{freeThrowShot}</p>
				</div>
				<div className="average-display-stat-name-stat-container">
					<p>FTM</p>
					<hr className="line"></hr> <p>{freeThrowMade}</p>
				</div>

				<div className="average-display-stat-name-stat-container">
					<p>TRB</p>
					<hr className="line"></hr> <p>{totalRebound}</p>
				</div>
				<div className="average-display-stat-name-stat-container">
					<p>ORB</p>
					<hr className="line"></hr> <p>{offensiveRebound}</p>
				</div>
				<div className="average-display-stat-name-stat-container">
					<p>DRB</p>
					<hr className="line"></hr> <p>{defensiveRebound}</p>
				</div>

				<div className="average-display-stat-name-stat-container">
					<p>STL</p>
					<hr className="line"></hr> <p>{steal}</p>
				</div>

				<div className="average-display-stat-name-stat-container">
					<p>AST</p>
					<hr className="line"></hr> <p>{assist}</p>
				</div>

				<div className="average-display-stat-name-stat-container">
					<p>BLK</p>
					<hr className="line"></hr> <p>{block}</p>
				</div>
				<div className="average-display-stat-name-stat-container last-item">
					<p>TO</p>
					<hr className="line"></hr> <p>{turnover}</p>
				</div>
			</div>
		</>
	);
};

const mapStateToProps = state => state;

export default connect(mapStateToProps, { getAverageStats })(AveragesDisplay);
