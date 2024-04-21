import { View, Text, SafeAreaView, TouchableOpacity, FlatList, Image, TextInput, KeyboardAvoidingView, Platform } from "react-native";
import React from "react";
import { useGeneralStyles } from "./styles";
import { PlayerCard } from "../Components/PlayerCard/PlayerCard";
import { Header } from "../Components/Header/Header";
import { Images } from "../assets/media";
import { useCustomHook } from "./Hooks/useCustomHook";
import { isEmpty } from "lodash";

export interface UserListItem {
	name: string
	phase: number
	points: number
	id: string | number[]
}

export const HomeScreen = (): React.JSX.Element => {
  const { styles, width, height } = useGeneralStyles();
  const {
		userList,
		isAddingNew,
		inputValue,
		onChange,
		onPressNewPlayer,
		onSubmitName,
		onRemovePlayer
	} = useCustomHook()
  
  return (
		<SafeAreaView style={styles.container}>
			<KeyboardAvoidingView
				behavior={Platform.OS === "ios" ? "padding" : "height"}
				style={{ flex: 1 }}
			>
				<View style={{ flex: 0.2 }}>
					<Header round={1} />
				</View>
				<View style={{ flex: 0.7 }}>
					<FlatList
						data={userList}
						showsVerticalScrollIndicator={false}
						renderItem={({ item }) => (
							<PlayerCard
								name={item.name}
								phase={item.phase}
								points={item.points}
								onRemove={() => onRemovePlayer(item.id)}
							/>
						)}
						ListEmptyComponent={
							<View
								style={{
									justifyContent: "center",
									alignItems: "center",
									paddingVertical: 20
								}}
							>
								<Image
									resizeMode="contain"
									style={{ width: width * 0.4, height: height * 0.2 }}
									source={Images.generalImages.cards}
								/>
								<Text
									style={[
										styles.title,
										{ color: "white", width: "70%", textAlign: "center" }
									]}
								>
									Crea un nuevo usuario para empezar
								</Text>
							</View>
						}
						ListFooterComponent={
							<TouchableOpacity
								disabled={isAddingNew}
								onPress={onPressNewPlayer}
								style={[
									styles.cardConatiner,
									{ alignItems: "center", justifyContent: "center" }
								]}
							>
								{isAddingNew ? (
									<TextInput
										style={{ height: "100%", width: "70%" }}
										onChangeText={onChange}
										placeholder="Ingrese nombre de jugador"
										value={inputValue}
										onSubmitEditing={onSubmitName}
									/>
								) : (
									<Text style={{ fontSize: 16, fontWeight: "bold" }}>
										Agrega un nuevo jugador...
									</Text>
								)}
							</TouchableOpacity>
						}
					/>
				</View>
				<View
					style={{ flex: 0.1, alignItems: "center", justifyContent: "center" }}
				>
					{!isEmpty(userList) && (
						<TouchableOpacity
							style={[styles.simpleButton, { backgroundColor: "#0891B2" }]}
						>
							<Text style={[styles.subtitle, { color: "#FAFAFA" }]}>
								Comenzar Ronda
							</Text>
						</TouchableOpacity>
					)}
				</View>
			</KeyboardAvoidingView>
		</SafeAreaView>
	)
};
