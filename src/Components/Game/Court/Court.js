import React from "react";
import { connect } from "react-redux";
import {
	updateInGameStats,
	trackLastClickedStat
} from "../../../ducks/inGameStatsReducer";

const Court = props => {
	const { updateInGameStats, trackLastClickedStat } = props;

	const handleClick = (typeOne, amount, typeTwo) => {
		updateInGameStats(typeOne, amount);
		trackLastClickedStat(typeTwo);
	};

	return (
		<div>
			<div className="half-court">
				<svg width="700" height="500">
					{/* <!-- whole court rectangle --> */}
					<rect
						onClick={() => handleClick("threeShot", 1, "threeMade")}
						width="100%"
						height="100%"
						fill="#eac696"
						stroke="#5d5c63"
						strokeWidth="3"
					/>

					{/* <!-- half court line and circle --> */}
					{/* <line
					x1="50%"
					y1="0"
					x2="50%"
					y2="100%"
					stroke="#5d5c63"
					strokeWidth="1"
				/> */}
					{/* <circle
					cx="50%"
					cy="50%"
					r="12%"
					fill="none"
					stroke="#5d5c63"
					strokeWidth="1"
				/> */}

					{/* <!-- 3-point arc (left) --> */}
					<rect
						onClick={() => handleClick("midRangeShot", 1, "midRangeMade")}
						y="400"
						x="422"
						width="235"
						height="100"
						fill="black"
						stroke="none"
						strokeWidth="2"
					/>
					<rect
						onClick={() => handleClick("midRangeShot", 1, "midRangeMade")}
						y="400"
						x="42"
						width="235"
						height="100"
						fill="black"
						stroke="none"
						strokeWidth="2"
					/>
					<line
						x1="6%"
						y1="100%"
						x2="6%"
						y2="80%"
						stroke="#5d5c63"
						strokeWidth="2"
					/>
					<line
						x1="94%"
						y1="100%"
						x2="94%"
						y2="80%"
						stroke="#5d5c63"
						strokeWidth="2"
					/>
					<path
						onClick={() => handleClick("midRangeShot", 1, "midRangeMade")}
						d="M 658 400 A 320.5 320.5 0 0 0 42 400 "
						fill="black"
						stroke="#5d5c63"
						strokeWidth="2.1"
					/>

					{/* <!-- shaded area (left) --> */}
					<rect
						onClick={() => handleClick("closeRangeShot", 1, "closeRangeMade")}
						y="310"
						x="265"
						width="160"
						height="190"
						fill="#116cb6"
						stroke="#fff"
						strokeWidth="2"
					/>

					{/* <!-- restricted area (left) --> */}
					<path
						onClick={() => handleClick("layupShot", 1, "layupMade")}
						d="M 400 465 A -10 10 0 0 0 290 465"
						fill="#116cb6"
						stroke="#fff"
						strokeWidth="2"
					/>
					{/* <!-- board and rim (left) --> */}
					<line
						onClick={() => handleClick("layupShot", 1, "layupMade")}
						x1="290"
						y1="470"
						x2="400"
						y2="470"
						stroke="#b37336"
						strokeWidth="2"
					/>
					<circle
						onClick={() => handleClick("layupShot", 1, "layupMade")}
						cx="345"
						cy="450"
						r="15"
						fill="none"
						stroke="#b37336"
						strokeWidth="2"
					/>

					{/* <!-- free throw circle (left) --> */}
					<path
						d="M 285 312 A 60 60 0 0 0 405 312"
						fill="none"
						stroke="#fff"
						strokeWidth="2"
						strokeDasharray="10,10"
					/>
					<path
						onClick={() => handleClick("freeThrowShot", 1, "freeThrowMade")}
						d="M 405 315 A 20 20 0 0 0 285 315"
						fill="#116cb6"
						stroke="#fff"
						strokeWidth="2"
					/>

					{/* // 3-point arc (right) */}
					{/* <line
					x1="85.11%"
					y1="6%"
					x2="100%"
					y2="6%"
					stroke="#5d5c63"
					strokeWidth="1"
				/>
				<line
					x1="85.11%"
					y1="94%"
					x2="100%"
					y2="94%"
					stroke="#5d5c63"
					strokeWidth="1"
				/>
				<path
					d="M 801.03 29.79 A 237.5 237.5 0 0 0 801.03 470.21"
					fill="none"
					stroke="#5d5c63"
					strokeWidth="1.1"
				/> */}

					{/* <!-- shaded area (right) --> */}
					{/* <rect
					x="750"
					y="170"
					width="190"
					height="160"
					fill="#116cb6"
					stroke="#fff"
					strokeWidth="1"
				/> */}

					{/* <!-- board and rim (right) --> */}
					{/* <line
					x1="900"
					y1="220"
					x2="900"
					y2="280"
					stroke="#b37336"
					strokeWidth="1"
				/> */}
					{/* <circle
					cx="885"
					cy="250"
					r="15"
					fill="none"
					stroke="#b37336"
					strokeWidth="1"
				/> */}

					{/* <!-- restricted area (right) --> */}
					{/* <path
					d="M 885 210 A 40 40 0 0 0 885 290"
					fill="none"
					stroke="#fff"
					strokeWidth="1"
				/> */}

					{/* <!-- free throw circle (right) --> */}
					{/* <path
					d="M 750 310 A 60 60 0 0 0 750 190"
					fill="none"
					stroke="#fff"
					strokeWidth="1"
					strokeDasharray="10,10"
				/> */}
					{/* <path
					d="M 750 190 A 60 60 0 0 0 750 310"
					fill="none"
					stroke="#fff"
					strokeWidth="1"
				/> */}
				</svg>
			</div>
		</div>
	);
};

export default connect(null, { updateInGameStats, trackLastClickedStat })(
	Court
);
