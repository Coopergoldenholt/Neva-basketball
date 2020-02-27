import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { updateInGameStats } from "../../ducks/inGameStatsReducer";
import { startGame } from "../../ducks/inGameStatsReducer";
import axios from "axios";

const StartGamePopup = props => {
	const [opponent, setOpponent] = useState("");

	const handleGameStart = () => {
		axios.post("/api/user/game").then(res => {
			props.startGame().then(() => {
				props.updateInGameStats("opponent", opponent);
			});
		});
		props.history.push("/game");
	};
	return (
		<div>
			Opponent: <input onChange={e => setOpponent(e.target.value)} />
			<button onClick={() => handleGameStart()}>Start Game</button>
		</div>
	);
};

const mapStateToProps = state => {
	const { inGameStats } = state;
	return inGameStats;
};

export default connect(mapStateToProps, { updateInGameStats, startGame })(
	withRouter(StartGamePopup)
);
