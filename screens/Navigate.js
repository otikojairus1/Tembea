import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import * as Speech from "expo-speech";

export default function Navigate({ navigation }) {
  React.useEffect(() => {
    const thingToSay =
      "You are about to arrive at your location. Kindly take note of that.";
    Speech.speak(thingToSay);
    setTimeout(() => {
      setLoading(false);
      const thingToSay = "You have reached at your destination";
      Speech.speak(thingToSay);
      //   setLoading(false)
    }, 12000);
  }, []);

  const [loading, setLoading] = React.useState(true);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{fontSize:20, color:"green", fontWeight:"bold"}}>TEMBEA APP</Text>
        <View style={{height:"20%"}}></View>
      <Text style={{ fontSize: 21, textAlign: "center" }}>
        Tembea app will tell you when youve arrived where you are going
      </Text>
      <View style={{height:"20%"}}></View>

      {loading ? (
        <Image
          style={{ height: 200, width: 200 }}
          source={require("../assets/globe.gif")}
        />
      ) : (
        <Image
          style={{ height: 200, width: 200 }}
          source={require("../assets/loc.gif")}
        />
      )}

      {loading ? (
        <Text>Navigating</Text>
      ) : (
        <Text style={{ fontSize: 25 }}>You have Arrived!</Text>
      )}
      {loading ? (
        <TouchableOpacity
          onPress={() => navigation.navigate("Origin")}
          style={{
            height: "7%",
            width: "80%",
            justifyContent: "center",
            borderRadius: 20,
            alignItems: "center",
            backgroundColor: "red",
          }}
        >
          <Text style={{ color: "#fff" }}>Stop Navigating</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => navigation.navigate("SwiperScreen")}
          style={{
            height: "7%",
            width: "80%",
            justifyContent: "center",
            borderRadius: 20,
            alignItems: "center",
            backgroundColor: "green",
          }}
        >
          <Text style={{ color: "#fff" }}>Start a Fresh session</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
