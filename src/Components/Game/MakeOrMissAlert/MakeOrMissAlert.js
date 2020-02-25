import React from "react";
import { connect } from "react-redux";
import {
	updateInGameStats,
	trackLastClickedStat
} from "../../../ducks/inGameStatsReducer";
import "./MakeOrMissAlert.css";

const MakeOrMissAlert = props => {
	const { lastClickedStat, updateInGameStats, trackLastClickedStat } = props;
	const handleMake = (type, amount) => {
		updateInGameStats(type, amount);
		trackLastClickedStat("");
	};
	const handleMiss = () => {
		trackLastClickedStat("");
	};

	return (
		<div className="make-or-miss-alert">
			<button
				className="make-or-miss-alert-button"
				onClick={() => handleMake(lastClickedStat, 1)}
			>
				Make
			</button>
			<button
				className="make-or-miss-alert-button"
				onClick={() => handleMiss()}
			>
				Miss
			</button>
		</div>
	);
};

const mapStateToProps = state => {
	return state;
	// return lastClickedStat;
};

export default connect(mapStateToProps, {
	updateInGameStats,
	trackLastClickedStat
})(MakeOrMissAlert);
