import logo from './logo.svg';
import './App.css';

// wrapped HTML block
const element1 = (
	<table>
		<tr>
			<th>Name</th>
		</tr>
		<tr>
			<td>John</td>
		</tr>
		<tr>
			<td>Elsa</td>
		</tr>
	</table>
)

// HTML code with JSX
const element2 = <h1 className={"my-class"}>React is {5+5} times better with JSX</h1>;

// fragment to avoid excessive nodes to DOM
const element3 = (
	<>
		<p>I'm a paragraph.</p>
		<p>I'm a paragraph 2!</p>
	</>
)

// element must be closed
const element4 = <input type="text" />;

// if else
// normal JS
const x = 5;
let text = "Goodbye";
if (x<10){
	text = "Hello";
}

// ternary
const element6 = <h1>{(x) < 10 ? "Hi" : "Bye"}</h1>;

const element5 = <h1>{text}</h1>;
function App() {
	return (
		<div className="App">
			<header className="App-header">
				{element6}
			</header>
		</div>
	);
}

export default App;
