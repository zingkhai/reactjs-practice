import { Link } from "react-router-dom";

function App() {
	/* let data = { name: "Hailey", age: 23, occupation: "student" }; */

	return (
		<>
			<section>
				<h2>Home page</h2>
				<Link to={"/counter"}>Counter</Link>
				<br />
			</section>
		</>
	);
}

export default App;
