import React from "react";
import { ResponsiveRadar } from "@nivo/radar";

const GameRadar = props => {
	const threePoint = Math.round(
		(props.stats.three_shot / props.fieldGoalsAttempted) * 100
	);
	const midRange = Math.round(
		(props.stats.mid_range_shot / props.fieldGoalsAttempted) * 100
	);
	const closeRange = Math.round(
		(props.stats.close_range_shot / props.fieldGoalsAttempted) * 100
	);
	const layup = Math.round(
		(props.stats.layup_shot / props.fieldGoalsAttempted) * 100
	);
	const data = [
		{
			shot: "3PT",
			"Shot Distribution": threePoint
		},
		{
			shot: "MidRange",
			"Shot Distribution": midRange
		},
		{
			shot: "CloseRange",
			"Shot Distribution": closeRange
		},
		{
			shot: "Layup/Dunk",
			"Shot Distribution": layup
		}
	];

	return (
		<div style={{ height: "250px" }}>
			<h2>Shot Distribution</h2>
			<ResponsiveRadar
				data={data}
				keys={["Shot Distribution"]}
				indexBy="shot"
				maxValue="auto"
				margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
				curve="linearClosed"
				borderWidth={2}
				borderColor={{ from: "color" }}
				gridLevels={8}
				gridShape="circular"
				gridLabelOffset={36}
				enableDots={true}
				dotSize={8}
				dotBorderWidth={2}
				dotBorderColor={{ from: "color" }}
				enableDotLabel={true}
				dotLabel="value"
				dotLabelYOffset={-12}
				colors={{ scheme: "set1" }}
				fillOpacity={0.25}
				isInteractive={false}
			/>
		</div>
	);
};

export default GameRadar;
