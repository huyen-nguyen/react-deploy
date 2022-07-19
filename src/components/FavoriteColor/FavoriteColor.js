// Import Hooks from React
import React, {useState} from "react"; // useState Hook to keep track of the application state

function FavoriteColor(){
	const [color, setColor] = useState("pink 🎀");

	return (
		<>
			<h1>My favorite color is {color}.</h1>
			<button type={"button"} onClick={()=>{setColor("blue 🦋")}}>Blue</button>
			<button type={"button"} onClick={()=>{setColor("green 🌿")}}>Green</button>
			<button type={"button"} onClick={()=>setColor("red ❤️")}>Red</button>
		</>
	)
}

export default FavoriteColor;
