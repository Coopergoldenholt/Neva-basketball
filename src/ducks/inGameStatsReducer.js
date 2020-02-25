import axios from "axios";
import {
	UPDATE_IN_GAME_STATS,
	TRACK_LAST_CLICKED_STAT,
	END_GAME,
	START_GAME
} from "./actionTypes";

const initialState = {
	inGameStats: {
		opponent: "",
		layupShot: 0,
		layupMade: 0,
		closeRangeShot: 0,
		closeRangeMade: 0,
		freeThrowShot: 0,
		freeThrowMade: 0,
		midRangeShot: 0,
		midRangeMade: 0,
		threeShot: 0,
		threeMade: 0,
		offensiveRebound: 0,
		defensiveRebound: 0,
		steal: 0,
		assist: 0,
		block: 0,
		turnover: 0
	},
	lastClickedStat: ""
};

export const startGame = () => {
	return {
		type: START_GAME,
		payload: axios.post("/api/user/game").then(res => {
			return res.data;
		})
	};
};

export const updateInGameStats = (type, stat) => {
	return {
		type: UPDATE_IN_GAME_STATS,
		payload: axios
			.put(`/api/user/game`, { type: type, stat: stat })
			.then(res => {
				return res.data;
			})
	};
};

export const trackLastClickedStat = type => {
	return {
		type: TRACK_LAST_CLICKED_STAT,
		payload: type
	};
};

export const endGame = inGameStats => {
	return {
		type: END_GAME,
		payload: inGameStats
	};
};

export default function(state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case END_GAME:
			return { ...state, inGameStats: payload };

		case `${UPDATE_IN_GAME_STATS}_FULFILLED`:
			return { ...state, inGameStats: payload };
		case `${START_GAME}_FULFILLED`:
			return { ...state, inGameStats: payload };
		case TRACK_LAST_CLICKED_STAT:
			return { ...state, lastClickedStat: payload };
		default:
			return state;
	}
}
