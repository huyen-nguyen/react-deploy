import Car from '../Car/Car';

function Garage(){
	const carInfo = {
		name: 'Dodge',
		model: 'Challenger',
	}
	return (
		<>
			<h1>Who lives in my Garage?</h1>
			<Car brand={carInfo} />
		</>
	)
}

export default Garage;
