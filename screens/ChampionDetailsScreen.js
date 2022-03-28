import {StyleSheet, Text, View, Image, SafeAreaView} from "react-native";
import tw from "twrnc";

export function ChampionDetailsScreen({route}) {
    const {champion} = route.params;
    return (
        <SafeAreaView>
                <View style={styles.container}>
                    <Image style={styles.logo} source={{uri: champion.imageUri}}/>
                    <Text>{champion.name} </Text>
                </View>
                </SafeAreaView>
    );
}



const styles = StyleSheet.create(
    {
        container: tw`h-full`,
        logo: {
                width: "100%",
                height: "40%",
              },
    },

)
