import { useState, useEffect, useRef } from "react";

function Tracking(){
	const [value, setValue] = useState("");
	const prevValue = useRef("");       // initialize useRef("") wouldn't hurt

	useEffect(() => {
		prevValue.current = value;      // remember to always use .current when useRef()
	}, [value])   // dependency array: useEffect will trigger when elements of this array changes

	return (
		<>
			<input type={"text"} value={value} onChange={(e) => setValue(e.target.value)}/> {/* .target.value */}
			<p>Current value: {value}</p>
			<p>Previous value: {prevValue.current}</p>      {/* .current */}
		</>
	)
}

export default Tracking;
