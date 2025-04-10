import { StyleSheet, View, Text } from "react-native";
import { colors } from "@/constants/Colors";
import Heading from "@/components/ui/Heading";
import ShiftList from "@/components/ui/ShiftList";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import GoToCalendarButton from "@/components/ui/GoToCalendarButton";

export default function Index() {
	const mockData = [
		{
			id: "1",
			dayOfMonth: 1,
			dayOfWeek: "Wtorek",
			shiftHours: "15:00 – 22:00",
		},
		{
			id: "2",
			dayOfMonth: 2,
			dayOfWeek: "Środa",
			shiftHours: "wolne",
		},
		{
			id: "3",
			dayOfMonth: 3,
			dayOfWeek: "Czwartek",
			shiftHours: "13:00 - 21:00",
		},
		{
			id: "4",
			dayOfMonth: 4,
			dayOfWeek: "Piątek",
			shiftHours: "wolne",
		},
		{
			id: "5",
			dayOfMonth: 5,
			dayOfWeek: "Sobota",
			shiftHours: "12:00 - 20:00",
		},
		{
			id: "6",
			dayOfMonth: 6,
			dayOfWeek: "Niedziela",
			shiftHours: "wolne",
		},
		{
			id: "7",
			dayOfMonth: 7,
			dayOfWeek: "Poniedziałek",
			shiftHours: "13:00 - 21:00",
		},
		{
			id: "8",
			dayOfMonth: 8,
			dayOfWeek: "Wtorek",
			shiftHours: "wolne",
		},
		{
			id: "9",
			dayOfMonth: 9,
			dayOfWeek: "Środa",
			shiftHours: "wolne",
		},
		{
			id: "10",
			dayOfMonth: 10,
			dayOfWeek: "Czwartek",
			shiftHours: "wolne",
		},
		{
			id: "11",
			dayOfMonth: 11,
			dayOfWeek: "Piątek",
			shiftHours: "14:00 - 22:00",
		},
		{
			id: "12",
			dayOfMonth: 12,
			dayOfWeek: "Sobota",
			shiftHours: "14:00 - 22:00",
		},
		{
			id: "13",
			dayOfMonth: 13,
			dayOfWeek: "Niedziela",
			shiftHours: "wolne",
		},
		{
			id: "14",
			dayOfMonth: 14,
			dayOfWeek: "Poniedziałek",
			shiftHours: "15:00 - 22:00",
		},
		{
			id: "15",
			dayOfMonth: 15,
			dayOfWeek: "Wtorek",
			shiftHours: "wolne",
		},
		{
			id: "16",
			dayOfMonth: 16,
			dayOfWeek: "Środa",
			shiftHours: "wolne",
		},
		{
			id: "17",
			dayOfMonth: 17,
			dayOfWeek: "Czwartek",
			shiftHours: "wolne",
		},
		{
			id: "18",
			dayOfMonth: 18,
			dayOfWeek: "Piątek",
			shiftHours: "15:00 - 23:00",
		},
		{
			id: "19",
			dayOfMonth: 19,
			dayOfWeek: "Sobota",
			shiftHours: "wolne",
		},
		{
			id: "20",
			dayOfMonth: 20,
			dayOfWeek: "Niedziela",
			shiftHours: "wolne",
		},
		{
			id: "21",
			dayOfMonth: 21,
			dayOfWeek: "Poniedziałek",
			shiftHours: "wolne",
		},
		{
			id: "22",
			dayOfMonth: 22,
			dayOfWeek: "Wtorek",
			shiftHours: "15:00 - 22:00",
		},
		{
			id: "23",
			dayOfMonth: 23,
			dayOfWeek: "Środa",
			shiftHours: "15:00 - 22:00",
		},
		{
			id: "24",
			dayOfMonth: 24,
			dayOfWeek: "Czwartek",
			shiftHours: "wolne",
		},
		{
			id: "25",
			dayOfMonth: 25,
			dayOfWeek: "Piątek",
			shiftHours: "wolne",
		},
		{
			id: "26",
			dayOfMonth: 26,
			dayOfWeek: "Sobota",
			shiftHours: "15:00 - 23:00",
		},
		{
			id: "27",
			dayOfMonth: 27,
			dayOfWeek: "Niedziela",
			shiftHours: "wolne",
		},
		{
			id: "28",
			dayOfMonth: 28,
			dayOfWeek: "Poniedziałek",
			shiftHours: "15:00 - 22:00",
		},
		{
			id: "29",
			dayOfMonth: 29,
			dayOfWeek: "Wtorek",
			shiftHours: "wolne",
		},
		{
			id: "30",
			dayOfMonth: 30,
			dayOfWeek: "Środa",
			shiftHours: "wolne",
		},
	];

	return (
		<SafeAreaProvider>
			<SafeAreaView style={styles.container}>
				<View style={styles.headingContainer}>
					<Heading>TWÓJ GRAFIK</Heading>
				</View>
				<View style={styles.mainContainer}>
					<ShiftList data={mockData} />
				</View>
				<View style={styles.buttonContainer}>
					<GoToCalendarButton />
				</View>
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
	},
	mainContainer: {
		flex: 1,
		width: "95%",
	},
	buttonContainer: {
		height: 50,
		justifyContent: "center",
	},
});
