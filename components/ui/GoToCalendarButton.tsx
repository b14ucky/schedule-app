import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { colors } from "@/constants/Colors";
import { Feather } from "@expo/vector-icons";
import { Link } from "expo-router";

export default function GoToCalendarButton() {
	return (
		<TouchableOpacity style={styles.button}>
			<Feather
				name="calendar"
				size={16}
				color={colors.black}
				style={styles.icon}
			/>
			<Link href={"/calendar"}>
				<Text style={styles.text}>PRZEJDŹ DO KALENDARZA</Text>
			</Link>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	text: {
		color: colors.black,
		fontSize: 18,
		fontWeight: "800",
	},
	icon: {
		marginRight: 6,
	},
	button: {
		flexDirection: "row",
		alignItems: "center",
	},
});
