import { createContext, useContext, useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";
import { setLogoutHandler } from "@/lib/api";
import getUserFromToken from "@/lib/getUserFromToken";

type User = {
	user_id: number;
	email: string;
	first_name: string;
	last_name: string;
};

type AuthContextType = {
	isAuthenticated: boolean;
	user: User | null;
	login: (access: string, refresh: string) => Promise<void>;
	logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [user, setUser] = useState<User | null>(null);

	useEffect(() => {
		const loadToken = async () => {
			const token = await SecureStore.getItemAsync("access_token");
			if (token) {
				setIsAuthenticated(true);
				setUser(getUserFromToken(token));
			}
		};
		loadToken();
	}, []);

	useEffect(() => {
		setLogoutHandler(logout);
	}, []);

	const login = async (access: string, refresh: string) => {
		await SecureStore.setItemAsync("access_token", access);
		await SecureStore.setItemAsync("refresh_token", refresh);
		setIsAuthenticated(true);
		setUser(getUserFromToken(access));
	};

	const logout = async () => {
		await SecureStore.deleteItemAsync("access_token");
		setIsAuthenticated(false);
		setUser(null);
	};

	return (
		<AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	const ctx = useContext(AuthContext);
	if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
	return ctx;
};
