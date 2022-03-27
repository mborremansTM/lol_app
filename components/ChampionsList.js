import {FlatList, StyleSheet, Text, TouchableOpacity, View, SafeAreaView} from "react-native";
import tw from "twrnc";
import {useChampionsContext} from "../contexts/ChampionsContext";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';




export function Champion({champion}) {
const navigation = useNavigation();
    return (
        <View style={styles.item}>
            <Text>{champion.found ? champion.name : "???"}
            </Text><TouchableOpacity style={styles.detailsButton} onPress={() =>navigation.navigate('Details', {champion})}>
            <Text>knop</Text>
            </TouchableOpacity>

        </View>

    );
}

export function ChampionsList() {
    const {champions} = useChampionsContext();
    return (
    <SafeAreaView style={styles.container}>
        <FlatList
            data={champions}
            keyExtractor={champion => champion.id}
            renderItem={({item}) => <Champion champion={item}/>}

        />
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
  margin: 15,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    borderWidth: 1.5,
    borderRadius: 10,
    borderColor: '#3A3E9D',
  }
});