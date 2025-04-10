import { View, Text, StyleSheet } from "react-native";
import { colors } from "@/constants/Colors";

type Props = {
	date: any;
};

export default function CalendarHeader({ date }: Props) {
	const header = date.toString("MMMM yyyy");

	return (
		<View style={styles.container}>
			<Text style={styles.text}>{header}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
	},
	text: {
		color: colors.black,
		fontSize: 18,
		fontWeight: 600,
	},
});
