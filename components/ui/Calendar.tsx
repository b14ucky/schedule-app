import { StyleSheet } from "react-native";
import { Calendar as RNCalendar, LocaleConfig } from "react-native-calendars";
import CalendarHeader from "@/components/ui/CalendarHeader";
import CalendarDay from "@/components/ui/CalendarDay";
import { colors } from "@/constants/Colors";
import { shadows } from "@/constants/Shadows";
import { useEffect, useState } from "react";
import api from "@/lib/api";

type dayProps = {
	date: any;
	state: string;
	marking?: any;
};

export default function Calendar() {
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

	const [markedDates, setMarkedDates] = useState({});
	const [error, setError] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState(true);

	const getScheduleMarking = async (month: number, year: number) => {
		setIsLoading(true);

		try {
			const response = await api.get(
				`/api/schedule/?month=${month}&year=${year}`
			);

			setMarkedDates(
				response.data.reduce((acc: any, item: any) => {
					acc[item.date] = { marked: true, dayType: item.day_type };
					return acc;
				})
			);
		} catch (err) {
			setError(`Error: ${err}`);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		getScheduleMarking(new Date().getMonth() + 1, new Date().getFullYear());
	}, []);

	return (
		<RNCalendar
			displayLoadingIndicator={isLoading}
			onMonthChange={(date: any) =>
				getScheduleMarking(date.month, date.year)
			}
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
			headerStyle={[styles.calendarHeader, shadows.lightShadow]}
			dayComponent={({ date, state, marking }: dayProps) => {
				const isToday =
					date.dateString === new Date().toISOString().split("T")[0];
				return (
					<CalendarDay
						day={date.day}
						isDisabled={state === "disabled"}
						isToday={isToday}
						marking={marking}
					/>
				);
			}}
			markedDates={markedDates}
		/>
	);
}

const styles = StyleSheet.create({
	calendar: {
		backgroundColor: colors.whiteish,
	},
	calendarHeader: {
		backgroundColor: colors.white,
		borderRadius: 10,
		marginBottom: 15,
	},
});
