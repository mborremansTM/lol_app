import {StyleSheet, Text, View, Image, SafeAreaView, ScrollView} from "react-native";

export function ChampionDetailScreen({route}) {
    const {champion} = route.params;
    return (
        <SafeAreaView style={styles.container}>
        <ScrollView>
        <View>
                <Image style={styles.logo} source={{uri: champion.imageUri}}/>
                    <View style={styles.profile}>
                    <Text style={styles.name}>{champion.name} </Text>
                    <Text style={styles.nickName}>{champion.nickName} </Text>
                    <Text style={styles.info}>{champion.info} </Text>
                </View>
                <View style={styles.role}>
                    <Image style={styles.roleImage} source={{uri: champion.roleUri}}/>
                    <Text style={styles.roleName}>{champion.role}</Text>
                </View>

                </View>
                </ScrollView>
                </SafeAreaView>
    );
}



const styles = StyleSheet.create(
    {
        container: {

        height: '100%',
        backgroundColor: 'rgb(6, 28, 37)',
        },
        profile: {marginHorizontal: 10, marginTop: 10, },
        logo: {
                width: "100%",
                height: "40%",
                borderWidth: 2,
                borderColor: '#cfa75b',
                marginTop:40,
        },
        roleImage: {
        alignItems: 'center',
        height: 60,
        width: 60
        },
        roleName: {color: "#cfa75b", fontWeight: 'bold', fontSize: 18},
        role: {alignItems: 'center',
        marginTop: 40,},
        name: {
        fontSize: 36,
        color: 'white',
        fontWeight: 'bold',},
        nickName: {
        fontSize: 24,
        color: "#cfa75b",
        fontWeight: "bold",
        fontStyle: 'italic',
        },
        info: {
        fontSize: 16,
        marginTop: 25,
        color: 'white',
        fontWeight: 'bold',
        },

    },

)
