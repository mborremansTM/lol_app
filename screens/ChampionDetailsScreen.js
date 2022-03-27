import {StyleSheet, Text, View} from "react-native";
import tw from "twrnc";

export function ChampionDetailsScreen({route}) {
    const {champion} = route.params;
    return (
        <View style={styles.container}>
            <Text>{champion.name} </Text>
        </View>
    );
}

const styles = StyleSheet.create(
    {
        container: tw`h-full`,
    }
)