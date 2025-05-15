import React from "react";
import { Text, FlatList, StyleSheet } from "react-native";
import ListElement from "./ShiftListItem";
import { Shift } from "@/components/ui/ShiftDetails";
import { colors } from "@/constants/Colors";

type Props = {
	data: Shift[];
	onRefresh: () => void;
	refreshing: boolean;
	onPress: (item: Shift) => void;
};

export default function ShiftList({
	data,
	onRefresh,
	refreshing,
	onPress,
}: Props) {
	return (
		<FlatList
			showsVerticalScrollIndicator={false}
			data={data}
			onRefresh={onRefresh}
			refreshing={refreshing}
			keyExtractor={(item) => item.id.toString()}
			ListEmptyComponent={
				<Text style={styles.listEmptyText}>
					{"Wolne jak nigdy! Na razie brak zaplanowanych dni."}
				</Text>
			}
			renderItem={({ item }) => (
				<ListElement
					date={item.date}
					time_start={item.time_start}
					time_end={item.time_end}
					day_type={item.day_type}
					additional_info={item.additional_info}
					onPress={() => onPress(item)}
				/>
			)}
			contentContainerStyle={styles.container}
		/>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingVertical: 10,
		alignItems: "center",
	},
	listEmptyText: {
		color: colors.black,
		fontSize: 16,
		padding: 30,
		marginTop: 20,
		textAlign: "center",
		fontWeight: 500,
	},
});
