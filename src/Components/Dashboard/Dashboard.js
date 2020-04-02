import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { startGame } from "../../ducks/inGameStatsReducer";
import { getUserSession } from "../../ducks/userReducer";
import StartGamePopup from "./StartGamePopup";
import EnterStats from "./EnterStats/EnterStats";
import StatDisplay from "./StatDisplay/StatDisplay";
import AveragesDisplay from "./AveragesDisplay/AveragesDisplay";
import AveragesDisplayPlayerNoSubscription from "./AveragesDisplay/AveragesDisplayPlayerNoSubscription";
import AveragesLineGraph from "./AveragesLineGraph/AveragesLineGraph";
import PercentageLingGraph from "./PercentagesLineGraph/PercentagesLineGraph";
import getAverageStats from "../../ducks/statReducer";
import ShotDistrbuttionChart from "./ShotDistributionChart/ShotDistributionChart";

const Dashboard = props => {
	const [showStartGamePopup, setShowStartGamePopup] = useState(false);
	useEffect(() => {
		handleGetSession();
		if (props.user.id) {
		}
	}, []);
	// const currentDate = `${new Date().getFullYear()}-${new Date().getMonth() +
	// 	1}-${new Date().getDate()}`;
	// console.log(props.stats);

	const handleGetSession = () => {
		axios.get("/api/user").catch(err => {
			alert("Please Login");
			props.history.push("/login");
		});
		props.getUserSession();
	};
	// if (props.user.id) {
	// 	props.getAverageStats(props.user.id);
	// }
	const getSubscription = () => {
		return props.user.subscription;
	};
	const display = () => {
		switch (getSubscription()) {
			case 6:
				return <div>case 1</div>;

			case "none":
				return (
					<div>
						<EnterStats />
						<AveragesDisplayPlayerNoSubscription />
					</div>
				);

			default:
				return (
					<div>
						{showStartGamePopup ? <StartGamePopup /> : null}
						<button onClick={() => setShowStartGamePopup(true)}>
							Start A Game
						</button>
						<AveragesDisplay />
						<AveragesLineGraph />
						<PercentageLingGraph />
						<ShotDistrbuttionChart />
						{props.user.id ? <StatDisplay /> : null}
					</div>
				);
		}
	};

	return <>{display()}</>;
};

const mapStateToProps = state => {
	const { user } = state;
	return user;
};

export default connect(mapStateToProps, {
	startGame,
	getUserSession,
	getAverageStats
})(withRouter(Dashboard));
