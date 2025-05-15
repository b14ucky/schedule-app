import { colors } from "@/constants/Colors";
import { shadows } from "@/constants/Shadows";
import { Feather } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

export default function ErrorAlert({ error }: { error: string }) {
	return (
		<View style={[styles.container, shadows.heavierShadow]}>
			<Feather style={styles.icon} name={"alert-circle"} />
			<Text style={styles.text}>{error}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		gap: 5,
		backgroundColor: colors.black,
		marginTop: 35,
		paddingHorizontal: 20,
		paddingVertical: 10,
		borderRadius: 10,
	},
	icon: {
		fontSize: 18,
		color: colors.red,
	},
	text: {
		color: colors.red,
		fontSize: 15,
	},
});
