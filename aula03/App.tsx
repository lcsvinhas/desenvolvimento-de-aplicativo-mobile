import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Cliente from './src/components/Cliente';
import { useState } from 'react';

export default function App() {
  const [nome, setNome] = useState<string>("Fulano")
  const [idade, setIdade] = useState<string | number>(50)

  function handleChangeName() {
    setNome("Lucas")
    setIdade("26")
  }

  return (
    <View style={styles.container}>
      <Text>Aula de TypeScript</Text>
      <StatusBar style="auto" />
      <Pressable onPress={handleChangeName} style={({ pressed }) => [{
        backgroundColor: pressed ? "blue" : "lightgray",
        padding: 5,
        borderRadius: 5
      }]}>
        {nome !== "" && <Cliente nome={nome} />}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
