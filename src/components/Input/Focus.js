import { useRef } from 'react'

function Focus(){
	const inputValue = useRef();    // assign reference to inputValue

	const focusInput = () => {
		inputValue.current.focus();  // the whole purpose of this function is to focus on the hooked element
	}

	return(
		<>
			<input type={"text"} ref={inputValue}/>
			<button onClick={focusInput}>Focus the hell out of it</button>
		</>
	)
}

export default Focus;
