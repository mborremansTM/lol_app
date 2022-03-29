import {StyleSheet, Text, View, useState, TextInput, TouchableOpacity, Alert, Image} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import {useChampionContext} from "../contexts/ChampionContext";
import {ChampionContext} from "../contexts/ChampionContext";
import React from "react";


export function GameScreen() {
    const {champions, foundToTrue} = useChampionContext();
    const championsFound = champions.filter(championFilter => !championFilter.found);
    const [randomNumber, setRandomNumber] = React.useState(Math.floor(Math.random() * championsFound.length-1) + 1 );
    const [champion, setChampion] = React.useState(championsFound[Math.floor(Math.random() * championsFound.length-1) + 1 ]);
    const [text, onChangeText] = React.useState("");
    const [counter, setCounter] = React.useState(1);

    if(championsFound.length === 0){
    return(<SafeAreaView style={styles.container}>
        <View style={styles.end}>
            <Text style={styles.title}>Thanks for playing. You discovered all champions!</Text>
        </View>
    </SafeAreaView>)}
    else {
    return (
    <SafeAreaView style={styles.container}>
    <Text style={styles.title}>Guess the champion</Text>
       <View style={styles.pictures}>
       <View style={styles.firstRow}>
                    <Image style={styles.images} source={{uri: champion.picture1}}/>
                   <Image style={styles.images} source={{uri: champion.picture2}}/>
       </View>
        <View style={styles.firstRow}>
            <Image style={styles.images} source={{uri: champion.picture3}}/>
            <Image style={styles.images} source={{uri: champion.picture4}}/>
            </View>
       </View>
       <View >
                   <TextInput style={styles.input} value={text} onChangeText={onChangeText} placeholder="Who is this?" placeholderTextColor="white"/>
                   <TouchableOpacity onPress={() => {if(champion.name.toUpperCase() == text.toUpperCase())
                   {   championsFound.splice(randomNumber,1);
                       foundToTrue(champion);
                       setChampion(championsFound[Math.floor(Math.random() * championsFound.length-1) + 1 ]);
                       setCounter(0);

                       return((Alert.alert("Correct")))}
                                                     else {setCounter(counter+1);return(Alert.alert("Wrong! Number of tries: "+counter))}}}>
                                                     <Text style={styles.guess}>GUESS</Text>
                   </TouchableOpacity>


             </View>
     </SafeAreaView>
    )
    }
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
    container: {

      backgroundColor: "rgb(6, 28, 37)",
      width: "100%",
      height: "100%"
    },

    input: {
    marginVertical: 8,
        borderWidth: 1.5,
        borderRadius: 10,
        borderColor: '#cfa75b',
        borderWidth: 3,
        padding:10,
        marginHorizontal: "2%",
        fontSize: 22,
                color: "white",
                fontWeight: "bold",
                textAlign: "center"},

    images: {
        width: '46%',
        height: 200,
        marginVertical: "2%",
        marginHorizontal: "2%",
        borderRadius: 10,
        borderWidth: 3,
        borderColor: '#cfa75b'
    },
    firstRow: {
    flexDirection: "row",
    },
    pictures: {
    alignItems: 'center'},
    guess:{
    borderRadius: 10,
            padding:5,
            marginHorizontal: "36%",
            backgroundColor: "#cfa75b",
            textAlign: "center",
            fontWeight: 'bold',
            fontSize: 22,
            color: "rgb(6, 28, 37)",
    },
    title: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    color: "#cfa75b"},
    end: {
        marginVertical: '50%',},
        tries: {
        color: 'white'},

});