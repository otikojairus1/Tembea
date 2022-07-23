
import { Image, StyleSheet, Text, View } from "react-native";
import SwiperScreen from "./screens/swiper";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OriginLocation from "./screens/OriginLocation";
import Origin from "./screens/Origin";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
     <Stack.Navigator>
      <Stack.Screen name="SwiperScreen" options={{ headerShown: false ,headerTitleAlign: "center"}} component={SwiperScreen} />
      <Stack.Screen name="OriginLocationScreen" options={{ headerShown: false ,headerTitleAlign: "center"}} component={OriginLocation} />
      <Stack.Screen name="Origin" options={{ headerShown: false ,headerTitleAlign: "center"}} component={Origin} />
   
    </Stack.Navigator>
    </NavigationContainer>
   
  );
}
