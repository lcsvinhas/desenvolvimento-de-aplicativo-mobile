import { View, Text, TouchableOpacity, Modal, Alert } from 'react-native'
import { styles } from "./styles"
import { use, useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'

export default function Sobre() {
    const [modalVisible, setModalVisible] = useState<boolean>(false)
    const [nome, setNome] = useState<string>("")
    const [email, setEmail] = useState<string>("")

    function handleSave(): void {
        if (!nome || !email) {
            Alert.alert("Preencha os campos corretamente!")
            return
        }
        console.log(`Nome: ${nome}`)
        console.log(`Nome: ${email}`)
        setNome("");
        setEmail("");
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
                <Text style={styles.buttonText}>Abrir Modal</Text>
            </TouchableOpacity>

            <Modal visible={modalVisible} transparent={true} animationType="slide" onRequestClose={() => setModalVisible(false)}>
                <View style={styles.modalBackground}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>Formulário de Contato</Text>

                        <TextInput style={styles.input} placeholder="Digite seu nome" value={nome} onChangeText={setNome} />
                        <TextInput style={styles.input} placeholder="Digite seu email" value={email} onChangeText={setEmail} />

                        <View style={styles.buttonRow}>
                            <TouchableOpacity style={styles.button} onPress={() => setModalVisible(false)}>
                                <Text style={styles.buttonText}>Cancelar</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.button} onPress={handleSave}>
                                <Text style={styles.buttonText}>Salvar</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}