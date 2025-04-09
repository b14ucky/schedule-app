import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import ListElement from "./ShiftListItem";

type Shift = {
	id: string;
	dayOfMonth: number;
	dayOfWeek: string;
	shiftHours: string;
};

type Props = {
	data: Shift[];
};

export default function ShiftList({ data }: Props) {
	return (
		<FlatList
			data={data}
			keyExtractor={(item) => item.id}
			renderItem={({ item }) => (
				<ListElement
					dayOfMonth={item.dayOfMonth}
					dayOfWeek={item.dayOfWeek}
					shiftHours={item.shiftHours}
				/>
			)}
			ItemSeparatorComponent={() => <View style={styles.separator} />}
			contentContainerStyle={styles.container}
		/>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingVertical: 10,
	},
	separator: {
		height: 10,
	},
});
