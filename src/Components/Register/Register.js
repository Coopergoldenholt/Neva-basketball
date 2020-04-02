import React, { useEffect, useState } from "react";
import { TextField } from "@material-ui/core";
import axios from "axios";
import { withRouter } from "react-router-dom";

const Register = props => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
	const [emailCheck, runEmailCheck] = useState(false);
	const [passwordCheck, runPasswordCheck] = useState(false);
	const [confirmPassword, runConfirmPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
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
		if (password !== confirmPassword) {
			runPasswordCheck(false);
		}
	}, [password]);
	const passwordNotConfirmed = () => {
		return (
			<TextField
				onChange={e => runConfirmPassword(e.target.value)}
				label="Confirm"
				id="outlined-size-small"
				variant="outlined"
				size="small"
				error
				helperText="Passwords Do Not Match"
			/>
		);
	};

	useEffect(() => {
		if (email.includes("@")) {
			runEmailCheck(true);
		}
	}, [email]);

	const handleSubmit = () => {
		const name = `${firstName} ${lastName}`;
		axios
			.post("/api/register", {
				email: email,
				password: password,
				name: name,
				subscription: "none"
			})
			.then(res => {
				alert("Thank You For Signing Up!");
				props.history.push("/subscribe");
			})
			.catch(err => alert("Email In Use"));
	};
	return (
		<div>
			<div>
				<TextField
					onChange={e => setFirstName(e.target.value)}
					label="First Name"
					id="outlined-size-small"
					variant="outlined"
					size="small"
				/>
				<TextField
					onChange={e => setLastName(e.target.value)}
					label="Last Name"
					id="outlined-size-small"
					variant="outlined"
					size="small"
				/>
			</div>
			<div>
				<TextField
					onChange={e => setEmail(e.target.value)}
					label="Email"
					style={{ width: "75%" }}
					variant="outlined"
					size="small"
				/>
			</div>
			<div>
				<TextField
					onChange={e => setPassword(e.target.value)}
					label="Password"
					variant="outlined"
					size="small"
					type="password"
				/>
				{password === confirmPassword ? (
					<TextField
						onChange={e => runConfirmPassword(e.target.value)}
						label="Confirm"
						id="outlined-size-small"
						variant="outlined"
						size="small"
					/>
				) : (
					passwordNotConfirmed()
				)}
			</div>
			<div>
				<button onClick={() => handleSubmit()}>Submit</button>
			</div>
		</div>
	);
};

export default withRouter(Register);
