import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import {ChampionList} from "../components/ChampionList";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {ChampionDetailScreen} from "./ChampionDetailScreen";

const ChampionStack = createNativeStackNavigator();

export function ChampionStackScreen() {
  return (
    <ChampionStack.Navigator screenOptions={{
                                 headerShown: false
                               }}>
      <ChampionStack.Screen name="ChampionHome" component={ChampionScreen} />
      <ChampionStack.Screen name="Detail" component={ChampionDetailScreen} />
    </ChampionStack.Navigator>
  );
}

function ChampionScreen() {
    return (
    <View style={styles.container}>
                <ChampionList/>
            </View>
    )
}

const styles = StyleSheet.create({
  container: {
  backgroundColor: 'rgb(6, 28, 37)',
  height: "100%"
  }
});

