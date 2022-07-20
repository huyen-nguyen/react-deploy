import {useState, useEffect} from "react";

// Component allows effect to calculate the double of the count variable
function CounterTimer(){
	const [count, setCount] = useState(0);
	const [calculation, setCalculation] = useState(0);

	// update calculation based on count
	useEffect(() => {
		setCalculation(() => count * 2);
	}, [count])     // if count is updated, effect will run again

	// update count every second
	useEffect(() => {
		let timer = setTimeout(() => {
			setCount((count) => count + 1)
		}, 1000)

		return ()=>clearTimeout(timer) // always cleanup!!!
	})

	return (
		<>
			<p>Count: {count}</p>
			<p>Calculation: {calculation}</p>
		</>
	)
}

export default CounterTimer;
