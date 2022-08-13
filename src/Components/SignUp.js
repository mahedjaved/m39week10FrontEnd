import { useState } from "react";
import { signUpFunc } from "../utils";

const SignUp = (userSetter) => {
	// a field and a setter for each of the five parameters we pass
	const [username, setUsername] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	// tell the code what to do when user clicks on submit button
	const handleSignUpFormSubmit = async (event) => {
		event.preventDefault();
		await signUpFunc(
			username,
			firstName,
			lastName,
			email,
			password,
			userSetter
		);
	};

	// MAIN RENDER component
	return (
		<div>
			<form
				onSubmit={(event) => {
					handleSignUpFormSubmit(event);
				}}
			>
				{/* __________USERNAME________________ */}
				{/* label allows us to see what kind of information has to go in the input in the form */}
				<label>
					Username:
					<input
						onChange={(event) => {
							setUsername(event.target.value);
						}}
					></input>
				</label>
				<br />

				{/* __________FIRSTNAME________________ */}
				<label>
					First Name:
					<input
						onChange={(event) => {
							setFirstName(event.target.value);
						}}
					></input>
				</label>
				<br />

				{/* __________LASTNAME________________ */}
				<label>
					Last Name:
					<input
						onChange={(event) => {
							setLastName(event.target.value);
						}}
					></input>
				</label>
				<br />

				{/* __________EMAIL________________ */}
				{/* the type="email" checks if there is an @ symbol as you put in */}
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

				{/* __________PASSWORD________________ */}
				<label>
					Password:
					<input
						onChange={(event) => {
							setPassword(event.target.value);
						}}
					></input>
				</label>
				<br />

				{/* button to process, the handling of submitting is in the <form> tag */}
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default SignUp;
