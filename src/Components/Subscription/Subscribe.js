import React, { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { CardElement, injectStripe } from "react-stripe-elements";

const Subscribe = props => {
	const { email, name } = props.user.user;
	const [isLoading, switchIsLoading] = useState(false);

	const handleSubmit = async () => {
		let token = await props.stripe.createToken({ name: "name" });
		switchIsLoading(true);
		let response = await axios.post("/api/stripe", {
			token: token,
			name: name,
			email: email
		});

		if ((response.data = "Subscription Started")) {
			props.history.push("/home");
		}
	};

	return (
		<>
			{isLoading ? (
				"Loading"
			) : (
				<div>
					<div style={{ width: "60vw" }}>
						<CardElement />
					</div>
					<button onClick={() => handleSubmit()}>Subscribe!</button>
				</div>
			)}
		</>
	);
};

const mapStateToProps = state => state;

export default injectStripe(connect(mapStateToProps)(withRouter(Subscribe)));
