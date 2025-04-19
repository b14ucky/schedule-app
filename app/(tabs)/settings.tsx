import { StyleSheet, Text, View, ScrollView } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { colors } from "@/constants/Colors";
import Heading from "@/components/ui/Heading";
import { Feather, Ionicons } from "@expo/vector-icons";
import Button from "@/components/ui/Button";
import Constants from "expo-constants";
import SettingsItem from "@/components/ui/SettingsItem";
import { shadows } from "@/constants/Shadows";
import { useAuth } from "@/contexts/AuthContext";

export default function Settings() {
	const { user, logout } = useAuth();
	return (
		<SafeAreaProvider>
			<SafeAreaView style={styles.container}>
				<View style={styles.headingContainer}>
					<Heading>TWÓJ PROFIL</Heading>
				</View>
				<View style={[styles.userContainer, shadows.lightShadow]}>
					<Ionicons name={"person"} size={50} />
					<View>
						<Text
							style={styles.userName}
							numberOfLines={1}
							adjustsFontSizeToFit
						>
							{/* it works for now, one day I'm gonna make it better I promise */}
							{`${user?.first_name} ${user?.last_name}          `}
						</Text>
						<Text style={styles.email}>{user?.email}</Text>
					</View>
				</View>
				<ScrollView
					style={styles.settingsContainer}
					contentContainerStyle={{ alignItems: "center" }}
				>
					<SettingsItem
						text={"Ustawienia profilu"}
						Icon={Feather}
						iconName={"user"}
					/>

					{/* this should always be at the bottom */}
					<Button
						text={"Wyloguj się"}
						Icon={Feather}
						iconName={"log-out"}
						buttonProps={{
							style: { marginTop: 25 },
						}}
						onPress={() => logout()}
					/>
					<Text style={styles.version}>
						Wersja: {Constants.expoConfig?.version || "błąd"}
					</Text>
				</ScrollView>
			</SafeAreaView>
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		backgroundColor: colors.whiteish,
	},
	headingContainer: {
		padding: 15,
		marginBottom: 10,
	},
	userContainer: {
		width: "95%",
		flexDirection: "row",
		backgroundColor: colors.white,
		padding: 20,
		borderRadius: 20,
		gap: 5,
		zIndex: 1,
	},
	userName: {
		fontSize: 26,
		fontWeight: 600,
		paddingHorizontal: 20,
		color: colors.black,
	},
	email: {
		fontSize: 14,
		fontWeight: 300,
		paddingHorizontal: 20,
		color: colors.gray,
	},
	settingsContainer: {
		width: "95%",
		paddingVertical: 20,
		paddingHorizontal: 15,
	},
	version: {
		marginTop: 10,
		padding: 5,
		color: colors.lightGray,
	},
});
