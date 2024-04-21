import { useState } from "react"
import { UserListItem } from "../HomeScreen"
import uuid from "react-native-uuid"
import { Alert } from "react-native"
import { isEmpty } from "lodash"

export enum StatusType {
    Pending = "pending",
    InProgress = "inProgress",
    Finished = "finised"
}

export const useCustomHook = () => {
	const [userList, setUserList] = useState<UserListItem[]>([])
	const [isAddingNew, setIsAddingNew] = useState<boolean>(false)
	const [inputValue, setInputValue] = useState("")
    const [status, setStatus] = useState(StatusType.Pending)

	const onChange = (text: string): void => {
		setInputValue(text)
	}
	const onClear = (): void => {
		setInputValue("")
	}

	const onSubmitName = () => {
		setIsAddingNew(false)
		if (!isEmpty(inputValue)) {
			const temp = userList
			temp.push({
				name: inputValue,
				phase: 1,
				points: 0,
				id: uuid.v4()
			})
			setUserList(temp)
			onClear()
		} else {
            Alert.alert("Nombre Invalido", "El nombre no puede ser vacío", [
							{
								text: "Cancel",
								style: "cancel"
							},
							{
								text: "OK",
							}
						])
        }
	}

	const onRemovePlayer = (id: string | number[]) => {
		Alert.alert("Eliminar Jugador", "¿Deseas Eliminar el Jugador?", [
			{
				text: "Cancel",
				onPress: () => console.log("Cancel Pressed"),
				style: "cancel"
			},
			{
				text: "OK",
				onPress: () => {
					const temp = userList.filter(item => item.id !== id)
					setUserList(temp)
				}
			}
		])
	}

	const onPressNewPlayer = () => {
		setIsAddingNew(true)
	}

    const handleRound = () => {

    }

	return {
		userList,
		isAddingNew,
		inputValue,
		onChange,
		onClear,
		onPressNewPlayer,
		onSubmitName,
		onRemovePlayer
	}
}
