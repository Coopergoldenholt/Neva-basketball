import React from "react";
import { ResponsivePie } from "@nivo/pie";
import { connect } from "react-redux";

const ShotDistributionChart = props => {
	const midRangeShot = props.stats.games.reduce((acc, ele) => {
		return (acc += ele.mid_range_shot);
	}, 0);

	const threeRangeShot = props.stats.games.reduce((acc, ele) => {
		return (acc += ele.three_shot);
	}, 0);

	const closeRangeShot = props.stats.games.reduce((acc, ele) => {
		return (acc += ele.close_range_shot);
	}, 0);

	const layupShot = props.stats.games.reduce((acc, ele) => {
		return (acc += ele.layup_shot);
	}, 0);

	const totalShots = threeRangeShot + closeRangeShot + layupShot + midRangeShot;

	const threeDisplay = Math.round((threeRangeShot / totalShots) * 100);
	const midRangeDisplay = Math.round((midRangeShot / totalShots) * 100);
	const closeRangeDisplay = Math.round((closeRangeShot / totalShots) * 100);
	const layupDisplay = Math.round((layupShot / totalShots) * 100);

	console.log(threeDisplay, midRangeDisplay, closeRangeDisplay, layupDisplay);

	const data = [
		{
			id: "3PT",
			label: "3PT",
			color: "hsl(37, 70%, 50%)",
			value: threeRangeShot
		},
		{
			id: "MidRange",
			label: "Midrange",
			color: "hsl(37, 70%, 50%)",
			value: midRangeShot
		},
		{
			id: "CloseRange",
			label: "CloseRange",
			color: "hsl(37, 70%, 50%)",
			value: closeRangeShot
		},
		{
			id: "Layup/Dunk",
			label: "Layup/Dunk",
			color: "hsl(37, 70%, 50%)",
			value: layupShot
		}
	];

	return (
		<div style={{ height: "400px" }}>
			<h2>Shot Distribution</h2>
			<ResponsivePie
				data={data}
				margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
				innerRadius={0.5}
				padAngle={0.7}
				cornerRadius={3}
				colors={{ scheme: "nivo" }}
				borderWidth={1}
				borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
				radialLabelsSkipAngle={10}
				radialLabelsTextXOffset={6}
				radialLabelsTextColor="#333333"
				radialLabelsLinkOffset={0}
				radialLabelsLinkDiagonalLength={16}
				radialLabelsLinkHorizontalLength={24}
				radialLabelsLinkStrokeWidth={1}
				radialLabelsLinkColor={{ from: "color" }}
				slicesLabelsSkipAngle={10}
				slicesLabelsTextColor="#333333"
				animate={true}
				motionStiffness={90}
				motionDamping={15}
				defs={[
					{
						id: "dots",
						type: "patternDots",
						background: "inherit",
						color: "rgba(255, 255, 255, 0.3)",
						size: 4,
						padding: 1,
						stagger: true
					},
					{
						id: "lines",
						type: "patternLines",
						background: "inherit",
						color: "rgba(255, 255, 255, 0.3)",
						rotation: -45,
						lineWidth: 6,
						spacing: 10
					}
				]}
				fill={[
					{
						match: {
							id: "ruby"
						},
						id: "dots"
					},
					{
						match: {
							id: "c"
						},
						id: "dots"
					},
					{
						match: {
							id: "go"
						},
						id: "dots"
					},
					{
						match: {
							id: "python"
						},
						id: "dots"
					},
					{
						match: {
							id: "scala"
						},
						id: "lines"
					},
					{
						match: {
							id: "lisp"
						},
						id: "lines"
					},
					{
						match: {
							id: "elixir"
						},
						id: "lines"
					},
					{
						match: {
							id: "javascript"
						},
						id: "lines"
					}
				]}
				legends={[
					{
						anchor: "bottom",
						direction: "row",
						translateY: 56,
						itemWidth: 100,
						itemHeight: 18,
						itemTextColor: "#999",
						symbolSize: 18,
						symbolShape: "circle",
						effects: [
							{
								on: "hover",
								style: {
									itemTextColor: "#000"
								}
							}
						]
					}
				]}
			/>
		</div>
	);
};

const mapStateToProps = state => state;

export default connect(mapStateToProps)(ShotDistributionChart);
