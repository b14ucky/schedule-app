import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import ListElement from "./ShiftListItem";
import { Shift } from "@/components/ui/ShiftDetails";

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
	separator: {
		height: 10,
	},
});
