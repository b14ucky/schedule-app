import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import InputField from "@/components/ui/InputField";
import { colors } from "@/constants/Colors";
import { shadows } from "@/constants/Shadows";
import { Feather } from "@expo/vector-icons";
import axios from "axios";
import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, View, KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import * as SecureStore from "expo-secure-store";

export default function LoginScreen() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState<string | null>(null);
	const router = useRouter();

	const handleLogin = async () => {
		try {
			const response = await axios.post("lcoalhost", {
				email,
				password,
			});

			await SecureStore.setItemAsync(
				"access_token",
				response.data.access
			);
			await SecureStore.setItemAsync(
				"refresh_token",
				response.data.refresh
			);

			router.push("/(tabs)/(index)");
		} catch (err) {
			setError(`Error: ${err}`);
			console.log(error);
		}
	};

	return (
		<SafeAreaProvider>
			<KeyboardAvoidingView
				style={{ flex: 1 }}
				behavior={Platform.OS === "ios" ? "padding" : "height"}
			>
				<SafeAreaView style={styles.container}>
					<View style={[styles.circle, shadows.heavier2Shadow]}>
						<View style={styles.headingContainer}>
							<Heading style={styles.heading} level={1}>
								Zaloguj się
							</Heading>
						</View>
					</View>
					<View style={styles.form}>
						<InputField
							value={email}
							onChangeText={setEmail}
							label={"E-mail:"}
							placeholder={"Wpisz swój adres email"}
							keyboardType="email-address"
							autoComplete={"email"}
							autoFocus={true}
						/>
						<InputField
							value={password}
							onChangeText={setPassword}
							label={"Hasło:"}
							placeholder={"Wpisz swoje hasło"}
							secureTextEntry={true}
							autoComplete={"password"}
						/>
						<Button
							text={"Zaloguj"}
							Icon={Feather}
							iconName={"log-in"}
							buttonProps={{
								style: { ...styles.button },
							}}
							onPress={handleLogin}
						/>
					</View>
				</SafeAreaView>
			</KeyboardAvoidingView>
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: colors.whiteish,
		overflow: "hidden",
	},
	circle: {
		width: "150%",
		aspectRatio: 1,
		marginTop: -450,
		marginLeft: -200,
		backgroundColor: colors.teal,
		borderRadius: "100%",
	},
	headingContainer: {
		position: "relative",
		width: "100%",
		height: "100%",
	},
	heading: {
		position: "absolute",
		bottom: "20%",
		left: "40%",
		color: colors.white,
		fontSize: 42,
	},
	form: {
		width: "80%",
		paddingTop: 25,
		alignItems: "center",
	},
	button: {
		marginTop: 35,
		width: "50%",
	},
});
