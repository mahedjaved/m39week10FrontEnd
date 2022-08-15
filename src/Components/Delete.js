import { useState } from "react";
import { deleteUserFunc } from "../utils";

const Delete = (token) => {
	// useState variables
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	// submit handler function
	const handleDeleteFormSubmit = async (event) => {
		event.preventDefault();
		await deleteUserFunc(token, username, password);
	};

	// main render component
	return (
		<div>
			<form
				onSubmit={(event) => {
					handleDeleteFormSubmit(event);
				}}
			>
				{/* -----------------  USERNAME INPUT ----------------- */}
				<label>
					Username:
					<input
						onChange={(event) => {
							setUsername(event.target.value);
						}}
					></input>
				</label>
				<br />

				{/* -----------------  PASSWORD INPUT ----------------- */}
				<label>
					Password:
					<input
						onChange={(event) => {
							setPassword(event.target.value);
						}}
					></input>
				</label>
				<br />
				<button type="submit">Delete</button>
			</form>
		</div>
	);
};

export default Delete;
