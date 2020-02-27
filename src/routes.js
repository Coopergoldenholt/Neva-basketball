import React from "react";
import { Switch, Route } from "react-router-dom";
import DashBoard from "./Components/Dashboard/Dashboard";
import Game from "./Components/Game/Game";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import StartGamePopup from "./Components/Dashboard/StartGamePopup";

export default (
	<Switch>
		<Route path="/game" component={Game} />
		<Route path="/home" component={DashBoard} />
		<Route path="/Login" component={Login} />
		<Route path="/Register" component={Register} />
		<Route path="/popup" component={StartGamePopup} />
	</Switch>
);
