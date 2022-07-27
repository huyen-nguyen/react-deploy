import * as d3 from 'd3';
import { useEffect } from "react";
import './BarChart.scss';

function BarChart(){
	useEffect(() => {
		// dataset of pets and the amount of owners
		let dataset = [
			{subject: "Dogs", count: 150},
			{subject: "Fish", count: 75},
			{subject: "Cats", count: 135},
			{subject: "Bunnies", count: 240},
		];

		console.log(d3.max(dataset, d => d.count));

		// Generate a <p> tag for each element in the dataset
		d3.select("#description")
			.selectAll("p")
			.data(dataset)
			.enter()
			.append("p")
			.html(d => d.subject + ": " + d.count + " counts.")

		// bar chart
		d3.select('#barchart')
			.selectAll("div")
			.data(dataset)
			.enter()
			.append("div")
			.classed("bar", true)
			.style("height", d3.max(dataset, d => d.count) + "px")

		// change height of the bars
		d3.select('#barchart')
			.selectAll(".bar")
			.style("height", d => d.count + "px")
			.style("width", "80px")
			.style("margin-right", "10px")

	}, []);

	return (
		<>
			<div id={"description"}>PET STATS</div>
			<div id={"barchart"}> </div>
		</>
	)
}

export default BarChart;
