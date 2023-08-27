import "./App.css";
import Nav from "./Nav";
import Carousel from "./Carousel";
import Bouncy from "./Bouncy";
import Games from "./Games";
import Equipment from "./Equipment";
import Contact from "./Contact";
import Home from "./Home";

function App() {
	return (
		<>
			<Nav />
			<Home />
			<Carousel />
			<Bouncy />
			<Games />
			<Equipment />
			<Contact />
		</>
	);
}

export default App;
