import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
	startFacebookSession,
	startGoogleSession,
	startLocalSession
} from "../../ducks/userReducer";
import { TextField, Button, InputAdornment } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import "./Login.css";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import FacebookIcon from "@material-ui/icons/Facebook";
const { REACT_APP_FACEBOOK_KEY, REACT_APP_OAUTH_KEY } = process.env;

const Login = props => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [displayAlert, setDisplayAlert] = useState(false);
	const responseFacebook = response => {
		console.log(response);
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

				setDisplayAlert(true);
			});
	};

	return (
		<div className="login">
			<div className="login-container">
				<FacebookLogin
					appId={REACT_APP_FACEBOOK_KEY}
					fields="name,email,picture"
					callback={responseFacebook}
					cssClass="loginBtn loginBtn--facebook"
					// icon={<FacebookIcon />}
				/>
				<GoogleLogin
					clientId={REACT_APP_OAUTH_KEY}
					fields="name,email,picture"
					buttonText="LOGIN WITH GOOGLE"
					onSuccess={responseGoogle}
					className="loginBtn loginBtn--google"
				/>
				<div>
					{displayAlert ? (
						<MuiAlert
							style={{ width: "250px", margin: "10px" }}
							severity="error"
							elevation={6}
							variant="filled"
							autoHideDuration={6000}
						>
							Username or Password Incorrect
						</MuiAlert>
					) : null}
					<TextField
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<AccountCircleRoundedIcon />
								</InputAdornment>
							)
						}}
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

					<Button
						onClick={() => handleLogin()}
						style={{ background: "#011B56", color: "white" }}
					>
						Login!
					</Button>
				</div>
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
