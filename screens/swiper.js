import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import Swiper from "react-native-swiper";
import { Primary, PrimaryLight } from "../colorcodes";
import swiper from "../assets/swiper1.png";
import cloud from "../assets/cloud.gif";
import woman from "../assets/woman.png";
import { TouchableOpacity } from "react-native";


export default function SwiperScreen({navigation}) {
  return (
    <Swiper style={styles.wrapper} showsButtons={false}>
    <View style={styles.slide1}>
      <View style={{ width: 400, height: 300 }}>
        <Image style={{ width: "100%", height: "100%" }} source={swiper} />
      </View>
      <Text style={styles.text}>Tembea App</Text>
      <Text style={{ fontSize: 17 }}>
        Navigate without the huddles you experience
      </Text>
      <Text style={{ fontSize: 17 }}>
        We are here to help you travell with ease!
      </Text>
    </View>
    <View style={styles.slide2}>
      <View style={{ width: 400, height: 300 }}>
        <Image style={{ width: "100%", height: "100%" }} source={cloud} />
      </View>
      <Text style={styles.text}>Tembea App</Text>
      <Text style={{ fontSize: 17, textAlign:"center" }}>
       Tembea app will help you predict
      </Text>
      <Text style={{ fontSize: 17, textAlign:"center" }}>
        weather conditions and therefore be prepared when it comes to beat nature!
      </Text>
    </View>
    <View style={styles.slide3}>
    <View style={{ width: 400, height: 300 }}>
        <Image style={{ width: "100%", height: "100%" }} source={woman} />
      </View>
      <Text style={styles.text}>Tembea App</Text>
      <Text style={{ fontSize: 17, textAlign:"center" }}>
       Tembea app will help you predict
      </Text>
      <Text style={{ fontSize: 17, textAlign:"center" }}>
        weather conditions and therefore be prepared when it comes to beat nature!
      </Text>
      <TouchableOpacity onPress={()=>navigation.navigate('Origin')} style={{paddingTop:9, marginTop:30, borderRadius:10, paddingBottom:9, paddingRight:10, paddingLeft:10, backgroundColor:Primary}}>
        <Text style={{ fontSize:20, color:"#fff"}}>Get on the move!</Text>
      </TouchableOpacity>
    </View>
  </Swiper>
  )
}


const styles = StyleSheet.create({
    wrapper: {},
    slide1: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff",
      textAlign:"center"
    },
    slide2: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff",
      textAlign:"center"
    },
    slide3: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff",
    },
    text: {
      color: Primary,
      fontSize: 30,
      fontWeight: "bold",
    },
  });
  