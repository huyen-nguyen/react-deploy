import {useState} from "react";

function CarWithHook(){
	// four states
	// const [brand, setBrand] = useState("Dodge");
	// const [model, setModel] = useState("Challenger");
	// const [year, setYear] = useState("2022");
	// const [color, setColor] = useState("Black")

	// or use one state
	const [car, setCar] = useState({
		brand: "Dodge",
		model: "Challenger",
		year: "2022",
		color: "Black",
	})

	const updateColor = () => {
		setCar(prevState => {
			return {...prevState, color: "Red"}
		})
	}

	return (
		<>
			<h1>My {car.brand}</h1>
			<p>It is a {car.color} {car.model} from {car.year}.</p>

			<button type={"button"} onClick={updateColor}>Update Car</button>
		</>
	)
}

export default CarWithHook;
