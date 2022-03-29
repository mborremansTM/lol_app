import {FlatList, StyleSheet, Text, TouchableOpacity, View, SafeAreaView, Image} from "react-native";
import {useChampionContext} from "../contexts/ChampionContext";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';




export function Champion({champion}) {
const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.detailsButton} onPress={() =>navigation.navigate('Detail', {champion})}>
            <View style={styles.item}>
                <Image style={styles.logo} source={{uri: champion.imageUri}}/>
                <View style={styles.allText}>
                    <Text style={styles.name}>{champion.name}</Text>
                    <Text style={styles.nickName}>{champion.nickName}</Text>
                </View>

            </View>
            </TouchableOpacity>
        );

}

export function ChampionList() {
    const {champions} = useChampionContext();
    const championsFound = champions.filter(champion => champion.found).sort((a, b) => a.name.localeCompare(b.name));



    return (
    <SafeAreaView style={styles.container}>
        <View style={styles.found} >
            <Text style={styles.foundText}>CHAMPIONS DISCOVERED {championsFound.length}/{champions.length}</Text>

        </View>
        <FlatList
            data={championsFound}
            keyExtractor={champion => champion.id}
            renderItem={({item}) => <Champion champion={item}/>}

        />
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
  marginHorizontal: 5,
  marginTop: 70,
  },
  allText: {
    flexDirection: 'column',
    flex: 1,
    paddingHorizontal: 10,
    marginVertical: 20,
    color: "rgb(0, 102, 128)",
  },
  item: {
    marginVertical: 5,
    borderWidth: 3,
    padding: 5,
    borderColor: '#cfa75b',
    flexDirection: 'row',
    borderRadius: 5,
    backgroundColor: '#0c384a',
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'rgb(6, 28, 37)',
  },
  name: {
  fontSize: 28,
  fontWeight: '500',
  color: "white",
  fontWeight: "bold",
  },
  nickName: {
  fontSize: 20,
  color: "#cfa75b",
  fontStyle: 'italic',
  fontWeight: "bold",
  },
  found: {
  alignItems: "center",},
  foundText: {
  fontSize: 22,
  fontWeight: 'bold',
  color: '#cfa75b',
  }
});