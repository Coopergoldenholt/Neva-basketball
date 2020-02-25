import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { startGame } from "../../ducks/inGameStatsReducer";

const Dashboard = props => {
	const handleGameStart = () => {
		axios.post("/api/user").then(res => props.startGame());

		props.history.push("/game");
	};
	return (
		<div>
			Dashboard
			<button onClick={() => handleGameStart()}>Start A Game</button>
		</div>
	);
};

export default connect(null, { startGame })(withRouter(Dashboard));
