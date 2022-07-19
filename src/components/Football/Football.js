function Football(){
	const shoot = (a, b) => {
		alert("Great shoot, " + b.type + "!");
	}
	return (
		// <button onClick={shoot}>Shoot here!</button> // for non-parameter shoort function
		<button onClick={(event) => {shoot("Huyen", event)}}>Shoot here!</button> // use arrow function for param shoot
	)
}

export default Football;
