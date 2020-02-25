import React from "react";
import { Switch, Route } from "react-router-dom";
import DashBoard from "./Components/Dashboard/Dashboard";
import Game from "./Components/Game/Game";
import Login from "./Components/Login/Login";

export default (
	<Switch>
		<Route path="/game" component={Game} />
		<Route path="/home" component={DashBoard} />
		<Route path="/Login" component={Login} />
	</Switch>
);
