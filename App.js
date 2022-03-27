import {StatusBar} from 'expo-status-bar';
import {HomeScreen} from "./screens/HomeScreen";
import {ChampionsScreen} from "./screens/ChampionsScreen";
import {GameScreen} from "./screens/GameScreen";
import {SafeAreaProvider} from "react-native-safe-area-context/src/SafeAreaContext";
import {NavigationContainer} from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {ChampionsProvider} from "./contexts/ChampionsContext";


function ProvidedApp() {
    const Tab = createMaterialBottomTabNavigator();
    return (
        <>
            <Tab.Navigator
            barStyle={{ backgroundColor: '#3A3E9D' }}
            activeColor="#5E0404"
            inactiveColor="white"

            >
                  <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarIcon: ({color}) =>
                        (<MaterialCommunityIcons name="home" color={color} size={30} />),}}/>
                  <Tab.Screen name="Champions" component={ChampionsScreen} options={{ tabBarIcon: ({color}) =>
                                                                                                  (<MaterialCommunityIcons name="format-list-bulleted" color={color} size={30} />),}}/>
                  <Tab.Screen name="Game" component={GameScreen} />
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
