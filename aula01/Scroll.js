import { View, Text, StyleSheet, ScrollView } from 'react-native'

export default function App() {
  return (
    <View>
      <ScrollView horizontal style={styles.scroll}>
          <Text style={styles.texto}>Exemplo de Scroll</Text>
          <Text style={styles.texto}>Exemplo de Scroll</Text>
          <Text style={styles.texto}>Exemplo de Scroll</Text>
          <Text style={styles.texto}>Exemplo de Scroll</Text>
          <Text style={styles.texto}>Exemplo de Scroll</Text>
          <Text style={styles.texto}>Exemplo de Scroll</Text>
      </ScrollView>
      <Text>Aula de Native</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    texto: {
        color: "orange",
        fontSize: 28,
        padding: 20
    },
    scroll: {
        backgroundColor: "gray",
        height: 120
    }
})