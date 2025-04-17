import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "@/constants/Colors";
import { shadows } from "@/constants/Shadows";

type Props = {
	date: string;
	time_start: string | null;
	time_end: string | null;
	day_type: string | null;
	additional_info: string | null;
};

export default function ShiftListItem({
	date,
	time_start,
	time_end,
	day_type,
	additional_info,
}: Props) {
	const daysOfWeek = [
		"Niedziela",
		"Poniedziałek",
		"Wtorek",
		"Środa",
		"Czwartek",
		"Piątek",
		"Sobota",
	];

	const dateObject = new Date(date);
	const dayOfMonth = dateObject.getDate();
	const dayOfWeek = daysOfWeek[dateObject.getDay()];

	const shiftHours =
		time_start && time_end
			? // time is in format HH:MM:SS so I split on ':' and limit
			  // the size of the array to 2 so that I end up with [HH, MM]
			  // which I can then join with ':' to get HH:MM
			  `${time_start.split(":", 2).join(":")} - ${time_end
					.split(":", 2)
					.join(":")}`
			: day_type
			? day_type
			: additional_info
			? additional_info
			: "";

	return (
		<TouchableOpacity style={[styles.container, shadows.heavier2Shadow]}>
			<View style={styles.dateContainer}>
				<Text style={styles.dayOfMonth}>{dayOfMonth}</Text>
			</View>
			<View style={styles.infoContainer}>
				<Text style={styles.dayOfWeek}>{dayOfWeek}</Text>
				<Text style={styles.shiftHours}>{shiftHours}</Text>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		paddingVertical: 12,
		paddingHorizontal: 26,
		alignItems: "center",
		backgroundColor: colors.teal,
		borderRadius: 20,
		width: "90%",
		marginBottom: 15,
	},
	dateContainer: {
		width: 55,
		height: 55,
		borderColor: colors.whiteish,
		borderWidth: 3,
		borderRadius: 5,
		justifyContent: "center",
		alignItems: "center",
		marginRight: 16,
	},
	dayOfMonth: {
		color: colors.whiteish,
		fontWeight: "bold",
		fontSize: 24,
	},
	infoContainer: {
		flex: 1,
		justifyContent: "center",
	},
	dayOfWeek: {
		fontSize: 20,
		fontWeight: "600",
		color: colors.black,
	},
	shiftHours: {
		fontSize: 16,
		color: colors.darkGray,
		marginTop: 2,
	},
});
