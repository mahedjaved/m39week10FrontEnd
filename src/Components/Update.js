import { useState } from "react";
import { updateFunc } from "../utils";

function Update({ token, userId }) {
	// state hooks present here
	const [username, setNewUsername] = useState("");
	const [password, setNewPassword] = useState("");
	// TODO--> extend this to include new email ? if possible

	// submit handler function
	const handleUpdateFormSubmit = async (event) => {
		event.preventDefault();
		await updateFunc(token, userId, username, password);
	};

	// final render component
	return (
		<div>
			<form
				onSubmit={(event) => {
					handleUpdateFormSubmit(event);
				}}
			>
				{/* TODO --> Possibly expand this to accomodate new EMAIL as well if you want ?? */}
				{/* ----------------- NEW USERNAME INPUT ----------------- */}
				<label>
					New Username:
					<input
						onChange={(event) => {
							setNewUsername(event.target.value);
						}}
					></input>
				</label>
				<br />

				{/* ----------------- NEW PASSWORD INPUT ----------------- */}
				<label>
					New Password:
					<input
						onChange={(event) => {
							setNewPassword(event.target.value);
						}}
					></input>
				</label>
				<br />
			</form>
		</div>
	);
}

export default Update;
