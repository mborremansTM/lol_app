import {FlatList, StyleSheet, Text, TouchableOpacity, View, SafeAreaView, Image, useMemo} from "react-native";
import tw from "twrnc";
import {useChampionsContext} from "../contexts/ChampionsContext";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';




export function Champion({champion}) {
const navigation = useNavigation();
    if (champion.found){
    return (
        <TouchableOpacity style={styles.detailsButton} disabled={champion.found ? false : true} onPress={() =>navigation.navigate('Details', {champion})}>
            <View style={styles.item}>
                <Image style={styles.logo} source={{uri: champion.imageUri}}/>
                <Text>{champion.name}</Text>
            </View>
            </TouchableOpacity>
        );
    }
    else {
    return (
        <View style={styles.item}>
                        <Text>Not found yet!</Text>
                    </View>
    )}


}

export function ChampionsList() {
    const {champions} = useChampionsContext();
    const championsFound = champions.filter(champion => champion.found)


    return (
    <SafeAreaView style={styles.container}>
        <View>
            <Text>Found {championsFound.length} out of {champions.length}</Text>
        </View>
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
  },
  logo: {
                 width: 100,
                 height: 100,
                 borderRadius: 50,
                },
});