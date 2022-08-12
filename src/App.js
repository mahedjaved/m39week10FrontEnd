// import logo from "./logo.svg";
// import { type } from "@testing-library/user-event/dist/type";
import { useEffect, useState } from "react";
import "./App.css";
import LogIn from "./Components/LogIn";
import LogOut from "./Components/LogOut";
import SignUp from "./Components/SignUp";

function App() {
	// images api state

	// some other useStates
	const [myImages, setMyImages] = useState([]);
	const [user, setUser] = useState("");
	const [email, setEmail] = useState("");
	const [token, setToken] = useState("");

	// function to update images state
	const fetchImages = async () => {
		let response = await fetch("https://picsum.photos/v2/list");
		// JSONIFY
		response = await response.json();
		setMyImages(response);
	};

	// useEffect to help mount the state and update
	useEffect(() => {
		fetchImages();
	}, []);

	return (
		<div>
			<h2>SignUp Form</h2>
			{/* passed in the update function as prop to Login so it can be accessed there */}
			<SignUp userSetter={setUser} tokenSetter={setToken} />
			<br />
			{user.length === 0 ? (
				<h2>No user logged in</h2>
			) : (
				<h2>The user - {user} has logged in</h2>
			)}
			{console.log(
				`[info] from App.js post signup -->  Retrieved token : ${token}`
			)}
			{/* _______________________________________________________________________________________________ */}
			<h2>Login Form</h2>
			<LogIn emailSetter={setEmail} tokenSetter={setToken} />
			{email.length === 0 ? (
				<h2>No user logged in</h2>
			) : (
				<h2>You have signed with email - {email}</h2>
			)}
			{console.log(
				`[info] from App.js post login-->  Retrieved token : ${token}`
			)}
			{/* ______________________________________________________________________________________________ */}
			<h2>LogOut</h2>
			<LogOut token={token} />
			{/* ______________________________________________________________________________________________ */}
			<h2>Basic Instagram Clone</h2>
			{/* Map through images */}
			{myImages &&
				myImages.map((item, index) => {
					return (
						<div>
							<p>{item.author}</p>
							<img alt="pic" src={item.download_url} key={index} />
							<br />
						</div>
					);
				})}
		</div>
	);
}

export default App;
