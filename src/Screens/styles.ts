import { StyleSheet, useWindowDimensions } from "react-native"

export const useGeneralStyles = () => {
	const { height, width } = useWindowDimensions()
	const styles = StyleSheet.create({
		container: {
			flex: 1,
			justifyContent: "center",
			alignItems: "center",
			backgroundColor: "#356290"
		},
		cardConatiner: {
			backgroundColor: "rgb(240, 240, 240)",
			width: width * 0.9,
			height: height * 0.1,
			paddingHorizontal: 15,
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "center",
			borderRadius: 24,
			marginBottom: 40
		},
		circle: {
			width: 56,
			height: 56,
			borderRadius: 100,
			backgroundColor: "#059669",
			justifyContent: "center",
			alignItems: "center"
		},
		H1: {
			fontSize: 36,
			fontWeight: "bold"
		},
		H2: {
			fontSize: 30,
			fontWeight: "bold"
		},
		title: {
			fontSize: 20,
			fontWeight: "bold"
		},
		subtitle: {
			fontSize: 16,
			fontWeight: "bold"
		},
		simpleButton: {
			width: width * 0.86,
			height: height * 0.06,
			alignItems: "center",
			justifyContent: "center",
			borderRadius: 24
		}
	})

	return {
		styles,
		height,
		width
	}
}
