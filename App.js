import { Image, StyleSheet, Text, View } from "react-native";
import SwiperScreen from "./screens/swiper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OriginLocation from "./screens/OriginLocation";
import Origin from "./screens/Origin";
import Weather from "./screens/Weather";
import Navigate from "./screens/Navigate";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SwiperScreen">
        <Stack.Screen
          name="SwiperScreen"
          options={{ headerShown: false, headerTitleAlign: "center" }}
          component={SwiperScreen}
        />
        <Stack.Screen
          name="OriginLocationScreen"
          options={{ headerShown: false, headerTitleAlign: "center" }}
          component={OriginLocation}
        />
        <Stack.Screen
          name="Origin"
          options={{ headerShown: false, headerTitleAlign: "center" }}
          component={Origin}
        />
        <Stack.Screen
          name="Weather"
          options={{ headerShown: false, headerTitleAlign: "center" }}
          component={Weather}
        />
        <Stack.Screen
          name="Navigate"
          options={{ headerShown: false, headerTitleAlign: "center" }}
          component={Navigate}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
