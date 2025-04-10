import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";
import AuthGuard from "@/components/AuthGuard";

export default function TabLayout() {
	return (
		<AuthGuard>
			<Tabs
				screenOptions={{
					tabBarActiveTintColor: colors.black,
					tabBarInactiveTintColor: colors.gray,
					tabBarStyle: {
						backgroundColor: colors.white,
						height: 85,
					},
				}}
			>
				<Tabs.Screen
					name="(index)"
					options={{
						headerShown: false,
						tabBarShowLabel: false,
						tabBarIcon: ({ focused, color }) => (
							<Ionicons
								name={
									focused
										? "calendar-number"
										: "calendar-number-outline"
								}
								color={color}
								size={28}
							/>
						),
						tabBarIconStyle: styles.icon,
					}}
				/>
				<Tabs.Screen
					name="settings"
					options={{
						headerShown: false,
						tabBarShowLabel: false,
						tabBarIcon: ({ focused, color }) => (
							<Ionicons
								name={
									focused
										? "settings-sharp"
										: "settings-outline"
								}
								color={color}
								size={28}
							/>
						),
						tabBarIconStyle: styles.icon,
					}}
				/>
			</Tabs>
		</AuthGuard>
	);
}

const styles = StyleSheet.create({
	icon: {
		position: "absolute",
		top: "45%",
	},
});
