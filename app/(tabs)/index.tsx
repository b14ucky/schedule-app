import { StyleSheet, Text, View } from "react-native";
import { colors } from "@/constants/Colors";

export default function Index() {
	return (
		<View style={styles.container}>
			<Text>Hello world!</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: colors.whiteish,
	},
});
