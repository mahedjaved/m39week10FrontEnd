import { logOutFunc } from "../utils";

function LogOut(token) {
	// submit button handler
	const handleLogoutButtonClick = async (event) => {
		event.preventDefault();
		await logOutFunc(token);
	};

	// main render component
	return (
		<div>
			{/* you cannot logout without logging in so use short circuit to confirm somebody has logged in or not */}

			<button
				onClick={(event) => {
					handleLogoutButtonClick(event);
				}}
				type="submit"
			>
				LogOut
			</button>
		</div>
	);
}

export default LogOut;
