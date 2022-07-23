import { View, Text } from "react-native";
import React from "react";
import { TextInput } from "react-native";
import { Primary } from "../colorcodes";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function OriginLocation() {
  return (
    <SafeAreaView style={{height:"100%"}}>
    <View
      style={{
       
        // flex: 1,
        // alignItems: "center",
        // justifyContent: "center",
        backgroundColor: "#fff",
      }}
    >
      
      <View style={{ width: 300,  }}>
        <Text
          style={{
            fontSize: 27,
            paddingBottom: 20,
            fontWeight: "bold",
            color: Primary,
          }}
        >
          Let us know where you want to start your trip from
        </Text>
        {/* <TextInput
          style={{ width: "100%", fontSize: 27 }}
          placeholder="Where are you?"
        /> */}
        {/* <GooglePlacesAutocomplete
          style={{ width: "100%", fontSize: 27 }}
         // fetchDetails={true}
          placeholder="Where are you?"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(details);
          }}
          query={{
            key: "AIzaSyCIuT6BD82VtLLEjWB2T9slhBiEhddNbUM",
            language: "en",
          }}
        /> */}
        <GooglePlacesAutocomplete
      placeholder='Search'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: 'AIzaSyCIuT6BD82VtLLEjWB2T9slhBiEhddNbUM',
        language: 'en',
      }}
    />
      </View>
      {/* <View
        style={{
          paddingTop: 15,
          marginTop: 25,
          paddingBottom: 15,
          borderRadius: 12,
          paddingLeft: 45,
          paddingRight: 45,
          backgroundColor: Primary,
        }}
      >
        <Text style={{ fontSize: 20, color: "#fff" }}>Proceed</Text>
      </View> */}
      
    </View>
    </SafeAreaView>
  );
}
