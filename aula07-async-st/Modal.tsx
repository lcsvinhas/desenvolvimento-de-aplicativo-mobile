import { useState } from 'react'
import { View, Text, StyleSheet, Touchable, TouchableOpacity, Modal, Alert } from 'react-native'
import ActionModal from './src/components/ActionModal'
import { StatusBar } from 'expo-status-bar'

export default function App() {
  const [exibirModal, setExibirModal] = useState(false)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela Principal</Text>
      <TouchableOpacity style={styles.bottom} onPress={() => setExibirModal(true)}>
        <Text>Abrir</Text>
      </TouchableOpacity>

      <Modal transparent={true} visible={exibirModal} onRequestClose={() => setExibirModal(false)}>
        <ActionModal
          handleClose={() => setExibirModal(false)}
          handleInformacoes={() => Alert.alert("Informações")}
          handleContato={() => Alert.alert("Contato")} />
      </Modal>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121318",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold"
  },
  bottom: {
    backgroundColor: "#fff",
    padding: 4,
    marginVertical: 8,
    width: "70%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4
  }
})