function Profile(props) {
	return (
		<>
			<h1>profile </h1>
			<p>Name: {props.name}</p>
			<p>Age: {props.age}</p>
			<p>Student: {props.isStudent ? "yes" : "no"}</p>
			{/*<ul>
				<li>{props.userdata.name}</li>
				<li>{props.userdata.age}</li>
				<li>{props.userdata.occupation}</li>
			</ul> */}
		</>
	);
}
export default Profile;
