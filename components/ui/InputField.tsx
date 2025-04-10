import { colors } from "@/constants/Colors";
import { shadows } from "@/constants/Shadows";
import { Text, StyleSheet, View, TextInput } from "react-native";

type Props = {
	value: string;
	onChangeText: (text: string) => void;
	label: string;
	placeholder: string;
	secureTextEntry?: boolean;
	autoCorrect?: boolean;
	error?: string;
	keyboardType?:
		| "default"
		| "email-address"
		| "numeric"
		| "phone-pad"
		| undefined;
	autoComplete?: any;
	autoFocus?: boolean;
};

export default function InputField({
	value,
	onChangeText,
	label,
	placeholder,
	secureTextEntry = false,
	autoCorrect = false,
	error,
	keyboardType = "default",
	autoComplete = "off",
	autoFocus = false,
}: Props) {
	return (
		<View style={styles.container}>
			<Text style={styles.label}>{label}</Text>
			<TextInput
				value={value}
				onChangeText={onChangeText}
				placeholder={placeholder}
				keyboardType={keyboardType}
				style={[styles.field, shadows.lightShadow]}
				placeholderTextColor={colors.grayish}
				autoCorrect={autoCorrect}
				secureTextEntry={secureTextEntry}
				autoComplete={autoComplete}
				autoFocus={autoFocus}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
	},
	field: {
		backgroundColor: colors.white,
		width: "100%",
		paddingHorizontal: 25,
		paddingVertical: 15,
		borderRadius: 20,
	},
	label: {
		paddingVertical: 10,
		paddingHorizontal: 20,
		fontSize: 16,
		fontWeight: 600,
	},
});
