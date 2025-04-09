import { Stack } from "expo-router";

export default function IndexLayout() {
	return (
		<Stack>
			<Stack.Screen
				name="index"
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="calendar"
				options={{
					headerShown: false,
				}}
			/>
		</Stack>
	);
}
