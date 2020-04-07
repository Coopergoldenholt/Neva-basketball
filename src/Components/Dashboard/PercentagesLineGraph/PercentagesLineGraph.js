import React from "react";
import { ResponsiveLine } from "@nivo/line";
import { connect } from "react-redux";

const PercentagesLineGraph = props => {
	const { games } = props.stats;

	const points = games.map(ele => {
		const points =
			ele.layup_made * 2 +
			ele.close_range_made * 2 +
			ele.free_throw_made +
			ele.mid_range_made * 2 +
			ele.three_made * 3;
		return points;
	});
	const gamesLength = games.slice(0, 9);

	const data =
		props.user.user.subscription !== "none"
			? [
					{
						id: "FG%",
						color: "hsl(307, 70%, 50%)",
						data: games.slice(0, 9).map((ele, index) => {
							const fieldGoalPercentage =
								Math.round(
									((ele.layup_made +
										ele.close_range_made +
										ele.mid_range_made +
										ele.three_made) /
										(ele.layup_shot +
											ele.close_range_shot +
											ele.mid_range_shot +
											ele.three_shot)) *
										10000
								) / 100;

							return {
								x: `Game ${index + 1}`,
								y: fieldGoalPercentage
							};
						})
					},
					{
						id: "3P%",
						color: "hsl(128, 70%, 50%)",
						data: games.slice(0, 9).map((ele, index) => {
							return {
								x: `Game ${index + 1}`,
								y: Math.round((ele.three_made / ele.three_shot) * 10000) / 100
							};
						})
					},
					{
						id: "FT%",
						color: "hsl(128, 70%, 50%)",
						data: games.slice(0, 9).map((ele, index) => {
							return {
								x: `Game ${index + 1}`,
								y:
									Math.round(
										(ele.free_throw_made / ele.free_throw_shot) * 10000
									) / 100
							};
						})
					},
					{
						id: "eFG%",
						color: "hsl(252, 70%, 50%)",
						data: games.slice(0, 9).map((ele, index) => {
							const effectiveFieldPercentage =
								(ele.layup_made +
									ele.close_range_made +
									ele.mid_range_made +
									ele.three_made +
									0.5 * ele.three_made) /
								(ele.layup_shot +
									ele.close_range_shot +
									ele.mid_range_shot +
									ele.three_shot);
							return {
								x: `Game ${index + 1}`,
								y: Math.round(effectiveFieldPercentage * 10000) / 100
							};
						})
					},
					{
						id: "TS%",
						color: "hsl(97, 70%, 50%)",
						data: games.slice(0, 9).map((ele, index) => {
							const points =
								ele.layup_made * 2 +
								ele.close_range_made * 2 +
								ele.free_throw_made +
								ele.mid_range_made * 2 +
								ele.three_made * 3;
							const trueShootingAttempts =
								2 *
									(ele.layup_shot +
										ele.close_range_shot +
										ele.mid_range_shot +
										ele.three_shot) +
								0.44 * ele.free_throw_shot;
							const trueShootingPercentage =
								Math.round((points / trueShootingAttempts) * 10000) / 100;

							return {
								x: `Game ${index + 1}`,
								y: trueShootingPercentage
							};
						})
					}
			  ]
			: [
					{
						id: "FG%",
						color: "hsl(307, 70%, 50%)",
						data: games.slice(0, 9).map((ele, index) => {
							const fieldGoalPercentage =
								Math.round(
									((ele.layup_made +
										ele.close_range_made +
										ele.mid_range_made +
										ele.three_made) /
										(ele.layup_shot +
											ele.close_range_shot +
											ele.mid_range_shot +
											ele.three_shot)) *
										10000
								) / 100;

							return {
								x: `Game ${index + 1}`,
								y: fieldGoalPercentage
							};
						})
					},
					{
						id: "3P%",
						color: "hsl(128, 70%, 50%)",
						data: games.slice(0, 9).map((ele, index) => {
							return {
								x: `Game ${index + 1}`,
								y: Math.round((ele.three_made / ele.three_shot) * 10000) / 100
							};
						})
					},

					{
						id: "FT%",
						color: "hsl(128, 70%, 50%)",
						data: games.slice(0, 9).map((ele, index) => {
							return {
								x: `Game ${index + 1}`,
								y:
									Math.round(
										(ele.free_throw_made / ele.free_throw_shot) * 10000
									) / 100
							};
						})
					}
			  ];

	return (
		<>
			{games.length > 1 ? (
				<div style={{ height: "500px", width: "95vw" }}>
					<ResponsiveLine
						data={data}
						margin={{ top: 20, right: 20, bottom: 80, left: 35 }}
						xScale={{ type: "point" }}
						yScale={{
							type: "linear",
							min: "0",
							max: "auto",
							stacked: false,
							reverse: false
						}}
						axisTop={null}
						axisRight={null}
						isInteractive={false}
						enablePointLabel={true}
						areaBaselineValue={100}
						axisBottom={{
							orient: "bottom",
							tickSize: 5,
							tickPadding: 5,
							tickRotation: 0,
							legend: `Last ${gamesLength.length} Games`,
							legendOffset: 36,
							legendPosition: "middle"
						}}
						axisLeft={{
							orient: "left",
							tickSize: 5,
							tickPadding: 5,
							tickRotation: 0,
							legend: "Total",
							legendOffset: -40,
							legendPosition: "middle"
						}}
						colors={{ scheme: "nivo" }}
						pointSize={10}
						useMesh={true}
						legends={[
							{
								anchor: "bottom",
								direction: "row",
								justify: false,
								translateX: 10,
								translateY: 70,
								itemsSpacing: -0,
								itemDirection: "left-to-right",
								itemWidth: 45,
								itemHeight: 20,
								itemOpacity: 0.75,
								symbolSize: 6,
								symbolShape: "circle",
								symbolBorderColor: "rgba(0, 0, 0, .5)",
								effects: [
									{
										on: "hover",
										style: {
											itemBackground: "rgba(0, 0, 0, .03)",
											itemOpacity: 1
										}
									}
								]
							}
						]}
					/>
				</div>
			) : null}
		</>
	);
};

const mapStateToProps = state => state;

export default connect(mapStateToProps)(PercentagesLineGraph);
