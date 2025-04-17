import { View, Text, StyleSheet } from "react-native";
import { colors } from "@/constants/Colors";

type Props = {
	day: any;
	isDisabled: boolean;
	isToday: boolean;
	marking?: any;
};

export default function CalendarDay({
	day,
	isDisabled,
	isToday,
	marking,
}: Props) {
	const color = isToday ? colors.teal : colors.grayish;
	const markingColor = marking
		? marking.dayType === "WORK"
			? colors.darkerGreen
			: marking.dayType === "VACATION"
			? colors.teal
			: "transparent"
		: "transparent";

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
					{
						color:
							markingColor !== "transparent"
								? colors.white
								: color,
						fontWeight: isToday ? 700 : 200,
						backgroundColor: markingColor,
					},
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
		textAlign: "center",
		lineHeight: 30,
		fontSize: 18,
		width: 30,
		aspectRatio: 1,

		borderRadius: 100,
	},
});
