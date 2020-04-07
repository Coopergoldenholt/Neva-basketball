import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import {
	Paper,
	Button,
	Drawer,
	Hidden,
	makeStyles,
	IconButton,
	List,
	ListItem,
	ListItemIcon,
	ListItemText
} from "@material-ui/core";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import LockRoundedIcon from "@material-ui/icons/LockRounded";
import HelpIcon from "@material-ui/icons/Help";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import SubscriptionsRoundedIcon from "@material-ui/icons/SubscriptionsRounded";
import PersonAddRoundedIcon from "@material-ui/icons/PersonAddRounded";
import EqualizerRoundedIcon from "@material-ui/icons/EqualizerRounded";

import "./Nav.css";
import { connect } from "react-redux";

const Nav = props => {
	const [drawerState, setDrawerState] = useState({ right: false });

	const useStyles = makeStyles({
		paper: {
			height: "6vh",
			display: "flex",
			justifyContent: "space-between",
			alignItems: "center",
			fontFamily: "Muli, sans-serif",
			position: "sticky",
			top: "0",
			zIndex: "1000",
			paddingLeft: 10,
			background: "red"
		},
		list: {
			width: 250
		}
	});
	const classes = useStyles();

	const toggleDrawer = (side, open) => event => {
		if (
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}

		setDrawerState({ ...drawerState, [side]: open });
	};
	console.log(props.user);

	const sideList = side =>
		props.user.loggedIn ? (
			<div
				className={classes.list}
				role="presentation"
				onClick={toggleDrawer(side, false)}
				onKeyDown={toggleDrawer(side, false)}
			>
				<List>
					<ListItem
						button
						key={"stats"}
						onClick={() => props.history.push(`/home`)}
					>
						<ListItemIcon>
							<EqualizerRoundedIcon />
						</ListItemIcon>
						<ListItemText primary={"Stats"} />
					</ListItem>

					<ListItem
						button
						key={"subscribe"}
						onClick={() => props.history.push(`/subscribe`)}
					>
						<ListItemIcon>
							<SubscriptionsRoundedIcon />
						</ListItemIcon>
						<ListItemText primary={"Subscribe"} />
					</ListItem>
					<ListItem
						button
						key={"contactUs"}
						onClick={() => props.history.push(`/contactus`)}
					>
						<ListItemIcon>
							<HelpIcon />
						</ListItemIcon>
						<ListItemText primary={"Contact Us"} />
					</ListItem>
				</List>
			</div>
		) : (
			<div
				className={classes.list}
				role="presentation"
				onClick={toggleDrawer(side, false)}
				onKeyDown={toggleDrawer(side, false)}
			>
				<List>
					<ListItem button key={"home"} onClick={() => props.history.push(`/`)}>
						<ListItemIcon>
							<HomeRoundedIcon />
						</ListItemIcon>
						<ListItemText primary={"Home"} />
					</ListItem>
					<ListItem
						button
						key={"login"}
						onClick={() => props.history.push(`/login`)}
					>
						<ListItemIcon>
							<LockRoundedIcon />
						</ListItemIcon>
						<ListItemText primary={"Login"} />
					</ListItem>
					<ListItem
						button
						key={"signUp"}
						onClick={() => props.history.push(`/signup`)}
					>
						<ListItemIcon>
							<PersonAddRoundedIcon />
						</ListItemIcon>
						<ListItemText primary={"Sign Up"} />
					</ListItem>

					<ListItem
						button
						key={"contactUs"}
						onClick={() => props.history.push(`/contactus`)}
					>
						<ListItemIcon>
							<HelpIcon />
						</ListItemIcon>
						<ListItemText primary={"Contact Us"} />
					</ListItem>
				</List>
			</div>
		);

	return (
		<>
			<Paper
				className={classes.paper}
				id="header-paper"
				elevation="5"
				style={{ background: "#011B56" }}
			>
				<div
					className="logo-space"
					button
					onClick={() => props.history.push("/")}
				>
					{" "}
				</div>

				<div
					style={{
						"justify-content": "flex-end",
						"margin-right": "10px",
						color: "white"
					}}
				>
					<Hidden xsDown>
						<Button id="explore" onClick={() => props.history.push(`/explore`)}>
							<Link style={{ color: "white" }}>Login</Link>
						</Button>
						<Button>
							<Link
								id="quiz"
								onClick={() => props.history.push(`/quiz`)}
								style={{ color: "white" }}
							>
								About
							</Link>
						</Button>
						<Button>
							<Link
								id="quiz"
								onClick={() => props.history.push(`/quiz`)}
								style={{ color: "white" }}
							>
								Contact Us
							</Link>
						</Button>
						<Button>
							<Link
								id="quiz"
								onClick={() => props.history.push(`/quiz`)}
								style={{ color: "white" }}
							>
								Sign Up
							</Link>
						</Button>
					</Hidden>
				</div>

				<div className="hidden-small" style={{ "margin-right": "10px" }}>
					<IconButton onClick={toggleDrawer("right", true)}>
						<MenuRoundedIcon style={{ color: "white" }} />
					</IconButton>
				</div>
			</Paper>
			<div>
				<Drawer
					anchor="right"
					open={drawerState.right}
					onClose={toggleDrawer("right", false)}
				>
					{sideList("right")}
				</Drawer>
			</div>
		</>
	);
};

const mapStateToProps = state => {
	const { user } = state;
	return user;
};

export default connect(mapStateToProps)(withRouter(Nav));
