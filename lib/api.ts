import axios from "axios";
import * as SecureStore from "expo-secure-store";

const api = axios.create({
	// todo change the baseURL after deplyoing the backend
	baseURL: "http://192.168.0.166:8000",
});

let logoutCallback: (() => void) | null = null;

export const setLogoutHandler = (handler: () => void) => {
	logoutCallback = handler;
};

api.interceptors.response.use(
	(response) => response,
	async (error) => {
		const originalRequest = error.config;

		if (error.response?.status === 401 && !originalRequest._retry) {
			originalRequest._retry = true;

			try {
				const refresh = await SecureStore.getItemAsync("refresh_token");

				const res = await axios.post(
					"http://192.168.0.166:8000/auth/token/refresh/",
					{
						refresh,
					}
				);

				const newAccess = res.data.access;
				const newRefresh = res.data.refresh;

				await SecureStore.setItemAsync("access_token", newAccess);
				await SecureStore.setItemAsync("refresh_token", newRefresh);

				originalRequest.headers[
					"Authorization"
				] = `Bearer ${newAccess}`;
				return api(originalRequest);
			} catch (err) {
				await SecureStore.deleteItemAsync("access_token");
				await SecureStore.deleteItemAsync("refresh_token");

				if (logoutCallback) logoutCallback();

				return Promise.reject(err);
			}
		}
	}
);

api.interceptors.request.use(async (config) => {
	const token = await SecureStore.getItemAsync("access_token");
	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}

	return config;
});

export default api;
