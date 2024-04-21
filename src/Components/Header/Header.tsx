import { View, Text, Image } from "react-native"
import React from "react"
import { useGeneralStyles } from "../../Screens/styles"
import { Images } from "../../assets/media"

export interface HeaderProps {
    round: number
}

export const Header = (props: HeaderProps): React.JSX.Element => {
	const { styles, width } = useGeneralStyles()
	const { round } = props
	return (
		<View
			style={{
				width: width * 0.9,
				justifyContent: "center",
				alignItems: "center"
			}}
		>
			<View
				style={{
					width: "100%",
					flexDirection: "row",
					justifyContent: "space-evenly",
                    alignItems: "center",
					marginBottom: 10
				}}
			>
				<Text style={[styles.H1, { color: "white" }]}>Phase 10</Text>
				<Image source={Images.generalImages.logo} resizeMode="contain" style={{ width: 52, height: 52 }} />
			</View>
			<Text style={[styles.H2, { color: "white" }]}>Ronda {round ?? 0}</Text>
		</View>
	)
}