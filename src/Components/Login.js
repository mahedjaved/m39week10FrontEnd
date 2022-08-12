import { useState } from "react";
import { logInFunc } from "../utils";

const LogIn = ({ emailSetter, tokenSetter }) => {
	// state hooks for email and password
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	// handle submit button for the form
	const handleLoginFormSubmit = async (event) => {
		event.preventDefault();
		await logInFunc(email, password, emailSetter, tokenSetter);
	};

	// main render component
	return (
		<div>
			<form
				onSubmit={(event) => {
					handleLoginFormSubmit(event);
				}}
			>
				{/* ----------------- EMAIL INPUT ----------------- */}
				<label>
					Email:
					<input
						type="email"
						onChange={(event) => {
							setEmail(event.target.value);
						}}
					></input>
				</label>
				<br />

				{/* ----------------- PASSWORD INPUT ----------------- */}
				<label>
					Password:
					<input
						onChange={(event) => {
							setPassword(event.target.value);
						}}
					></input>
				</label>
				<br />

				{/* button assign for submit form */}
				<button type="submit">LogIn</button>
			</form>
		</div>
	);
};

export default LogIn;
