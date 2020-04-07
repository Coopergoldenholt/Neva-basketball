import axios from "axios";
import {
	GET_GAMES,
	GET_AVERAGE_STATS,
	SAVE_NON_SUBSCRIPTION_STATS
} from "./actionTypes";

const initialState = {
	games: [],
	averageStats: {}
};

export const getGames = userId => {
	return {
		type: GET_GAMES,
		payload: axios.get(`/api/user/stats/${userId}`).then(res => res.data)
	};
};
export const getAverageStats = userId => {
	return {
		type: GET_AVERAGE_STATS,
		payload: axios
			.get(`/api/user/stats/averages/${userId}`)
			.then(res => res.data)
	};
};

export const saveNonSubscriptionStats = (
	opponent,
	date,
	fieldGoalShot,
	fieldGoalMade,
	freeThrowShot,
	freeThrowMade,
	threeShot,
	threeMade,
	offensiveRebound,
	defensiveRebound,
	steal,
	assist,
	block,
	turnover
) => {
	return {
		type: SAVE_NON_SUBSCRIPTION_STATS,
		payload: axios.post("/api/user/game/basic", {
			opponent,
			date,
			fieldGoalShot,
			fieldGoalMade,
			freeThrowShot,
			freeThrowMade,
			threeShot,
			threeMade,
			offensiveRebound,
			defensiveRebound,
			steal,
			assist,
			block,
			turnover
		})
	};
};

export default function(state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case `${GET_GAMES}_FULFILLED`:
			return { ...state, games: payload };
		case `${GET_AVERAGE_STATS}_FULFILLED`:
			return { ...state, averageStats: payload };
		case `${SAVE_NON_SUBSCRIPTION_STATS}_FULFILLED`:
			return { ...state };
		default:
			return state;
	}
}
