import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { View, Text, TextInput, StyleSheet, SafeAreaView } from 'react-native'

export default function App() {
    const [nome, setNome] = useState()

    function buscarNome(texto) {
        setNome(texto)
        texto.length > 0 ? setNome("Bem vindo: " + texto) : setNome()
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />
            <Text>Nome: </Text>
            <TextInput style={styles.input} keyboardType="default" placeholder="Digite seu nome" onChangeText={(texto) => buscarNome(texto)}></TextInput>
            <Text>{nome}</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 40
    },
    input: {
        height: 50,
        borderWidth: 2
    },

})