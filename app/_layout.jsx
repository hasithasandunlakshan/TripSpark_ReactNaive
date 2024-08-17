import { Stack } from "expo-router";
import { CreateTripContext } from "../context/createTripContext";
import { useState } from "react";
import { useFonts } from "expo-font";
import { View, Text } from "react-native";

export default function RootLayout() {
  const [tripData, setTripData] = useState([]);
  
  const [fontsLoaded] = useFonts({
    'poppins': require("../assets/fonts/Poppins-Black.ttf"),
    'popitalic': require("../assets/fonts/Poppins-BlackItalic.ttf"),
    'poppinsregular': require("../assets/fonts/Poppins-Light.ttf"),
    'poppinsmedium': require("../assets/fonts/Poppins-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <CreateTripContext.Provider value={{ tripData, setTripData }}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
      </Stack>
    </CreateTripContext.Provider>
  );
}
