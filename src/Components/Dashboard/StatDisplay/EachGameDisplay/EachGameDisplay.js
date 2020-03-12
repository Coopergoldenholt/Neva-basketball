import React from "react";
import Moment from "react-moment";
import GameRadar from "./GameRadar.js/GameRadar";

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
		<div>
			<div>v.s. {opponent}</div>
			<Moment format="MMMM Do YYYY">{date}</Moment>

			<div>PTS: {points}</div>
			<div>
				FG: {fieldGoalsMade}/{fieldGoalsAttempted}{" "}
			</div>
			<div>
				FG%: {Math.round((fieldGoalsMade / fieldGoalsAttempted) * 10000) / 100}
			</div>
			<div>TS%: {Math.round(trueShootingPercentage * 100) / 100}</div>
			<div>eFG%: {Math.round(effectiveFieldGoalPercentage * 100) / 100}</div>
			<div>
				FT: {free_throw_made}/{free_throw_shot}
			</div>
			<div>
				FT%: {Math.round((free_throw_made / free_throw_shot) * 10000) / 100}
			</div>
			<div>
				3PT: {three_made}/{three_shot}
			</div>
			<div>3PT%: {Math.round((three_made / three_shot) * 10000) / 100}</div>
			<div>AST: {assist}</div>
			<div>TRB: {offensive_rebound + defensive_rebound}</div>
			<div>ORB: {offensive_rebound}</div>
			<div>DRB: {defensive_rebound}</div>
			<div>STL: {steal}</div>
			<div>BLK: {block}</div>
			<div>TO: {turnover}</div>
			<GameRadar
				fieldGoalsAttempted={fieldGoalsAttempted}
				fieldGoalsMade={fieldGoalsMade}
				stats={props.stats}
			/>
		</div>
	);
};

export default EachGameDisplay;
