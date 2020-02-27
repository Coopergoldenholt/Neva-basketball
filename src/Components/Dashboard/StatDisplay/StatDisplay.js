import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getGames } from "../../../ducks/statReducer";
import EachGameDisplay from "./EachGameDisplay/EachGameDisplay";

const StatDisplay = props => {
	useEffect(() => {
		props.getGames(props.user.user.id);
	}, [props.inGameStats]);

	const eachGame = props.stats.games.map(ele => {
		return <EachGameDisplay stats={ele} />;
	});

	return <div>{eachGame}</div>;
};

const mapStateToProps = state => {
	return state;
};

export default connect(mapStateToProps, { getGames })(StatDisplay);
