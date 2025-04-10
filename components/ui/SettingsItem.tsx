import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { colors } from "@/constants/Colors";
import { ElementType } from "react";
import { Feather } from "@expo/vector-icons";
import { shadows } from "@/constants/Shadows";

type Props = {
	text: string;
	Icon: ElementType;
	iconName: string;
};

export default function SettingsItem({ text, Icon, iconName }: Props) {
	return (
		<TouchableOpacity style={[styles.container, shadows.lightShadow]}>
			<Icon name={iconName} style={styles.icon} />
			<Text style={styles.text}>{text}</Text>
			<Feather
				name={"chevron-right"}
				style={[styles.icon, styles.iconChevron]}
			/>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.white,
		width: "100%",
		paddingHorizontal: 25,
		paddingVertical: 15,
		marginBottom: 10,
		borderRadius: 20,
		flexDirection: "row",
		alignItems: "center",
	},
	text: {
		fontSize: 18,
		fontWeight: 500,
		color: colors.black,
		paddingLeft: 10,
	},
	icon: {
		fontSize: 20,
		fontWeight: 500,
		color: colors.black,
	},
	iconChevron: {
		fontSize: 30,
		position: "absolute",
		top: "50%",
		right: "5%",
	},
});
