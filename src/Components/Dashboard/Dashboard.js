import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { startGame } from "../../ducks/inGameStatsReducer";
import { getUserSession } from "../../ducks/userReducer";
import StartGamePopup from "./StartGamePopup";
import StatDisplay from "./StatDisplay/StatDisplay";

const Dashboard = props => {
	const [showStartGamePopup, setShowStartGamePopup] = useState(false);
	useEffect(() => {
		handleGetSession();
	}, []);
	const currentDate = `${new Date().getFullYear()}-${new Date().getMonth() +
		1}-${new Date().getDate()}`;

	const handleGetSession = () => {
		axios
			.get("/api/user")
			.then(res => {
				if (res.data.subscription === "none") {
					alert("You Are Not Subscribed");
					props.history.push("/");
				}
			})
			.catch(err => {
				alert("Please Login");
				props.history.push("/login");
			});
		props.getUserSession();
	};

	return (
		<div>
			{showStartGamePopup ? <StartGamePopup /> : null}
			<button onClick={() => setShowStartGamePopup(true)}>Start A Game</button>
			{props.user.id ? <StatDisplay /> : null}
		</div>
	);
};

const mapStateToProps = state => {
	const { user } = state;
	return user;
};

export default connect(mapStateToProps, { startGame, getUserSession })(
	withRouter(Dashboard)
);
