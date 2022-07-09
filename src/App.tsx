import React from "react";

import "./App.css";
import Button from "./elements/button/Button";

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<h1 className='text-3xl font-bold underline'>Hello world!</h1>
				<Button color={"blue"} className={"bg-red-800"}>
					hello
				</Button>
			</header>
		</div>
	);
}

export default App;
