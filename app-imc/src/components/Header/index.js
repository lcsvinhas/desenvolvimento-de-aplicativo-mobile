import { View, Text, StyleSheet } from 'react-native'

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>Calculadora de IMC</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#d4e3da",
    },
    text: {
        fontWeight: "bold",
        fontSize: 25,
    }

})