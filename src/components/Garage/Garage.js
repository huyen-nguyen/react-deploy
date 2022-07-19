import Car from '../Car/Car'

function Garage(){
	const carName = {
		brand: "Dodge",
		model: "Challenger",
	}
	const carPower = {
		hp: 100,
	}
	return (
		<>
			<h1>Who lives in my Garage?</h1>
			<Car info={carName} strength={carPower} color={"red"} />
		</>
	)
}

export default Garage;
