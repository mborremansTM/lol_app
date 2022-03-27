import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import tw from "twrnc";
import {useNavigation} from "@react-navigation/native";

export function HomeScreen() {
    return (
    <SafeAreaView>
    <View style={styles.container}>
       <Text style={styles.title}>League of Legends</Text>
       <Text>Have a fun time!</Text>
    </View>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container: {
  alignItems: "center",
  top: 250,
  },
  title: {
  fontSize: 36,
  padding: 5,
  }


});