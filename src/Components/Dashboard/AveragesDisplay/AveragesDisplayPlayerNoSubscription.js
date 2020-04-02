import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAverageStats } from "../../../ducks/statReducer";
import "./AverageDisplay.css";

const AveragesDisplayPlayerNoSubscription = props => {
	useEffect(() => {
		props.getAverageStats(props.user.user.id);
	}, []);

	const {
		totalGames,
		points,
		fieldGoalsMade,
		fieldGoalsShot,
		threeShot,
		freeThrowShot,
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
		threePointPercentage
	} = props.stats.averageStats;

	return (
		<>
			{parseInt(totalGames) === 0 ? (
				"You Have Not Played Any Games"
			) : (
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
							<p>3P%</p>
							<hr className="line"></hr> <p>{threePointPercentage}</p>
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
			)}
		</>
	);
};

const mapStateToProps = state => state;

export default connect(mapStateToProps, { getAverageStats })(
	AveragesDisplayPlayerNoSubscription
);
