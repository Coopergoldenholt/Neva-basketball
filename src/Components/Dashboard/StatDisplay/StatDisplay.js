import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getGames, getAverageStats } from "../../../ducks/statReducer";
import EachGameDisplay from "./EachGameDisplay/EachGameDisplay";
import EachGameDisplayNoSubscription from "./EachGameDisplay/EachGameDisplayNoSubscription";

const StatDisplay = props => {
	useEffect(() => {
		props.getGames(props.user.user.id);
		props.getAverageStats(props.user.user.id);
	}, [props.inGameStats]);

	const eachGame = props.stats.games.map(ele => {
		return props.user.user.subscription === "none" ? (
			<EachGameDisplayNoSubscription stats={ele} />
		) : (
			<EachGameDisplay stats={ele} />
		);
	});

	return <>{props.stats.games.length > 0 ? <div>{eachGame}</div> : null}</>;
};

const mapStateToProps = state => {
	return state;
};

export default connect(mapStateToProps, { getGames, getAverageStats })(
	StatDisplay
);
