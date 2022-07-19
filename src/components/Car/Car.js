function Car(props){ // props is the set of attributes in HTML
	return <h2>Hi, I'm a {props.color} {props.info.brand + " " + props.info.model} Car! I am {props.strength.hp} hp.</h2>
}

export default Car
