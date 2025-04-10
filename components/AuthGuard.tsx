import { useState, useEffect, ReactNode } from "react";
import { useRouter } from "expo-router";
import { ActivityIndicator, InteractionManager, View } from "react-native";
import { useAuth } from "@/contexts/AuthContext";

export default function AuthGuard({ children }: { children: ReactNode }) {
	const router = useRouter();
	const [checking, setChecking] = useState(true);
	const { isAuthenticated } = useAuth();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	useEffect(() => {
		if (!isAuthenticated) {
			InteractionManager.runAfterInteractions(() => {
				router.replace("/login");
			});
		} else {
			setChecking(false);
		}
	}, [isAuthenticated]);

	if (checking) {
		return (
			<View
				style={{
					flex: 1,
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<ActivityIndicator size="large" />
			</View>
		);
	}

	return <>{children}</>;
}
