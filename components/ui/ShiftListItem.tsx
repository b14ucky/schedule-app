import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "@/constants/Colors";
import { shadows } from "@/constants/Shadows";

type Props = {
	dayOfMonth: number;
	dayOfWeek: string;
	shiftHours: string;
};

export default function ShiftListItem({
	dayOfMonth,
	dayOfWeek,
	shiftHours,
}: Props) {
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
