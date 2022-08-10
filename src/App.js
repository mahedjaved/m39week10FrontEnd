// import logo from "./logo.svg";
import { useEffect, useState } from "react";
import "./App.css";
import Login from "./Components/Login";

function App() {
	// images api state

	// some other useStates
	const [myImages, setMyImages] = useState([]);
	const [user, setUser] = useState([]);

	// function to update images state
	const fetchImages = async () => {
		let response = await fetch("https://picsum.photos/v2/list");
		// JSONIFY
		response = await response.json();
		setMyImages(response);
	};

	/** 
	 * This cancelled, it needs to be rebuild for multiple user entry, you can use both ENTER key or form button, I'd have reviews that you dont need to list it since it will just add to the data as you go
	const handleUser = async (event) => {
		if (event.key === "Enter") {
			console.log(`[info handleUserEnter] You pressed enter`);
			const userArray = [...user];
			userArray.push(event.target.value);
			setUser(userArray);
		}
	};
	*/

	// useEffect to help mount the state and update
	useEffect(() => {
		fetchImages();
	}, []);

	return (
		<div>
			<h2>Back-End User Information</h2>
			{/* passed in the update function as prop to Login so it can be accessed there */}
			<Login setter={setUser} />
			<br />
			<h2>The user : {user} has logged in</h2>
			{/* ___________________________________________________________________________________________________________ */}
			{/* This one is cancelled since having new user info, probs use this when going for multiple users
			<h2>User Information Form</h2>
			<input onKeyDown={(event) => handleUser(event)}></input>
			<ul>
				{user.map((item, index) => {
					return <li key={index}>{item}</li>;
				})}
			</ul> */}

			{/* ___________________________________________________________________________________________________________ */}
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
