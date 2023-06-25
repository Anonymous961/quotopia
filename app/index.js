import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ActivityIndicator,
  Share,
} from "react-native";
import { useEffect, useState } from "react";
import { Stack, useRouter } from "expo-router";
import axios from "axios";
import { FontAwesome } from "@expo/vector-icons";
import ScreenHeaderBtn from "../components/ScreenHeaderBtn";
import { AntDesign, Feather } from "@expo/vector-icons";
import * as Speech from "expo-speech";
import * as Clipboard from "expo-clipboard";
// import * as Sharing from "expo-sharing";

const Home = () => {
  const router = useRouter();
  const [quote, setQuote] = useState("Loading...");
  const [author, setAuthor] = useState("Loading...");
  const [isLoading, setIsLoading] = useState(false);

  const randomQuote = async () => {
    setIsLoading(true);
    const response = await axios.get("https://api.quotable.io/quotes/random");
    setQuote(response.data[0].content);
    setAuthor(response.data[0].author);
    setIsLoading(false);
  };
  useEffect(() => {
    randomQuote();
  }, []);

  const handleSpeak = () => {
    Speech.stop();
    // console.log(quote);
    Speech.speak(quote + "by" + author);
  };
  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(quote);
    handleShare();
  };
  const handleShare = () => {
    // Sharing.shareAsync(quote);
    Share.share({
      message: quote,
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
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
          headerRight: () => (
            <ScreenHeaderBtn handleShare={handleShare}>
              <FontAwesome name="share-alt" size={24} color="white" />
            </ScreenHeaderBtn>
          ),
        }}
      />
      <StatusBar barStyle="light-content" />
      <View style={styles.middleBlock}>
        <Text style={styles.title}>Quote</Text>
        {isLoading ? (
          <ActivityIndicator
            visible={isLoading}
            textContent={"Loading..."}
            size={80}
            textStyle={styles.spinnerTextStyle}
          />
        ) : (
          <>
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
          </>
        )}
        <View style={styles.bottomIcons}>
          <TouchableOpacity style={styles.bottomIconBtn} onPress={handleSpeak}>
            <AntDesign name="sound" size={30} color="#295861" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.bottomIconBtn}
            onPress={copyToClipboard}
          >
            <Feather name="copy" size={30} color="#295861" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={[
            styles.quoteBtn,
            {
              backgroundColor: isLoading ? "rgba(75, 56, 133,0.7)" : "#4b3885",
              textAlign: "center",
            },
          ]}
          onPress={randomQuote}
        >
          <Text style={{ fontSize: 20, color: "white", textAlign: "center" }}>
            New Quote
          </Text>
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
  },
  middleBlock: {
    width: "90%",
    backgroundColor: "rgba(240, 244, 245,0.8)",
    height: "85%",
    borderRadius: 10,
    padding: 10,
    justifyContent: "space-around",
  },
  block3: {
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    color: "black",
    textAlign: "center",
  },
  quoteBtn: {
    padding: 20,
    borderRadius: 12,
    textAlign: "center",
    marginTop: 12,
    borderRadius: 30,
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
