function HitGoal(){
	return <h1>GOAL!</h1>
}

function MissGoal(){
	return <h1>MISSED! you dum dum...</h1>
}

function Goal(props){
	const isGoal = props.isGoal;
	return isGoal ? <HitGoal /> : <MissGoal />;
}

export default Goal;
