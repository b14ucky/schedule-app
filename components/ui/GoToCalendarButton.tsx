import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { colors } from "@/constants/Colors";
import { Feather } from "@expo/vector-icons";

type Props = {
	onPress: () => void;
};

const GoToCalendarButton = ({ onPress }: Props) => {
	return (
		<TouchableOpacity onPress={onPress} style={styles.button}>
			<Feather
				name="calendar"
				size={16}
				color={colors.black}
				style={styles.icon}
			/>
			<Text style={styles.text}>PRZEJDŹ DO KALENDARZA</Text>
		</TouchableOpacity>
	);
};

export default GoToCalendarButton;

const styles = StyleSheet.create({
	text: {
		color: colors.black,
		fontSize: 18,
		fontWeight: "800",
	},
	icon: {
		marginRight: 6,
	},
	button: {
		flexDirection: "row",
		alignItems: "center",
	},
});
