import { useState, useEffect, useRef } from "react";

function Input(){
	const [inputValue, setInputValue] = useState("");
	const count = useRef(0);

	useEffect(() => {   // update DOM
		count.current = count.current + 1;
	})

	return (
		<>
			<input
				type={"text"}
				onChange={(e) => setInputValue(e.target.value)}
				value={inputValue}
			/>
			<div>Rendered {count.current} times.</div>
		</>
	)
}

export default Input;
