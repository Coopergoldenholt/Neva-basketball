import axios from "axios";
import {
	START_FACEBOOK_SESSION,
	GET_USER_SESSION,
	START_GOOGLE_SESSION,
	START_LOCAL_SESSION
} from "./actionTypes";

const initialState = {
	user: {
		loggedIn: false,
		email: "",
		subscription: ""
	}
};

export const getUserSession = () => {
	return {
		type: GET_USER_SESSION,
		payload: axios.get("/api/user").then(res => res.data)
	};
};

export const startLocalSession = (email, password) => {
	return {
		type: START_LOCAL_SESSION,
		payload: axios
			.post("/api/login/local", { email, password })
			.then(res => res.data)
	};
};
export const startFacebookSession = session => {
	return {
		type: START_FACEBOOK_SESSION,
		payload: axios
			.post("/api/login/facebook", { session })
			.then(res => res.data)
	};
};
export const startGoogleSession = session => {
	return {
		type: START_GOOGLE_SESSION,
		payload: axios.post("/api/login/google", { session }).then(res => res.data)
	};
};

export default function(state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case `${GET_USER_SESSION}_FULFILLED`:
			return { ...state, user: payload };
		case `${START_FACEBOOK_SESSION}_FULFILLED`:
			return { ...state, user: payload };
		case `${START_GOOGLE_SESSION}_FULFILLED`:
			return { ...state, user: payload };
		case `${START_LOCAL_SESSION}_FULFILLED`:
			return { ...state, user: payload };
		case `${START_LOCAL_SESSION}_REJECTED`:
			return { ...state, user: payload };
		default:
			return state;
	}
}
