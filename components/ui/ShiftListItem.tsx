import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "@/constants/Colors";

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
		<TouchableOpacity style={styles.container}>
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
		paddingHorizontal: 16,
		alignItems: "center",
		backgroundColor: colors.teal,
		borderRadius: 10,
	},
	dateContainer: {
		width: 55,
		height: 55,
		borderColor: colors.whiteish,
		borderWidth: 2,
		borderRadius: 3,
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
		color: colors.gray,
		marginTop: 2,
	},
});
