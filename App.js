import {StatusBar} from 'expo-status-bar';
import {HomeStackScreen} from "./screens/HomeScreen";
import {ChampionStackScreen} from "./screens/ChampionsScreen";
import {GameScreen} from "./screens/GameScreen";
import {SafeAreaProvider} from "react-native-safe-area-context/src/SafeAreaContext";
import {NavigationContainer} from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {ChampionsProvider} from "./contexts/ChampionsContext";
import {ChampionDetailsScreen} from "./screens/ChampionDetailsScreen";


function ProvidedApp() {
    const Tab = createMaterialBottomTabNavigator();
    return (
        <>
            <Tab.Navigator
            barStyle={{ backgroundColor: 'rgb(6, 28, 37)' }}
            activeColor="#cfa75b"
            inactiveColor="white">
                  <Tab.Screen name="Home" component={HomeStackScreen} options={{ tabBarIcon: ({color}) => (<MaterialCommunityIcons name="home" color={color} size={24} />),}}/>
                  <Tab.Screen name="Game" component={GameScreen} options={{ tabBarIcon: ({color}) => (<MaterialCommunityIcons name="gamepad-variant-outline" color={color} size={24} />),}}/>
                  <Tab.Screen name="Champions" component={ChampionStackScreen} options={{ tabBarIcon: ({color}) => (<MaterialCommunityIcons name="format-list-bulleted" color={color} size={24} />),}}/>
            </Tab.Navigator>
        </>
    );
}

export default function App() {
    return (
    <NavigationContainer>
        <SafeAreaProvider>
            <ChampionsProvider>
                <ProvidedApp/>
            </ChampionsProvider>
        </SafeAreaProvider>
    </NavigationContainer>
    );
}
