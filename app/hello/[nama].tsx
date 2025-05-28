import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Nama() {
    const {nama} = useLocalSearchParams();

    return (
        <View style={styles.container}>
            <Text style={styles.font}>Hallo {nama}</Text>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    font: {
        fontSize: 24,
    }
})