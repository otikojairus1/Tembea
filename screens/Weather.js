import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import * as Speech from "expo-speech";
import { TouchableHighlight } from "react-native-web";

export default function Weather({ navigation }) {
  const [loading, setLoading] = React.useState(true);
  const [sunny, setSunny] = React.useState(false);
  const [cloudy, setCloudy] = React.useState(false);
  const [windy, setWindy] = React.useState(false);
  const [rainy, setRainy] = React.useState(false);

  React.useEffect(() => {
    let Weather = ["rainy", "sunny", "cloudy", "windy"];
    let randomItem = Weather[Math.floor(Math.random() * Weather.length)];

    if (randomItem == "rainy") {
      setRainy(true);
      setCloudy(false);
      setSunny(false);
      setWindy(false);
    } else if (randomItem == "sunny") {
      setRainy(false);
      setCloudy(false);
      setSunny(true);
      setWindy(false);
    } else if (randomItem == "cloudy") {
      setRainy(false);
      setCloudy(true);
      setSunny(false);
      setWindy(false);
    } else {
      setRainy(false);
      setCloudy(false);
      setSunny(false);
      setWindy(true);
    }

    console.log(randomItem);
    setLoading(false);
    const thingToSay =
      "there is likely to be " + randomItem + " today at nakuru.";
    Speech.speak(thingToSay);
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20, color:"green" }}>TEMBEA APP</Text>
      <Text style={{ fontSize: 16 }}></Text>
      {loading && (
        <Image
          style={{ height: 200, width: 200 }}
          source={require("../assets/globe.gif")}
        />
      )}

      {windy && <Feather name="wind" size={104} color="black" />}
      {windy && (
        <Text style={{ fontSize: 20, textAlign: "center", color: "orange" }}>
          Tembea app recommends you to wear heavy clothes
        </Text>
      )}

      {rainy && <Feather name="cloud-rain" size={104} color="black" />}
      {rainy && (
        <Text style={{ fontSize: 20, textAlign: "center", color: "orange" }}>
          Tembea app reccommends you wear heavy clothing
        </Text>
      )}

      {sunny && <Feather name="sun" size={104} color="black" />}
      {sunny && (
        <Text style={{ fontSize: 20, textAlign: "center", color: "orange" }}>
          Tembea app recommends you to wear light clothes
        </Text>
      )}

      {cloudy && <Feather name="cloud" size={104} color="black" />}
      {cloudy && (
        <Text style={{ fontSize: 20, textAlign: "center", color: "orange" }}>
          Tembea app recommends you carry heavy clothes incase the cloud cause
          rainy
        </Text>
      )}
      <View
        style={{
          height: "50%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ textAlign: "center", fontSize: 17 }}>
          Your distance is estimated at 20km and therefore you may be charged
          from ksh200 to ksh500
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Navigate")}
        style={{
          height: "7%",
          width: "80%",
          justifyContent: "center",
          borderRadius: 20,
          alignItems: "center",
          backgroundColor: "green",
        }}
      >
        <Text style={{ color: "#fff" }}>Start navigating</Text>
      </TouchableOpacity>
    </View>
  );
}
