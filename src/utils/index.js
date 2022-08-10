// is used to create a sign-up function, this is communicating with the back-end server
export const signUpFunc = async (
	username,
	firstname,
	lastname,
	email,
	password
) => {
	try {
		// response from API goes here
		const response = await fetch("http://localhost:5000/users", {
			method: "POST",
			// this tells that we will send the body application as JSON
			headers: { "Content-Type": "application/json" },
			// the ones in the keys must match the schema, and the ones in the values must match the arguments
			body: JSON.stringify({
				userName: username,
				firstName: firstname,
				lastName: lastname,
				email: email,
				password: password,
			}),
		});
		// console.log / find out what the response is, and it must be json format
		const data = await response.json();
		console.log(data);
		// console.log(`The response from the fetch db api ${data}`);
		// set it up in the React
		// setter(data.savedData.userName);
	} catch (error) {
		console.log(error);
	}
};
