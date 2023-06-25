import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { Stack, useRouter } from "expo-router";
import axios from "axios";
import { FontAwesome } from "@expo/vector-icons";
import ScreenHeaderBtn from "../components/ScreenHeaderBtn";
import { AntDesign, Feather } from "@expo/vector-icons";

const Home = () => {
  const router = useRouter();
  const [quote, setQuote] = useState("Loading...");
  const [author, setAuthor] = useState("Loading...");
  const [isLoading, setIsLoading] = useState(false);

  const randomQuote = async () => {
    setIsLoading(true);
    const response = await axios.get("https://api.quotable.io/quotes/random");
    // console.log(response.data[0]);
    setQuote(response.data[0].content);
    setAuthor(response.data[0].author);
    setIsLoading(false);
  };
  useEffect(() => {
    randomQuote();
  }, []);
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
            backgroundColor: "#372961",
          },
          // headerLeft: () => (
          //   <ScreenHeaderBtn>
          //     <Ionicons name="arrow-back" size={24} color="black" />
          //   </ScreenHeaderBtn>
          // ),
          headerRight: () => (
            <ScreenHeaderBtn>
              <FontAwesome name="share-alt" size={24} color="white" />
            </ScreenHeaderBtn>
          ),
        }}
      />
      <StatusBar barStyle="light-content" />
      <View style={styles.middleBlock}>
        <Text style={styles.title}>Quote</Text>
        <View style={styles.block3}>
          <FontAwesome
            name="quote-left"
            size={24}
            style={{ textAlign: "left" }}
            color="black"
          />
          <Text
            style={{
              color: "black",
              fontSize: 20,
              letterSpacing: 1.1,
              textAlign: "center",
              padding: 18,
            }}
          >
            {quote}
          </Text>
          <FontAwesome
            name="quote-right"
            size={24}
            style={{ textAlign: "right", marginBottom: -12 }}
            color="black"
          />
        </View>
        <Text style={styles.author}>---{author}</Text>
        <View style={styles.bottomIcons}>
          <TouchableOpacity style={styles.bottomIconBtn}>
            <AntDesign name="sound" size={30} color="#295861" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomIconBtn}>
            <Feather name="copy" size={30} color="#295861" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.newBtn} onPress={randomQuote}>
          {isLoading ? (
            <ActivityIndicator
              visible={isLoading}
              textContent={"Loading..."}
              size={"large"}
              textStyle={styles.spinnerTextStyle}
            />
          ) : (
            <>
              <Text style={{ fontSize: 20, color: "white" }}>New Quote</Text>
            </>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#372961",
    alignItems: "center",
    // justifyContent: "center",
  },
  middleBlock: {
    width: "90%",
    backgroundColor: "rgba(240, 244, 245,0.8)",
    height: "90%",
    borderRadius: 10,
    // alignItems: "center",
    padding: 10,
    justifyContent: "space-around",
    // marginTop: 50,
  },
  block3: {
    justifyContent: "center",
    // alignItems: "center",
    // marginTop: 40,
  },
  title: {
    fontSize: 30,
    color: "black",
    // marginTop: 10,
    // marginBottom: 10,
    // borderBottomWidth: StyleSheet.hairlineWidth,
    // borderBottomColor: "white",
    textAlign: "center",
  },
  newBtn: {
    backgroundColor: "#4b3885",
    padding: 20,
    borderRadius: 12,
    textAlign: "right",
    marginTop: 12,
    borderRadius: 20,
    // width: "80%",

    // alignItems: "center",
    // marginBottom: 10,
  },
  author: {
    textAlign: "right",
    fontWeight: "300",
    fontStyle: "italic",
    color: "#000",
    fontSize: 16,
  },
  bottomIconBtn: {
    borderRadius: 50,
    borderWidth: 2,
    padding: 15,
    borderColor: "#295861",
  },
  bottomIcons: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  spinnerTextStyle: {
    color: "#FFF",
  },
});

export default Home;
