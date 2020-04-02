import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
	startFacebookSession,
	startGoogleSession,
	startLocalSession
} from "../../ducks/userReducer";
import { TextField } from "@material-ui/core";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
const { REACT_APP_FACEBOOK_KEY, REACT_APP_OAUTH_KEY } = process.env;

const Login = props => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const responseFacebook = response => {
		props
			.startFacebookSession(response)
			.then(() => props.history.push("/home"));
	};

	const responseGoogle = response => {
		props.startGoogleSession(response).then(() => props.history.push("/home"));
	};
	const handleLogin = async () => {
		props
			.startLocalSession(email, password)
			.then(() => {
				props.history.push("/home");
			})
			.catch(() => {
				setPassword("");
				return alert("Username or Password Incorrect");
			});
	};

	return (
		<div className="App">
			<h1>LOGIN WITH FACEBOOK AND GOOGLE</h1>

			<FacebookLogin
				appId={REACT_APP_FACEBOOK_KEY}
				fields="name,email,picture"
				callback={responseFacebook}
			/>
			<GoogleLogin
				clientId={REACT_APP_OAUTH_KEY}
				fields="name,email,picture"
				buttonText="LOGIN WITH GOOGLE"
				onSuccess={responseGoogle}
			/>
			<div>
				<TextField
					label="Email"
					variant="outlined"
					size="small"
					onChange={e => setEmail(e.target.value)}
				/>

				<TextField
					label="Password"
					id="outlined-size-small"
					variant="outlined"
					size="small"
					onChange={e => setPassword(e.target.value)}
					type="password"
				/>
				<button onClick={() => handleLogin()}>Login!</button>
			</div>
		</div>
	);
};

const mapStateToProps = state => {
	return state;
};

export default connect(mapStateToProps, {
	startFacebookSession,
	startGoogleSession,
	startLocalSession
})(withRouter(Login));
