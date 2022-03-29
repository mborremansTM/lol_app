import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import tw from "twrnc";
import {ChampionsList} from "../components/ChampionsList";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {ChampionDetailsScreen} from "./ChampionDetailsScreen";

const ChampionStack = createNativeStackNavigator();

export function ChampionStackScreen() {
  return (
    <ChampionStack.Navigator screenOptions={{
                                 headerShown: false
                               }}>
      <ChampionStack.Screen name="ChampionsHome" component={ChampionsScreen} />
      <ChampionStack.Screen name="Details" component={ChampionDetailsScreen} />
    </ChampionStack.Navigator>
  );
}

function ChampionsScreen() {
    return (
    <View style={styles.container}>
                <ChampionsList/>
            </View>
    )
}

const styles = StyleSheet.create({
  container: {
  backgroundColor: 'rgb(6, 28, 37)',
  height: "100%"
  }
});

