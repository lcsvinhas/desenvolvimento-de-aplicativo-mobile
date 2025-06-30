import { View, Text, StyleSheet, Touchable, TouchableOpacity } from 'react-native'
import { db } from '../../firebaseConnection'
import { deleteDoc, doc } from 'firebase/firestore'

interface Usuario {
    id: string,
    nome: string,
    email: string,
    cargo: string
}

interface Props {
    data: Usuario,
    handleEdit: (dados: Usuario) => void
}

export default function UsuariosList({ data, handleEdit }: Props) {

    async function handleDelete() {
        const docRef = doc(db, "usuarios", data.id)
        await deleteDoc(docRef)
    }

    async function handleUpdate() {
        handleEdit(data)
    }

    return (
        <View style={styles.container}>
            <Text>Nome: {data.nome}</Text>
            <Text>Email: {data.email}</Text>
            <Text>Cargo: {data.cargo}</Text>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buttonExcluir} onPress={handleDelete}>
                    <Text style={styles.buttonText}>Excluir</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonEdit} onPress={handleUpdate}>
                    <Text style={styles.buttonText}>Editar</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f0f0f0",
        padding: 8,
        borderRadius: 4,
        marginBottom: 14,
    },
    item: {
        color: "#000",
        fontSize: 16,
    },
    buttonContainer: {
        flexDirection: "row",
    },
    buttonExcluir: {
        backgroundColor: "#B3261E",
        padding: 4,
        borderRadius: 6,
        marginTop: 16,
        marginRight: 8,
    },
    buttonText: {
        color: "#FFF",
        fontWeight: "bold",
        paddingLeft: 8,
        paddingRight: 8,
    },
    buttonEdit: {
        backgroundColor: "#000",
        alignSelf: "flex-start",
        padding: 4,
        borderRadius: 4,
        marginTop: 16,
    },
});