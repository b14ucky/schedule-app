import { jwtDecode } from "jwt-decode";

type DecodedToken = {
	user_id: number;
	email: string;
	first_name: string;
	last_name: string;
};

const getUserFromToken = (token: string) => {
	const decoded: DecodedToken = jwtDecode(token);
	return {
		user_id: decoded.user_id,
		email: decoded.email,
		first_name: decoded.first_name,
		last_name: decoded.last_name,
	};
};

export default getUserFromToken;
