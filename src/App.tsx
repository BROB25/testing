import { useState } from "react";
import "./App.css";
import Nav from "./Nav";
import Carousel from "./Carousel";
import Bouncy from "./Bouncy";
import Games from "./Games";
import Equipment from "./Equipment";
import Contact from "./Contact";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div>
				<Nav />
				<Carousel />
				<Bouncy />
				<Games />
				<Equipment />
				<Contact />
			</div>
		</>
	);
}

export default App;
