import { logOutFunc } from "../utils";

function LogOut(token) {
	// submit button handler
	const handleLogoutFormSubmit = async (event) => {
		event.preventDefault();
		await logOutFunc(token);
	};

	// main render component
	return (
		<div>
			{/* you cannot logout without logging in so use short circuit to confirm somebody has logged in or not */}
			{token && (
				<button
					onSubmit={(event) => {
						handleLogoutFormSubmit(event);
					}}
					type="submit"
				>
					LogOut
				</button>
			)}
		</div>
	);
}

export default LogOut;
