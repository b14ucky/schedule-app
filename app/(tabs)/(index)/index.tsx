import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import { colors } from "@/constants/Colors";
import Heading from "@/components/ui/Heading";
import ShiftList from "@/components/ui/ShiftList";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import GoToCalendarButton from "@/components/ui/GoToCalendarButton";
import { useEffect, useRef, useState } from "react";
import api from "@/lib/api";
import ShiftDetails, {
	ShiftDetailsRef,
	Shift,
} from "@/components/ui/ShiftDetails";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Index() {
	type ResponseData = {
		id: number;
		date: string;
		time_start: string | null;
		time_end: string | null;
		day_type: string | null;
		additional_info: string | null;
	};

	const [schedule, setSchedule] = useState<ResponseData[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isRefreshing, setIsRefreshing] = useState(true);
	const [error, setError] = useState<string | null>(null);

	const shiftDetailsRef = useRef<ShiftDetailsRef>(null);
	const handlePress = (shift: Shift) => {
		console.log("test");
		shiftDetailsRef.current?.open(shift);
	};

	const getSchedule = async () => {
		setIsRefreshing(true);

		try {
			const response = await api.get(
				`/api/schedule/?month=${
					new Date().getMonth() + 1
				}&year=${new Date().getFullYear()}`
			);

			setSchedule(response.data);
		} catch (err) {
			setError(`Error: ${err}`);
		} finally {
			setIsLoading(false);
			setIsRefreshing(false);
		}
	};

	useEffect(() => {
		getSchedule();
	}, []);

	return (
		<SafeAreaProvider>
			<SafeAreaView style={{ flex: 1, backgroundColor: colors.whiteish }}>
				<GestureHandlerRootView style={styles.container}>
					<View style={styles.headingContainer}>
						<Heading>TWÓJ GRAFIK</Heading>
					</View>
					<View style={styles.mainContainer}>
						{isLoading ? (
							<ActivityIndicator size="large" />
						) : (
							<ShiftList
								data={schedule}
								onRefresh={getSchedule}
								refreshing={isRefreshing}
								onPress={handlePress}
							/>
						)}
					</View>
					<View style={styles.buttonContainer}>
						<GoToCalendarButton />
					</View>
					<ShiftDetails ref={shiftDetailsRef} />
				</GestureHandlerRootView>
			</SafeAreaView>
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		backgroundColor: colors.whiteish,
	},
	headingContainer: {
		padding: 15,
		width: "100%",
	},
	mainContainer: {
		flex: 1,
		width: "100%",
		justifyContent: "center",
	},
	buttonContainer: {
		height: 50,
		justifyContent: "center",
	},
});
