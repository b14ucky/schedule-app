import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import ListElement from "./ShiftListItem";

type Shift = {
	id: number;
	date: string;
	time_start: string | null;
	time_end: string | null;
	day_type: string | null;
	additional_info: string | null;
};

type Props = {
	data: Shift[];
	onRefresh: () => void;
	refreshing: boolean;
};

export default function ShiftList({ data, onRefresh, refreshing }: Props) {
	return (
		<FlatList
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
