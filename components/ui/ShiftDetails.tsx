import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { StyleSheet, Text } from "react-native";
import Heading from "./Heading";
import { colors } from "@/constants/Colors";
import { shadows } from "@/constants/Shadows";
import ShiftDetailsText from "./ShiftDetailsText";

export type Shift = {
	id: number;
	date: string;
	time_start: string | null;
	time_end: string | null;
	day_type: string | null;
	additional_info: string | null;
};

export type ShiftDetailsRef = {
	open: (shift: Shift) => void;
};

const ShiftDetails = forwardRef<ShiftDetailsRef>((props, ref) => {
	const sheetRef = useRef<BottomSheet>(null);
	const [shift, setShift] = useState<Shift | null>(null);
	const [isSheetOpen, setIsSheetOpen] = useState(false);

	useImperativeHandle(ref, () => ({
		open: (newShift: Shift) => {
			setShift(newShift);
			sheetRef.current?.snapToIndex(0);
		},
	}));

	const handleSheetChange = (index: number) => {
		setIsSheetOpen(index !== -1);
	};

	let dayType = null;

	if (shift) {
		switch (shift.day_type) {
			case "WORK":
				dayType = "Praca";
				break;
			case "VACATION":
				dayType = "Urlop";
				break;
			case "SICK_LEAVE":
				dayType = "L4";
				break;
			case "NON_WORKING_DAY":
				dayType = "Dzień wolny (grafik)";
				break;
			case "AVAILABILITY_OFF":
				dayType = "Dzień wolny (niedyspozycyjność)";
				break;
			case "REQUESTED_OFF":
				dayType = "Wolne na prośbę";
				break;
		}
	}

	// date in format yyyy-mm-dd
	const dateSplit = shift?.date ? shift.date.split("-") : null;
	// date in format dd.mm.yyyy
	const date = dateSplit
		? `${dateSplit[2]}.${dateSplit[1]}.${dateSplit[0]}`
		: "";

	const timeStart = shift?.time_start
		? shift?.time_start.split(":", 2).join(":")
		: null;
	const timeEnd = shift?.time_end
		? shift?.time_end.split(":", 2).join(":")
		: null;
	const shiftTime = timeStart && timeEnd ? `${timeStart} - ${timeEnd}` : null;

	return (
		<BottomSheet
			ref={sheetRef}
			index={-1}
			onChange={handleSheetChange}
			enablePanDownToClose
			snapPoints={["30%", "60%"]}
			style={isSheetOpen ? shadows.heavier2Shadow : {}}
			backgroundStyle={{ backgroundColor: colors.whiteish }}
		>
			<BottomSheetView style={styles.container}>
				<Heading style={{ textAlign: "center" }}>{date}</Heading>
				<Text style={styles.shiftDetailsText}>Szczegóły zmiany</Text>
				<ShiftDetailsText text={"Godziny pracy:"} data={shiftTime} />
				<ShiftDetailsText text={"Charakter dnia:"} data={dayType} />
				<ShiftDetailsText
					text={"Dodatkowe informacje:"}
					data={shift?.additional_info}
				/>
			</BottomSheetView>
		</BottomSheet>
	);
});

const styles = StyleSheet.create({
	container: {
		width: "100%",
		padding: 25,
	},
	shiftDetailsText: {
		marginVertical: 15,
		fontSize: 16,
		fontWeight: 600,
		textAlign: "center",
	},
});

export default ShiftDetails;
