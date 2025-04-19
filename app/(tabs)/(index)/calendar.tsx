import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { colors } from "@/constants/Colors";
import Heading from "@/components/ui/Heading";
import { router } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { shadows } from "@/constants/Shadows";
import Calendar from "@/components/ui/Calendar";

export default function CalendarComponent() {
	return (
		<SafeAreaProvider>
			<SafeAreaView style={styles.container}>
				<View style={[styles.header, shadows.lightShadow]}>
					<TouchableOpacity
						style={styles.backButton}
						onPress={() => router.back()}
					>
						<Feather
							name="chevron-left"
							size={24}
							color={colors.black}
						/>
					</TouchableOpacity>
					<Heading level={2}>Kalendarz</Heading>
				</View>
				<View style={styles.mainContainer}>
					<Calendar />
				</View>
				<View style={[styles.labelsContainer, shadows.lightShadow]}>
					<View style={styles.label}>
						<View
							style={[
								styles.circle,
								{ backgroundColor: colors.darkerGreen },
							]}
						/>
						<Text style={styles.labelText}>Praca</Text>
					</View>
					<View style={styles.label}>
						<View
							style={[
								styles.circle,
								{ backgroundColor: colors.teal },
							]}
						/>
						<Text style={styles.labelText}>Urlop</Text>
					</View>
				</View>
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
	header: {
		padding: 10,
		marginTop: 10,
		marginBottom: 25,
		backgroundColor: colors.white,
		width: "95%",
		borderRadius: 10,
		position: "relative",
		justifyContent: "center",
	},
	mainContainer: {
		width: "97%",
	},
	calendar: {
		backgroundColor: colors.whiteish,
	},
	calendarHeader: {
		backgroundColor: colors.white,
		borderRadius: 10,
		marginBottom: 15,
	},
	backButton: {
		position: "absolute",
		left: "1%",
		padding: 10,
		zIndex: 1,
	},
	labelsContainer: {
		padding: 10,
		marginTop: 10,
		marginBottom: 25,
		backgroundColor: colors.white,
		width: "95%",
		borderRadius: 10,
		justifyContent: "space-around",
		gap: 5,
		flexDirection: "row",
	},
	label: {
		flexDirection: "row",
		gap: 5,
	},
	circle: {
		width: 20,
		aspectRatio: 1,
		borderRadius: 100,
	},
	labelText: {
		fontSize: 16,
		fontWeight: 500,
	},
});
