import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import tw from "twrnc";

import {ChampionsList} from "../components/ChampionsList";



export function ChampionsScreen() {
    return (
    <View>
                <ChampionsList/>
            </View>
    )
}

