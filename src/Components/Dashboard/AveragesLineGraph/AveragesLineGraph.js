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
	const gamesLength = games.slice(0, 9);

	const data = [
		{
			id: "PTS",
			color: "hsl(307, 70%, 50%)",
			data: points.slice(0, 9).map((ele, index) => {
				return {
					x: `Game ${index + 1}`,
					y: ele
				};
			})
		},
		{
			id: "REB",
			color: "hsl(252, 70%, 50%)",
			data: games.slice(0, 9).map((ele, index) => {
				return {
					x: `Game ${index + 1}`,
					y: ele.offensive_rebound + ele.defensive_rebound
				};
			})
		},
		{
			id: "STL",
			color: "hsl(97, 70%, 50%)",
			data: games.slice(0, 9).map((ele, index) => {
				return {
					x: `Game ${index + 1}`,
					y: ele.steal
				};
			})
		},
		{
			id: "BLK",
			color: "hsl(128, 70%, 50%)",
			data: games.slice(0, 9).map((ele, index) => {
				return {
					x: `Game ${index + 1}`,
					y: ele.block
				};
			})
		},
		{
			id: "TO",
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
		<>
			{games.length > 0 ? (
				games.length > 1 ? (
					<div
						style={{ height: "320px", width: "95vw", paddingBottom: "50px" }}
					>
						{" "}
						<h2
							style={{
								paddingTop: "20px",
								display: "flex",
								justifyContent: "center"
							}}
						>
							Stats
						</h2>
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
				) : (
					"You Must Play More Then Two Games To See These Graphs"
				)
			) : null}
		</>
	);
};

const mapStateToProps = state => state;

export default connect(mapStateToProps)(AveragesLineGraph);
