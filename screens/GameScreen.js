import {StyleSheet, Text, View, useState, TextInput, TouchableOpacity, Alert, useEffect, useMemo} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import tw from "twrnc";
import {useChampionsContext} from "../contexts/ChampionsContext";
import {ChampionsContext} from "../contexts/ChampionsContext";
import React from "react";


export function GameScreen() {
    const {champions, foundToTrue} = useChampionsContext();
    const championsFound = champions.filter(championFilter => !championFilter.found);
    const [randomNumber, setRandomNumber] = React.useState(Math.floor(Math.random() * championsFound.length-1) + 1 );
    const [champion, setChampion] = React.useState(championsFound[Math.floor(Math.random() * championsFound.length-1) + 1 ]);
    const [text, onChangeText] = React.useState("");

    if(championsFound.length === 0){
    return(<SafeAreaView>
        <View>
            <Text>You finished the game!</Text>
        </View>
    </SafeAreaView>)}
    else {
    return (
    <SafeAreaView>
       <View>
            <Text>{randomNumber}</Text>
            <Text>{championsFound.length}</Text>
            <Text>{champion.name}</Text>
            <Text>{champion.found ? "true" : "false"}</Text>
       </View>
       <View >
                   <TextInput style={styles.input} value={text} onChangeText={onChangeText} placeholder="Who is this?"/>
                   <TouchableOpacity onPress={() => {if(champion.name.toUpperCase() == text.toUpperCase())
                   {   championsFound.splice(randomNumber,1);
                       foundToTrue(champion);
                       setChampion(championsFound[Math.floor(Math.random() * championsFound.length-1) + 1 ]);

                       return((Alert.alert("Juist")))}
                                                     else {return(Alert.alert("Fout"))}}}>
                       <Text>Guess</Text>
                   </TouchableOpacity>
             </View>
     </SafeAreaView>
    )
    }
}

/*function Input({championGame}){
  const [champions, setChampions] = React.useState(useChampionsContext());
  let id = championGame.id;
  const [text, onChangeText] = React.useState("");
  const [champion, setChampion] = React.useState(championGame);
  const navigation = useNavigation();

    return(
        <View >
            <TextInput style={styles.input} value={text} onChangeText={onChangeText} placeholder="Who is this?"/>
            <TouchableOpacity onPress={() => {if(champion.name.toUpperCase() == text.toUpperCase())
            {   setChampion({...champion, found: true});

                return(Alert.alert("Juist"+champion.found))}
                                              else {return(Alert.alert("Fout"+champion.found))}}}>
                <Text>Guess</Text>
            </TouchableOpacity>
      </View>
)
}*/

function CheckGuess({championName, championGuess}){
    if(championName = championGuess){
    return(
        alert("Juist"+championName+championGuess)
    )
    }
    else {
    return(
        alert("Fout"+championName+championGuess)
    )}
}



const styles = StyleSheet.create({
    input: {
    marginVertical: 8,
        borderWidth: 1.5,
        borderRadius: 10,
        borderColor: '#3A3E9D',
        padding:10,
        marginHorizontal: "2%"}

});