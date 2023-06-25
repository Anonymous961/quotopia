import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import { Stack, useRouter } from "expo-router";
import axios from "axios";
import { FontAwesome } from "@expo/vector-icons";
import ScreenHeaderBtn from "../components/ScreenHeaderBtn";
import { Ionicons } from "@expo/vector-icons";

const Home = () => {
  const router = useRouter();

  // const res = axios.get("https://api.quotable.io/quotes/random");
  // console.log(res.data);
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerTitle: "",
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: "#6b3e9e",
          },
          // headerLeft: () => (
          //   <ScreenHeaderBtn>
          //     <Ionicons name="arrow-back" size={24} color="black" />
          //   </ScreenHeaderBtn>
          // ),
          headerRight: () => (
            <ScreenHeaderBtn>
              <FontAwesome name="share-alt" size={24} color="black" />
            </ScreenHeaderBtn>
          ),
        }}
      />
      <View style={styles.middleBlock}>
        <Text style={styles.title}>Have your quote</Text>
        <View style={styles.block3}>
          <FontAwesome name="quote-left" size={24} color="black" />
          <Text style={{ color: "black", fontSize: 20, letterSpacing: 1.1 }}>
            Coolors: Coolors is an online color scheme generator that offers
            random color palettes and allows
          </Text>
          <FontAwesome name="quote-right" size={24} color="black" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6b3e9e",
    alignItems: "center",
    // justifyContent: "center",
  },
  middleBlock: {
    width: "90%",
    backgroundColor: "rgba(240, 244, 245,0.8)",
    height: "60%",
    borderRadius: 10,
    alignItems: "center",
    padding: 4,
    marginTop: 50,
  },
  block3: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    color: "black",
    marginTop: 10,
    marginBottom: 5,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "white",
  },
});

export default Home;
