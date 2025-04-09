import { Text, TextProps, StyleSheet } from "react-native";

type HeadingProps = TextProps & {
	level?: 1 | 2 | 3;
};

export default function Heading({ level = 1, style, ...props }: HeadingProps) {
	const fontSizes = {
		1: 32,
		2: 24,
		3: 18,
	};

	return (
		<Text
			style={[styles.base, { fontSize: fontSizes[level] }, style]}
			{...props}
		/>
	);
}

const styles = StyleSheet.create({
	base: {
		fontWeight: 900,
	},
});
