import { View, Text, StyleSheet } from 'react-native'

interface Usuario {
    nome: string,
    email: string,
    cargo: string
}

interface Props {
    data: Usuario
}

export default function UsuariosList({ data }: Props) {
    // console.log(data);

    return (
        <View style={styles.container}>
            <Text>Nome: {data.nome}</Text>
            <Text>Email: {data.email}</Text>
            <Text>Cargo: {data.cargo}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 8,
        marginBottom: 14
    }
})