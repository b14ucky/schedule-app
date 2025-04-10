import { createContext, useContext, useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";

type AuthContextType = {
	isAuthenticated: boolean;
	login: (token: string) => Promise<void>;
	logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	useEffect(() => {
		const loadToken = async () => {
			const token = await SecureStore.getItemAsync("access_token");
			if (token) setIsAuthenticated(true);
		};
		loadToken();
	}, []);

	const login = async (token: string) => {
		await SecureStore.setItemAsync("access_token", token);
		setIsAuthenticated(true);
	};

	const logout = async () => {
		await SecureStore.deleteItemAsync("access_token");
		setIsAuthenticated(false);
	};

	return (
		<AuthContext.Provider value={{ isAuthenticated, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	const ctx = useContext(AuthContext);
	if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
	return ctx;
};
