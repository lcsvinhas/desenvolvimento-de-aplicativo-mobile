import { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native'

export default function Main() {
    const [peso, setPeso] = useState("")
    const [altura, setAltura] = useState("")
    const [imc, setImc] = useState(null)
    const [classificacao, setClassificacao] = useState("")

    function calcularIMC() {
        let p = parseFloat(peso)
        let a = parseFloat(altura)

        const resultado = p / (a * a)
        setImc(resultado.toFixed(2))
        setClassificacao(classificarIMC(resultado))

    }

    function classificarIMC(valor) {
        if (valor <= 18.5) {
            return "Baixo peso"
        } else if (valor <= 24.9) {
            return "Peso normal"
        } else if (valor <= 29.9) {
            return "Sobrepeso"
        } else if (valor <= 34.9) {
            return "Obesidade grau I"
        } else if (valor <= 39.9) {
            return "Obesidade grau II"
        } else {
            return "Obesidade grau III"
        }
    }

    return (
        <View style={styles.container}>
            <TextInput placeholder="Peso" style={styles.input} keyboardType="numeric" value={peso} onChangeText={(e) => setPeso(e)} />
            <TextInput placeholder="Altura" style={styles.input} keyboardType="numeric" value={altura} onChangeText={(e) => setAltura(e)} />
            <TouchableOpacity style={styles.button} onPress={calcularIMC}>
                <Text style={styles.textButton}>Calcular</Text>
            </TouchableOpacity>
            <Text style={styles.textButton}>Seu IMC é: {imc}</Text>
            <Text style={styles.textButton}>{classificacao}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 7,
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        width: 300,
        height: 40,
        borderColor: "#000",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        margin: 10,
    },
    button: {
        marginTop: 20,
        padding: 12,
        width: 150,
        height: 50,
        backgroundColor: "#4accf0",
        alignItems: "center",
        borderRadius: 20,
    },
    textButton: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
    },
})