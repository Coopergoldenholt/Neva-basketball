import React from "react";
import { ResponsiveLine } from "@nivo/line";
import { connect } from "react-redux";

const AveragesLineGraph = props => {
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

	const data = [
		{
			id: "Points",
			color: "hsl(307, 70%, 50%)",
			data: points.slice(0, 9).map((ele, index) => {
				return {
					x: `Game ${index + 1}`,
					y: ele
				};
			})
		},
		{
			id: "Rebounds",
			color: "hsl(252, 70%, 50%)",
			data: games.slice(0, 9).map((ele, index) => {
				return {
					x: `Game ${index + 1}`,
					y: ele.offensive_rebound + ele.defensive_rebound
				};
			})
		},
		{
			id: "Steals",
			color: "hsl(97, 70%, 50%)",
			data: games.slice(0, 9).map((ele, index) => {
				return {
					x: `Game ${index + 1}`,
					y: ele.steal
				};
			})
		},
		{
			id: "Blocks",
			color: "hsl(128, 70%, 50%)",
			data: games.slice(0, 9).map((ele, index) => {
				return {
					x: `Game ${index + 1}`,
					y: ele.block
				};
			})
		},
		{
			id: "Turnovers",
			color: "hsl(128, 70%, 50%)",
			data: games.slice(0, 9).map((ele, index) => {
				return {
					x: `Game ${index + 1}`,
					y: ele.turnover
				};
			})
		}
	];

	return (
		<div style={{ height: "500px", width: "95vw" }}>
			<ResponsiveLine
				data={data}
				margin={{ top: 50, right: 110, bottom: 50, left: 110 }}
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
				axisBottom={{
					orient: "bottom",
					tickSize: 5,
					tickPadding: 5,
					tickRotation: 0,
					legend: "Last 10 Games",
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
						anchor: "bottom-right",
						direction: "column",
						justify: false,
						translateX: 100,
						translateY: 0,
						itemsSpacing: 0,
						itemDirection: "left-to-right",
						itemWidth: 80,
						itemHeight: 20,
						itemOpacity: 0.75,
						symbolSize: 12,
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
	);
};

const mapStateToProps = state => state;

export default connect(mapStateToProps)(AveragesLineGraph);
