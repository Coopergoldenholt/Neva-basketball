import React from "react";
import Moment from "react-moment";
import GameRadar from "./GameRadar/GameRadar";
import "./EachGameDisplay.css";

const EachGameDisplayNoSubscription = props => {
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
		date,
		field_goals_attempted,
		field_goals_made
	} = props.stats;
	const points =
		layup_made * 2 +
		close_range_made * 2 +
		free_throw_made +
		mid_range_made * 2 +
		three_made * 3;

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
						{field_goals_made}/{field_goals_attempted}
					</p>
				</div>
				<div className="average-display-stat-name-stat-container-game">
					<p>FG%</p>
					<hr className="line"></hr>{" "}
					<p>
						{Math.round((field_goals_made / field_goals_attempted) * 10000) /
							100}
					</p>
				</div>

				<div className="average-display-stat-name-stat-container-game">
					<p>3P</p>
					<hr className="line-game"></hr>{" "}
					<p>
						{three_made}/{three_shot}
					</p>
				</div>

				<div className="average-display-stat-name-stat-container-game">
					<p>3P%</p>
					<hr className="line-game"></hr>{" "}
					<p>{Math.round((three_made / three_shot) * 10000) / 100}</p>
				</div>
				<div className="average-display-stat-name-stat-container-game last-item">
					<p>FT</p>
					<hr className="line"></hr>{" "}
					<p>
						{free_throw_made}/{free_throw_shot}
					</p>
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
				<div className="average-display-stat-name-stat-container-game last-item">
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
		</>
	);
};

export default EachGameDisplayNoSubscription;
