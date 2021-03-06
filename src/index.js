import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { HashRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./ducks/store";
import { StripeProvider } from "react-stripe-elements";
const { REACT_APP_STRIPE_PROVIDER_KEY } = process.env;

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<StripeProvider apiKey={`${REACT_APP_STRIPE_PROVIDER_KEY}`}>
				<App />
			</StripeProvider>
		</Router>
	</Provider>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
