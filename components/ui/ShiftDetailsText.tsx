import { Text } from "react-native";
import React from "react";

export default function ShiftDetailsText({
	text,
	data,
}: {
	text: string;
	data?: string | null;
}) {
	return (
		<Text>
			{text}{" "}
			<Text style={{ fontWeight: 500 }}>
				{data ? data : "brak danych"}
			</Text>
		</Text>
	);
}
