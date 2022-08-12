// is used to create a sign-up function, this is communicating with the back-end server
export const signUpFunc = async (
	username,
	firstname,
	lastname,
	email,
	password,
	userSetter,
	tokenSetter
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
		// console.log(
		// 	"[msg] This res comes from React utils signUp func with data: "
		// console.log(data)
		// );
		console.log(`[msg] New user signed up: ${data.savedUser.userName}`);
		// set it up in the React
		userSetter(data.savedUser.userName);
		tokenSetter(data.token);
	} catch (error) {
		console.log(`[errmsg] Error from React utils signUpFunc ==> ${error}`);
	}
};

// Login function
export const logInFunc = async (email, password, emailSetter, tokenSetter) => {
	try {
		const response = await fetch("http://localhost:5000/users/login", {
			method: "POST",
			// this tells that we will send the body application as JSON
			headers: { "Content-Type": "application/json" },
			// the ones in the keys must match the schema, and the ones in the values must match the arguments
			body: JSON.stringify({
				email: email,
				password: password,
			}),
		});
		// the response need to be jsonified
		const data = await response.json();
		// console.log("[msg] This res comes from React utils loginFunc :");
		// console.log(data);
		console.log(
			`The following user with email : ${data.user.email} just logged in`
		);
		// console.log(`[permsg] Just checking if password is hashed : ${password}`);
		emailSetter(data.user.email);
		tokenSetter(data.token);
	} catch (error) {
		console.log(`[errmsg] Error from React utils loginFunc ==> ${error}`);
	}
};

// LogOut function
export const logOutFunc = async (token) => {
	/**
	 * Requires authorisation --> runs the middleware func auth
	 * Hence needs in the header the key term (Authorisation)
	 * sth about replacing with bearer ?? research this
	 * it takes the token from the header and then verifies it
	 * it stores user in req.user and token in req.token
	 * finds the user with that token, checks if the token is
	 * similar to that stored --> prints out a message
	 * on the endpoint :: /users/logout
	 */
	try {
		const response = await fetch("http://localhost:5000/users/logout", {
			method: "GET",
			// headers: { Authorization: "Bearer " + token },
			headers: { Authorization: token.token },
		});
		const data = await response.json();
		console.log("[resMsg] Response from utils logOutFunc : ");
		console.log(data);
	} catch (error) {
		console.log(
			"[errormsg] The following error comes from logOutFunc in utils"
		);
		console.log(error);
	}
};
