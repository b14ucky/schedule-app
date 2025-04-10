import {
	Text,
	StyleSheet,
	TouchableOpacity,
	TextProps,
	TouchableOpacityProps,
} from "react-native";
import { ElementType } from "react";
import { colors } from "@/constants/Colors";
import { shadows } from "@/constants/Shadows";

type Props = {
	text: string;
	Icon?: ElementType;
	iconName?: string;
	textProps?: TextProps;
	buttonProps?: TouchableOpacityProps;
	onPress?: () => void;
};

export default function Button({
	text,
	Icon,
	iconName,
	textProps,
	buttonProps,
	onPress,
}: Props) {
	return (
		<TouchableOpacity
			onPress={onPress}
			style={[
				styles.baseButton,
				shadows.heavier2Shadow,
				buttonProps ? buttonProps.style : {},
			]}
		>
			{Icon ? (
				<Icon
					style={[styles.baseIcon, textProps ? textProps.style : {}]}
					name={iconName}
				/>
			) : null}
			<Text style={[styles.baseText, textProps ? textProps.style : {}]}>
				{text}
			</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	baseButton: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: colors.black,
		paddingHorizontal: 20,
		paddingVertical: 10,
		borderRadius: 10,
	},
	baseText: {
		fontSize: 18,
		color: colors.white,
		paddingLeft: 10,
	},
	baseIcon: {
		fontSize: 18,
		color: colors.white,
	},
});
