import React from "react";
// import Button from '@material-ui/core/Button';
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

const Alert = props => {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
};

// const useStyles = makeStyles(theme => ({
// 	root: {
// 		width: "100%",
// 		"& > * + *": {

// 		}
// 	}
// }));

export default function CustomizedSnackbars(props) {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			{/* <Button variant="outlined" onClick={handleClick}>
        Open success snackbar
      </Button> */}
			<Snackbar
				open={props.open}
				autoHideDuration={6000}
				onClose={props.handleFn}
				anchorOrigin={{ vertical: "top", horizontal: "center" }}
			>
				<Alert onClose={props.handleFn} severity="error">
					Please input valid city
				</Alert>
			</Snackbar>
		</div>
	);
}
