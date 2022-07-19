function Fruit(props){
	return <li>Hi I'm {props.name}</li>
}

function Fridge(){
	const fruits = [
		{id: 1, name: 'banana'},
		{id: 2, name: 'mango'},
		{id: 3, name: 'lemon'},
	];
	return (
		<>
			<h1>Fridge</h1>
			{fruits.length > 0 && (
				<ul>
					{fruits.map((f) => <Fruit key={f.id} name={f.name} />)}
				</ul>
			)
			}
		</>
	)
}

export default Fridge;
