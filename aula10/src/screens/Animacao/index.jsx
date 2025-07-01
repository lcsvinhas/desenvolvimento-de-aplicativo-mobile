import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import * as Animatable from "react-native-animatable"

export default function Animacao() {
    const ButtonAnimated = Animatable.createAnimatableComponent(TouchableOpacity)

    return (
        <View style={styles.container}>
            <Animatable.Text styles={styles.title} animation={"shake"} iterationCount={5} duration={1000}>Animação</Animatable.Text>

            <ButtonAnimated style={styles.button} animation={"shake"}>
                <Text>Teste</Text>
            </ButtonAnimated>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontSize: 24
    },
    button: {
        width: 70,
        height: 30,
        color: "white",
        backgroundColor: "black"
    }
})