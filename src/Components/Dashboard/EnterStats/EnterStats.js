import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import EnterStatsPopup from "./EnterStatsPopup";
import "./EnterStats.css";

const EnterStats = () => {
	const [displayStats, handleDisplayStats] = useState(false);

	return (
		<>
			<Button
				onClick={() => handleDisplayStats(!displayStats)}
				style={{ background: "#011B56", color: "white" }}
			>
				Enter a Game
			</Button>
			{displayStats ? (
				<EnterStatsPopup handleDisplayStats={handleDisplayStats} />
			) : null}
		</>
	);
};
export default EnterStats;
