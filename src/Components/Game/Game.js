import React, { useEffect } from "react";
import Court from "./Court/Court";
import InGameStats from "./InGameStats/InGameStats";
import { connect } from "react-redux";
import {
	updateInGameStats,
	trackLastClickedStat
} from "../../ducks/inGameStatsReducer";
import MakeOrMissAlert from "./MakeOrMissAlert/MakeOrMissAlert";
import EndGame from "./EndGame/EndGame";
import OtherStatButtons from "./OtherStatButtons/OtherStatButtons";

const Game = props => {
	const { updateInGameStats, lastClickedStat, trackLastClickedStat } = props;
	useEffect(() => {
		updateInGameStats();
		return () => {
			trackLastClickedStat("");
		};
	}, []);

	return (
		<div>
			<Court />
			<OtherStatButtons />
			<InGameStats />
			{lastClickedStat ? <MakeOrMissAlert /> : null}
			<EndGame />
		</div>
	);
};

const mapStateToProps = state => {
	return state;
};

export default connect(mapStateToProps, {
	updateInGameStats,
	trackLastClickedStat
})(Game);
