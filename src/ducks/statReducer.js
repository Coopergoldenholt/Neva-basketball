import axios from "axios";
import { GET_GAMES } from "./actionTypes";

const initialState = {
	games: []
};

export const getGames = userId => {
	return {
		type: GET_GAMES,
		payload: axios.get(`/api/user/stats/${userId}`).then(res => res.data)
	};
};

export default function(state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case `${GET_GAMES}_FULFILLED`:
			return { ...state, games: payload };
		default:
			return state;
	}
}
