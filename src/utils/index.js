//  All the backend - callback functions to the front-end reside here !!
// is used to create a sign-up function, this is communicating with the back-end server
export const signUpFunc = async (
	username,
	firstname,
	lastname,
	email,
	password,
	userSetter
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
		// tokenSetter(data.token);
	} catch (error) {
		console.log(`[errmsg] Error from React utils signUpFunc ==> ${error}`);
	}
};

// Login function
export const logInFunc = async (
	email,
	password,
	emailSetter,
	tokenSetter,
	userIdSetter
) => {
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
		// console.log(
		// 	"[msg] This res comes from React utils loginFunc, checking if userId exists :"
		// );
		// console.log(data);
		console.log(
			`The following user with email : ${data.user.email} just logged in`
		);
		// console.log(`[permsg] Just checking if password is hashed : ${password}`);
		emailSetter(data.user.email);
		userIdSetter(data.user._id);
		tokenSetter(data.token);
	} catch (error) {
		console.log(`[errmsg] Error from React utils loginFunc ==> ${error}`);
	}
};

// LogOut function
export const logOutFunc = async (token) => {
	try {
		const response = await fetch("http://localhost:5000/users/logout", {
			method: "GET",
			// headers: { Authorization: "Bearer " + token },
			headers: { Authorization: token.token },
		});
		const data = await response.json();
		console.log(data);
	} catch (error) {
		console.log(
			"[errormsg] The following error comes from logOutFunc in utils"
		);
		console.log(error);
	}
};

// Update function
export const updateFunc = async ({ token, userId, username, password }) => {
	try {
		const response = await fetch("http://localhost:5000/users/myprofile", {
			method: "PATCH",
			headers: { Authorization: token.token },
			user: { _id: userId },
			body: JSON.stringify({ username, password }),
		});
		const data = await response.json();
		console.log("[resMsg] Response from utils updateFunc : ");
		console.log(data);
	} catch (error) {
		// error handling
		console.log(
			`[errormsg] This comes from updateFunc in utils :: ${error}`
		);
	}
};
