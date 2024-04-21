import { View } from "react-native";
import React from "react";
import { HomeScreen } from "./src/Screens/HomeScreen";

export const App = (): React.JSX.Element => {
  return (
    <View style={{ flex: 1 }}>
      <HomeScreen />
    </View>
  );
};
