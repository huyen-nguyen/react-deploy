import logo from './logo.svg';
import './App.css';
// import Fridge from './components/Fridge/Fridge'
import FridgeWithProps from "./components/Fridge/FridgeWithProps";

function App() {
	const fruits = [
		{id: 1, name: 'banana'},
		{id: 2, name: 'mango'},
		{id: 3, name: 'lemon'},
	];
	return (
		<div className="App">
			<header className="App-header">
				<FridgeWithProps fruits={fruits} />
			</header>
		</div>
	);
}

export default App;
