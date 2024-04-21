import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useGeneralStyles } from "../../Screens/styles";

export interface PlayerCardProps {
	points: number
	name: string
	phase: number
	onRemove: () => void
}

export const PlayerCard = (props: PlayerCardProps): React.JSX.Element => {
	const { styles } = useGeneralStyles()
	const { points, name, phase, onRemove } = props
	return (
		<TouchableOpacity
			onLongPress={onRemove}
			style={styles.cardConatiner}
		>
			<View style={{ flex: 0.2 }}>
				<View style={styles.circle}>
					<Text style={[styles.subtitle, { color: "white" }]}>
						{name.slice(0, 2).toUpperCase()}
					</Text>
				</View>
			</View>
			<View style={{ flex: 0.6 }}>
				<View style={{ marginLeft: 20 }}>
					<Text style={styles.subtitle}>{points} Puntos</Text>
					<Text style={{ fontSize: 18 }}>{name}</Text>
				</View>
			</View>
			<View style={{ flex: 0.2, alignItems: "center" }}>
				<Text>Fase</Text>
				<Text style={styles.title}>{phase}</Text>
			</View>
		</TouchableOpacity>
	)
}
