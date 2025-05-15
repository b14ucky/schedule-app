import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import InputField from "@/components/ui/InputField";
import { colors } from "@/constants/Colors";
import { shadows } from "@/constants/Shadows";
import { Feather } from "@expo/vector-icons";
import axios from "axios";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
	StyleSheet,
	View,
	KeyboardAvoidingView,
	Platform,
	Text,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { useAuth } from "@/contexts/AuthContext";
import { baseURL } from "@/lib/api";
import ErrorAlert from "@/components/ui/ErrorAlert";

export default function LoginScreen() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState<string | null>(null);
	const router = useRouter();

	const { login } = useAuth();

	const handleLogin = async () => {
		try {
			const response = await axios.post(`${baseURL}/auth/token/`, {
				email,
				password,
			});

			await login(response.data.access, response.data.refresh);

			router.replace("/");
		} catch (err: any) {
			switch (err.status) {
				case 400:
					setError("Uzupełnij wszystkie pola.");
					break;
				case 401:
					setError("Niepoprawny adres e-mail lub hasło.");
					break;
				default:
					setError("Nieznany błąd.");
			}
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
						{error ? <ErrorAlert error={error} /> : <></>}
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
