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

	const handleUser = async (event) => {
		if (event.key === "Enter") {
			console.log(`[info handleUserEnter] You pressed enter`);
			const userArray = [...user];
			userArray.push(event.target.value);
			setUser(userArray);
		}
	};

	// useEffect to help mount the state and update
	useEffect(() => {
		fetchImages();
	}, []);

	return (
		<div>
			<h2>Back-End User Information</h2>
			<Login />
			{/* ___________________________________________________________________________________________________________ */}
			<h2>User Information Form</h2>
			<input onKeyDown={(event) => handleUser(event)}></input>
			<ul>
				{user.map((item, index) => {
					return <li key={index}>{item}</li>;
				})}
			</ul>

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
