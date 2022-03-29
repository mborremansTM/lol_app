import {StyleSheet, Text, View, Image, SafeAreaView, ScrollView} from "react-native";


export function HowToPlayScreen(){
    return(<SafeAreaView style={styles.container}>
    <ScrollView>
                  <View style={styles.end}>
                      <Text style={styles.title}>Here are the rules:</Text>
                      <Text style={styles.text}>- Four images will be presented to you.</Text>
                      <Text style={styles.text}>- All champions will be collected inside you League of Legends book.</Text>
                      <Text style={styles.text}>- To finish the game, find all champions. Good luck...</Text>
                      <Text style={styles.text}>- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                            aliquip ex ea commodo consequat.</Text>
                  </View>
    </ScrollView>
              </SafeAreaView>);
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "rgb(6, 28, 37)",
      width: "100%",
      height: "100%"
    },
    title: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    color: "white",
    marginVertical: "10%",},
    text: {
        fontSize: 26,
        fontWeight: 'bold',
        color: "#cfa75b",
        textAlign: 'left',
        marginHorizontal: "5%",
        marginVertical: "2%",
        fontStyle: 'italic',},
    end: {
        marginVertical: '30%',},
});