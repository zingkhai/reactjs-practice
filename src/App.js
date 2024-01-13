import Profile from "./properties/index";
function App() {
	/* let data = { name: "Hailey", age: 23, occupation: "student" }; */

	return (
		<>
			{/* <Profile userdata={data} /> */}
			<Profile name="Hailey" age={23} isStudent={true} />
		</>
	);
}

export default App;
