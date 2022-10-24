import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  Button,
} from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Primary } from "../colorcodes";
import * as Speech from "expo-speech";
import pic from "../assets/consultation.gif";
export default function Origin({navigation}) {
  const [city, SetCity] = React.useState("");
  return (
    <SafeAreaView style={{ height: "100%", margin: 15, paddingTop: 30 }}>
      <View style={{ height: 300, width: 300 }}>
        <Text style={{ fontSize: 30, color: Primary, fontWeight: "bold" }}>
          Tembea App
        </Text>
        <Image style={{ height: "100%", width: "100%" }} source={pic} />
      </View>

      <Text style={{ fontSize: 30, color: Primary, fontWeight: "bold" }}>
        Help us know where you are!
      </Text>
      <View style={{ height: 200 }}>
        <GooglePlacesAutocomplete
          fetchDetails={true}
          placeholder="Search"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(details.geometry);
            console.log(data.description);

            SetCity(data.description);
          }}
          query={{
            key: "AIzaSyA3vm7OkSwaNStjMAL7yMIWg1F7F2Rk768",
            language: "en",
          }}
        />
      </View>

      <Button
        onPress={() => {
          const thingToSay =
            "Hi, my name is Zawadi from the Tembea app. Today I will be your personal assistant throughout your trip to " +
            city +
            "I hope it is the correct starting point. I will use this information to enhance your travelling experience. I wish you an exemplary trip. I will estimate your travelling time and distance and do a rough calculation of your trip fare expenses in kenyan shillings";
          Speech.speak(thingToSay);
          navigation.navigate('Weather')
        }}
        title="Continue"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create();
