import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import Animacao from './src/screens/Animacao';
import Message from './src/screens/Message';
import { useState } from 'react';
import Home from './src/screens/Home';

export default function App() {
  const [show, setShow] = useState(false)

  return (
    <View style={styles.container}>
      {show && <Message />}
      <StatusBar style="auto" />
      <Home />
      <Button title={show ? "Fechar mensagem" : "Exibir mensagem"} onPress={() => setShow((prevState) => !prevState)} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})
