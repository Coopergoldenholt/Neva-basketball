import React from "react";
import Moment from "react-moment";
import GameRadar from "./GameRadar/GameRadar";
import "./EachGameDisplay.css";

const EachGameDisplay = props => {
	const {
		layup_shot,
		layup_made,
		close_range_shot,
		close_range_made,
		free_throw_shot,
		free_throw_made,
		mid_range_shot,
		mid_range_made,
		three_shot,
		three_made,
		offensive_rebound,
		defensive_rebound,
		steal,
		assist,
		block,
		turnover,
		opponent,
		date
	} = props.stats;
	const points =
		layup_made * 2 +
		close_range_made * 2 +
		free_throw_made +
		mid_range_made * 2 +
		three_made * 3;
	const fieldGoalsAttempted =
		layup_shot + close_range_shot + mid_range_shot + three_shot;
	const fieldGoalsMade =
		layup_made + close_range_made + mid_range_made + three_made;
	const trueShootingAttempts = fieldGoalsAttempted + 0.44 * free_throw_shot;
	const trueShootingPercentage = (points / (2 * trueShootingAttempts)) * 100;
	const effectiveFieldGoalPercentage =
		((fieldGoalsMade + 0.5 * three_made) / fieldGoalsAttempted) * 100;
	return (
		<>
			<div>v.s. {opponent}</div>
			<Moment format="MMMM Do YYYY">{date}</Moment>

			<div className="average-display-container-game">
				<div className="average-display-stat-name-stat-container-game">
					<p>PTS</p>
					<hr className="line"></hr> <p>{points}</p>
				</div>
				<div className="average-display-stat-name-stat-container-game">
					<p>FG</p>
					<hr className="line"></hr>{" "}
					<p>
						{fieldGoalsMade}/{fieldGoalsAttempted}
					</p>
				</div>
				<div className="average-display-stat-name-stat-container-game">
					<p>FG%</p>
					<hr className="line"></hr>{" "}
					<p>
						{Math.round((fieldGoalsMade / fieldGoalsAttempted) * 10000) / 100}
					</p>
				</div>
				<div className="average-display-stat-name-stat-container-game">
					<p>eFG%</p>
					<hr className="line"></hr>{" "}
					<p>{Math.round(effectiveFieldGoalPercentage * 100) / 100}</p>
				</div>
				<div className="average-display-stat-name-stat-container-game">
					<p>TS%</p>
					<hr className="line"></hr>{" "}
					<p>{Math.round(trueShootingPercentage * 100) / 100}</p>
				</div>
				<div className="average-display-stat-name-stat-container-game">
					<p>FT</p>
					<hr className="line"></hr>{" "}
					<p>
						{free_throw_made}/{free_throw_shot}
					</p>
				</div>

				<div className="average-display-stat-name-stat-container-game">
					<p>3PA</p>
					<hr className="line-game"></hr> <p>{three_shot}</p>
				</div>
				<div className="average-display-stat-name-stat-container-game">
					<p>3PM</p>
					<hr className="line-game"></hr> <p>{three_made}</p>
				</div>
				<div className="average-display-stat-name-stat-container-game">
					<p>3P%</p>
					<hr className="line-game"></hr>{" "}
					<p>{Math.round((three_made / three_shot) * 10000) / 100}</p>
				</div>

				<div className="average-display-stat-name-stat-container-game">
					<p>FT%</p>
					<hr className="line-game"></hr>{" "}
					<p>{Math.round((free_throw_made / free_throw_shot) * 10000) / 100}</p>
				</div>
				<div className="average-display-stat-name-stat-container-game">
					<p>TRB</p>
					<hr className="line-game"></hr>{" "}
					<p>{offensive_rebound + defensive_rebound}</p>
				</div>
				<div className="average-display-stat-name-stat-container-game">
					<p>ORB</p>
					<hr className="line-game"></hr> <p>{offensive_rebound}</p>
				</div>
				<div className="average-display-stat-name-stat-container-game">
					<p>DRB</p>
					<hr className="line-game"></hr> <p>{defensive_rebound}</p>
				</div>
				<div className="average-display-stat-name-stat-container-game">
					<p>STL</p>
					<hr className="line-game"></hr> <p>{steal}</p>
				</div>
				<div className="average-display-stat-name-stat-container-game">
					<p>AST</p>
					<hr className="line-game"></hr> <p>{assist}</p>
				</div>
				<div className="average-display-stat-name-stat-container-game">
					<p>BLK</p>
					<hr className="line-game"></hr> <p>{block}</p>
				</div>
				<div className="average-display-stat-name-stat-container-game last-item">
					<p>TO</p>
					<hr className="line-game"></hr> <p>{turnover}</p>
				</div>
			</div>

			<div className="shot-distribution-chart">
				<GameRadar
					fieldGoalsAttempted={fieldGoalsAttempted}
					fieldGoalsMade={fieldGoalsMade}
					stats={props.stats}
				/>
			</div>
		</>
	);
};

export default EachGameDisplay;
