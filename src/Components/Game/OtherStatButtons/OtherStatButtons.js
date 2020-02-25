import React from "react";
import { connect } from "react-redux";
import { updateInGameStats } from "../../../ducks/inGameStatsReducer";

const OtherStatButtons = props => {
	const handleUpdateInStats = (type, amount) => {
		props.updateInGameStats(type, amount);
	};
	return (
		<div>
			<button onClick={() => handleUpdateInStats("offensiveRebound", 1)}>
				Offensive Rebound
			</button>
			<button onClick={() => handleUpdateInStats("defensiveRebound", 1)}>
				Defensive Rebound
			</button>
			<button onClick={() => handleUpdateInStats("steal", 1)}>Steal</button>
			<button onClick={() => handleUpdateInStats("assist", 1)}>Assist</button>
			<button onClick={() => handleUpdateInStats("block", 1)}>Block</button>
			<button onClick={() => handleUpdateInStats("turnover", 1)}>
				Turnover
			</button>
		</div>
	);
};

export default connect(null, { updateInGameStats })(OtherStatButtons);
