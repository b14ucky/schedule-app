import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function IndexLayout() {
	return (
		<>
			<StatusBar style="dark" />
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
		</>
	);
}
