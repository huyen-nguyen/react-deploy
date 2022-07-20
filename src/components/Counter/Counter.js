import {useState, useEffect} from "react";

// Component allows effect to calculate the double of the count variable
function Counter(){
	const [count, setCount] = useState(0);
	const [calculation, setCalculation] = useState(0);

	// update calculation based on count
	useEffect(() => {
		setCalculation(() => count * 2);
	}, [count])     // if count is updated, effect will run again

	return (
		<>
			<p>Count: {count}</p>
			<button onClick={() => setCount(() => count + 1)}>+</button>
			<p>Calculation: {calculation}</p>
		</>
	)
}

export default Counter;
