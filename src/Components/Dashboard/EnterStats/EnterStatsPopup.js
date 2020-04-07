import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import "./EnterStats.css";
import { saveNonSubscriptionStats } from "../../../ducks/statReducer";
import ClearRoundedIcon from "@material-ui/icons/ClearRounded";

const EnterStatsPopup = props => {
	const [opponent, updateOpponent] = useState("");
	const [fieldGoalShot, updateFGA] = useState(0);
	const [fieldGoalMade, updateFGM] = useState(0);
	const [freeThrowShot, updateFTA] = useState(0);
	const [freeThrowMade, updateFTM] = useState(0);
	const [threeShot, update3PA] = useState(0);
	const [threeMade, update3PM] = useState(0);
	const [offensiveRebound, updateOR] = useState(0);
	const [defensiveRebound, updateDR] = useState(0);
	const [steal, updateSteal] = useState(0);
	const [assist, updateAssist] = useState(0);
	const [block, updateBlock] = useState(0);
	const [turnover, updateTurnover] = useState(0);

	const handleGameSave = () => {
		const date = `${new Date().getFullYear()}-${new Date().getMonth() +
			1}-${new Date().getDate()} ${new Date().getHours() +
			1}:${new Date().getMinutes()}`;
		saveNonSubscriptionStats(
			opponent,
			date,
			fieldGoalShot,
			fieldGoalMade,
			freeThrowShot,
			freeThrowMade,
			threeShot,
			threeMade,
			offensiveRebound,
			defensiveRebound,
			steal,
			assist,
			block,
			turnover
		);
		props.handleDisplayStats(false);
	};

	return (
		<>
			<div className="enter-stats-popup">
				<ClearRoundedIcon
					style={{
						position: "fixed",
						// top: "10px",
						// left: "220px",
						marginLeft: "220px",
						marginTop: "10px",
						color: "#949494",
						zIndex: 10
					}}
					onClick={() => props.handleDisplayStats(false)}
				/>
				<TextField
					required={true}
					id="standard-required"
					label="Opponent"
					onChange={e => updateOpponent(e.target.value)}
				/>
				<TextField
					id="standard-number"
					label="Field Goals Attempted"
					type="number"
					onChange={e => updateFGA(e.target.value)}
				/>
				<TextField
					id="standard-number"
					label="Field Goals Made"
					type="number"
					onChange={e => updateFGM(e.target.value)}
				/>
				<TextField
					id="standard-number"
					label="Free-Throws Attempted"
					type="number"
					onChange={e => updateFTA(e.target.value)}
				/>
				<TextField
					id="standard-number"
					label="Free-Throws Made"
					type="number"
					onChange={e => updateFTM(e.target.value)}
				/>
				<TextField
					id="standard-number"
					label="3 Field Goals Attempted"
					type="number"
					onChange={e => update3PA(e.target.value)}
				/>
				<TextField
					id="standard-number"
					label="3 Field Goals Made"
					type="number"
					onChange={e => update3PM(e.target.value)}
				/>
				<TextField
					id="standard-number"
					label="Offensive Rebounds"
					type="number"
					onChange={e => updateOR(e.target.value)}
				/>
				<TextField
					id="standard-number"
					label="Defensive Rebounds"
					type="number"
					onChange={e => updateDR(e.target.value)}
				/>
				<TextField
					id="standard-number"
					label="Assists"
					type="number"
					onChange={e => updateAssist(e.target.value)}
				/>
				<TextField
					id="standard-number"
					label="Steals"
					type="number"
					onChange={e => updateSteal(e.target.value)}
				/>
				<TextField
					id="standard-number"
					label="Blocks"
					type="number"
					onChange={e => updateBlock(e.target.value)}
				/>
				<TextField
					id="standard-number"
					label="Turnovers"
					type="number"
					onChange={e => updateTurnover(e.target.value)}
				/>
				<Button
					style={{
						background: "#011B56",
						color: "white",
						marginTop: "15px",
						marginBottom: "15px"
					}}
					onClick={() => handleGameSave()}
				>
					Save Game
				</Button>
			</div>
		</>
	);
};

export default connect(null, { saveNonSubscriptionStats })(EnterStatsPopup);
