import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { startFacebookSession } from "../../ducks/userReducer";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
const { REACT_APP_FACEBOOK_KEY } = process.env;

const Login = props => {
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
	const [emailCheck, runEmailCheck] = useState(false);
	const [passwordCheck, runPasswordCheck] = useState(false);
	console.log(props);
	useEffect(() => {
		if (
			(password.length > 7 && password.includes("A")) ||
			password.includes("B") ||
			password.includes("C") ||
			password.includes("D") ||
			password.includes("E") ||
			password.includes("F") ||
			password.includes("G") ||
			password.includes("H") ||
			password.includes("I") ||
			password.includes("J") ||
			password.includes("K") ||
			password.includes("L") ||
			password.includes("M") ||
			password.includes("N") ||
			password.includes("O") ||
			password.includes("P") ||
			password.includes("Q") ||
			password.includes("R") ||
			password.includes("S") ||
			password.includes("T") ||
			password.includes("U") ||
			password.includes("V") ||
			password.includes("X") ||
			password.includes("Y") ||
			password.includes("Z")
		) {
			if (
				password.includes(" ") ||
				password.includes("!") ||
				password.includes('"') ||
				password.includes("#") ||
				password.includes("$") ||
				password.includes("%") ||
				password.includes("&") ||
				password.includes(`'`) ||
				password.includes("(") ||
				password.includes(")") ||
				password.includes("*") ||
				password.includes("+") ||
				password.includes(",") ||
				password.includes(".") ||
				password.includes("/") ||
				password.includes(":") ||
				password.includes(";") ||
				password.includes("<") ||
				password.includes("=") ||
				password.includes(">") ||
				password.includes("?") ||
				password.includes("@") ||
				password.includes("[") ||
				password.includes("]") ||
				password.includes("^") ||
				password.includes("_") ||
				password.includes("`") ||
				password.includes("{") ||
				password.includes("|") ||
				password.includes("}") ||
				password.includes("~")
			) {
				runPasswordCheck(true);
			}
		}
		if (password.length > 15) {
			runPasswordCheck(false);
		}
		if (password.length <= 7) {
			runPasswordCheck(false);
		}
	}, [password]);

	useEffect(() => {
		if (email.includes("@")) {
			runEmailCheck(true);
		}
	}, [email]);

	const responseFacebook = response => {
		console.log(response);
		props.startFacebookSession(response);
		// .then(() => props.history.push('/home'))
	};

	const responseGoogle = response => {
		console.log(response);
	};
	console.log(password, email);
	return (
		<div className="App">
			<h1>LOGIN WITH FACEBOOK AND GOOGLE</h1>

			<FacebookLogin
				appId={REACT_APP_FACEBOOK_KEY}
				fields="name,email,picture"
				callback={responseFacebook}
			/>
			<input onChange={e => setEmail(e.target.value)} />
			<input type="password" onChange={e => setPassword(e.target.value)} />

			{/* <GoogleLogin
				clientId="" //CLIENTID NOT CREATED YET
				buttonText="LOGIN WITH GOOGLE"
				onSuccess={responseGoogle}
				onFailure={responseGoogle}
			/> */}
		</div>
	);
};

const mapStateToProps = state => {
	return state;
};

export default connect(mapStateToProps, { startFacebookSession })(
	withRouter(Login)
);
