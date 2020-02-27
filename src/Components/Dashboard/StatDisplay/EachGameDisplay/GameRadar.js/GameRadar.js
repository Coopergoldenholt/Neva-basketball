import React from "react";
import { ResponsiveRadar } from "@nivo/radar";

const GameRadar = props => {
	console.log(props);
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
	console.log(threePoint);
	const data = [
		{
			taste: "3PT",
			"Shot Distribution": threePoint,
			carmenere: 106,
			syrah: 29
		},
		{
			taste: "MidRange",
			"Shot Distribution": midRange,
			carmenere: 23,
			syrah: 33
		},
		{
			taste: "CloseRange",
			"Shot Distribution": closeRange,
			carmenere: 120,
			syrah: 88
		},
		{
			taste: "Layup/Dunk",
			"Shot Distribution": layup,
			carmenere: 22,
			syrah: 75
		}
	];

	return (
		<div style={{ height: "300px" }}>
			<h2>Shot Distribution</h2>
			<ResponsiveRadar
				data={data}
				keys={["Shot Distribution"]}
				indexBy="taste"
				maxValue="auto"
				margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
				curve="linearClosed"
				borderWidth={2}
				borderColor={{ from: "color" }}
				gridLevels={8}
				gridShape="circular"
				gridLabelOffset={36}
				enableDots={true}
				dotSize={10}
				dotColor={{ theme: "background" }}
				dotBorderWidth={2}
				dotBorderColor={{ from: "color" }}
				enableDotLabel={true}
				dotLabel="value"
				dotLabelYOffset={-12}
				colors={{ scheme: "set1" }}
				fillOpacity={0.25}
				blendMode="multiply"
				animate={true}
				motionStiffness={90}
				motionDamping={15}
				isInteractive={true}
			/>
		</div>
	);
};

export default GameRadar;
