import axios from "axios";
import { START_FACEBOOK_SESSION } from "./actionTypes";

const initialState = {
	user: {
		loggedIn: "",
		email: "",
		subscription: ""
	}
};

export const startFacebookSession = session => {
	return {
		type: START_FACEBOOK_SESSION,
		payload: axios
			.post("/api/login/facebook", { session })
			.then(res => res.data)
	};
};

export default function(state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case `${START_FACEBOOK_SESSION}_FULFILLED`:
			return { ...state, user: payload };
		default:
			return state;
	}
}
