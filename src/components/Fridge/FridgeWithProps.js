function Fruit(props){
	return <li>Hi wassup I'm {props.name}!</li>
}

function FridgeWithProps(props){
	const fruits = props.fruits;
	return (
		<>
			<h1>Fridge</h1>
			{/* if length > 0 then render the h2 block*/}
			{fruits.length > 0 && (
				<>
					<h2>You have {fruits.length} fruits in your Fridge:</h2>
					<ul> {/* Have to have keys */}
						{fruits.map(f => <Fruit key={f.id} name={f.name} />)}
					</ul>
				</>
			)
			}
		</>
	)
}

export default FridgeWithProps;
