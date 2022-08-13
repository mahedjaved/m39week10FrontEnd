import { useState } from "react";
import { updateFunc } from "../utils";

function Update({ token, userId }) {
	// state hooks present here
	const [username, setOldUsername] = useState("");
	const [password, setOldPassword] = useState("");
	const [new_username, setNewUsername] = useState("");
	const [new_password, setNewPassword] = useState("");
	// TODO--> extend this to include new email ? if possible

	// submit handler function
	const handleUpdateFormSubmit = async (event) => {
		event.preventDefault();
		await updateFunc(
			token,
			userId,
			username,
			password,
			new_username,
			new_password
		);
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
				{/* ----------------- OLD USERNAME INPUT ----------------- */}
				<label>
					Old Username:
					<input
						onChange={(event) => {
							setOldUsername(event.target.value);
						}}
					></input>
				</label>
				<br />

				{/* ----------------- OLD PASSWORD INPUT ----------------- */}
				<label>
					Old Password:
					<input
						onChange={(event) => {
							setOldPassword(event.target.value);
						}}
					></input>
				</label>
				<br />

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
				<button type="submit">Update</button>
			</form>
		</div>
	);
}

export default Update;
