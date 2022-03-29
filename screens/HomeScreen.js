import {StyleSheet, Text, TouchableOpacity, View, ImageBackground} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import {useNavigation} from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {HowToPlayScreen} from "./HowToPlayScreen";

const HomeStack = createNativeStackNavigator();

export function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{
                                 headerShown: false
                               }}>
      <HomeStack.Screen name="HomeHome" component={HomeScreen} />
      <HomeStack.Screen name="HowToPlay" component={HowToPlayScreen} />
    </HomeStack.Navigator>
  );
}

function HomeScreen() {
    const navigation = useNavigation();
    const image = { uri: "https://raw.githubusercontent.com/mborremans/eindopdrachtDW/master/src/images/LolBackground.jpg?token=GHSAT0AAAAAABR2HR53KJUYEQXJVNDW6R26YSLJBNQ" };
    return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
    <View style={styles.container}>
    <View style={styles.firstRow}>
        <View style={styles.box}/>
        <View style={styles.box}/>
    </View>
    <View style={styles.firstRow}>
            <View style={styles.box}/>
            <View style={styles.box}/>
    </View>


       <Text style={styles.title}>League of Legends Champion Quiz</Text>
       <TouchableOpacity onPress={() =>navigation.navigate('HowToPlay')}>
                              <Text style={styles.how}>How to play</Text>
                          </TouchableOpacity>

    </View>
    </ImageBackground>

    )
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  alignItems: "center",
  top: "25%",
  },
  title: {
  fontSize: 36,
  padding: 5,
  color: "#cfa75b",
  fontWeight: 'bold',
  textShadowColor: 'black',
    textShadowOffset: {width: -3, height: 3},
    textShadowRadius: 10,
    textAlign: 'center',
  },
  image: {
      flex: 1,
          resizeMode: 'cover',
  },
  text: {
    color: "white",
    fontSize: 24,
    textShadowColor: 'black',
      textShadowOffset: {width: -3, height: 3},
      textShadowRadius: 10,
      textAlign: 'center',

    },
    box: {
    width: '25%',
            height: 100,
            marginVertical: "1%",
            marginHorizontal: "1%",
            borderRadius: 10,
            backgroundColor: "#cfa75b",
            },
    firstRow: {
        flexDirection: "row",
    },
    how: {
               borderRadius: 10,
                        padding:5,
                        marginHorizontal: "20%",
                        backgroundColor: "#cfa75b",
                        textAlign: "center",
                        fontWeight: 'bold',
                        fontSize: 22,
                        color: "rgb(6, 28, 37)",
                },
});