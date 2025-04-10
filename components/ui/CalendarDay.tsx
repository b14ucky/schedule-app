import { View, Text, StyleSheet } from "react-native";
import { colors } from "@/constants/Colors";

type Props = {
	day: any;
	isDisabled: boolean;
	isToday: boolean;
};

export default function CalendarDay({ day, isDisabled, isToday }: Props) {
	const color = isToday ? colors.teal : colors.grayish;
	return (
		<View
			style={[
				styles.container,
				{
					borderColor: isDisabled ? "transparent" : color,
					borderWidth: isToday ? 3 : 1,
				},
			]}
		>
			<Text
				style={[
					styles.text,
					{ color: color, fontWeight: isToday ? 700 : 200 },
				]}
			>
				{day}
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: 40,
		height: 40,
		backgroundColor: colors.whiteish,
		alignItems: "center",
		justifyContent: "center",

		borderWidth: 1,
		borderRadius: 3,
	},
	text: {
		fontSize: 18,
	},
});
