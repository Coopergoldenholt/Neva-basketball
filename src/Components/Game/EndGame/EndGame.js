import React from "react";
import axios from "axios";
import { endGame } from "../../../ducks/inGameStatsReducer";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const Endgame = props => {
	const handleEndGameClick = () => {
		axios.delete("/api/user/game").then(() => {});
		props.history.push("/home");
	};
	return (
		<div>
			<button onClick={() => handleEndGameClick()}>End Game</button>
		</div>
	);
};

export default connect(null, { endGame })(withRouter(Endgame));
