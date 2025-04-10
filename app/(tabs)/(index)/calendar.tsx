import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Calendar as RNCalendar, LocaleConfig } from "react-native-calendars";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { colors } from "@/constants/Colors";
import CalendarHeader from "@/components/ui/CalendarHeader";
import CalendarDay from "@/components/ui/CalendarDay";
import Heading from "@/components/ui/Heading";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

type dayProps = {
	date: any;
	state: string;
};

export default function CalendarComponent() {
	LocaleConfig.locales["pl"] = {
		monthNames: [
			"Styczeń",
			"Luty",
			"Marzec",
			"Kwiecień",
			"Maj",
			"Czerwiec",
			"Lipiec",
			"Sierpień",
			"Wrzesień",
			"Październik",
			"Listopad",
			"Grudzień",
		],
		dayNames: [
			"Niedziela",
			"Poniedziałek",
			"Wtorek",
			"Środa",
			"Czwartek",
			"Piątek",
			"Sobota",
		],
		dayNamesShort: ["N", "Pn", "Wt", "Śr", "Cz", "Pt", "So"],
		today: "Dzisiaj",
	};

	LocaleConfig.defaultLocale = "pl";

	return (
		<SafeAreaProvider>
			<SafeAreaView style={styles.container}>
				<View style={styles.header}>
					<TouchableOpacity
						style={styles.backButton}
						onPress={() => router.back()}
					>
						<Ionicons
							name="arrow-back"
							size={24}
							color={colors.black}
						/>
					</TouchableOpacity>
					<Heading level={2}>Kalendarz</Heading>
				</View>
				<View style={styles.mainContainer}>
					<RNCalendar
						theme={{
							calendarBackground: "transparent",
							arrowColor: colors.teal,
						}}
						firstDay={1}
						enableSwipeMonths={true}
						style={styles.calendar}
						renderHeader={(date: any) => {
							return <CalendarHeader date={date} />;
						}}
						headerStyle={styles.calendarHeader}
						dayComponent={({ date, state }: dayProps) => {
							const isToday =
								date.dateString ===
								new Date().toISOString().split("T")[0];
							return (
								<CalendarDay
									day={date.day}
									isDisabled={state === "disabled"}
									isToday={isToday}
								/>
							);
						}}
					/>
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
	header: {
		padding: 10,
		marginTop: 10,
		marginBottom: 25,
		backgroundColor: colors.white,
		width: "95%",
		borderRadius: 10,
		position: "relative",
		justifyContent: "center",
	},
	mainContainer: {
		width: "97%",
	},
	calendar: {
		backgroundColor: colors.whiteish,
	},
	calendarHeader: {
		backgroundColor: colors.white,
		borderRadius: 10,
	},
	backButton: {
		position: "absolute",
		left: "1%",
		padding: 10,
		zIndex: 1,
	},
});
