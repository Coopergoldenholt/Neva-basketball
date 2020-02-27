import React from "react";
import axios from "axios";
import { endGame } from "../../../ducks/inGameStatsReducer";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const Endgame = props => {
	const currentDate = `${new Date().getFullYear()}-${new Date().getMonth() +
		1}-${new Date().getDate()} ${new Date().getHours()}:${new Date().getMinutes()}`;
	const handleEndGameClick = () => {
		axios
			.post("/api/user/game/stats", {
				userId: props.user.id,
				date: currentDate
			})
			.then(() => {});
		props.history.push("/home");
	};
	return (
		<div>
			<button onClick={() => handleEndGameClick()}>End Game</button>
		</div>
	);
};

const mapStateToProps = state => {
	const { user } = state;
	return user;
};

export default connect(mapStateToProps, { endGame })(withRouter(Endgame));
