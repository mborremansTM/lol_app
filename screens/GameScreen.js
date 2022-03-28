import {StyleSheet, Text, View, useState, TextInput, TouchableOpacity, Alert} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import tw from "twrnc";
import {useChampionsContext} from "../contexts/ChampionsContext";
import React from "react";


export function GameScreen() {
    const {champions} = useChampionsContext();
    const championsFound = champions.filter(champion => !champion.found)
    const RandomNumber = Math.floor(Math.random() * championsFound.length-1) + 1 ;


    return (
    <SafeAreaView>
       <View>
            <Text>{RandomNumber}</Text>
            <Text>{championsFound.length}</Text>
            <Text>{championsFound[RandomNumber].name}</Text>
            <Text>{championsFound[RandomNumber].found ? "false" : "false"}</Text>
       </View>
       <Input champion={championsFound[RandomNumber]}/>
     </SafeAreaView>
    )
}

function Input({champion}){
  const [text, onChangeText] = React.useState("");
    return(
        <View >
            <TextInput style={styles.input} value={text} onChangeText={onChangeText} placeholder="Who is this?"/>
            <TouchableOpacity onPress={() => {if(champion.name.toUpperCase() == text.toUpperCase()){
                                                  return(
                                                      Alert.alert("Juist")
                                                  )
                                                  }
                                                  else {
                                                  return(
                                                      Alert.alert("Fout")
                                                  )}}}>
                <Text>Guess</Text>
            </TouchableOpacity>
       </View>
)
}

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