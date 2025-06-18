import { StyleSheet, View, StatusBar, Text } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar/>
      <View style={{ flex:1, flexDirection:'row', alignItems:"center", justifyContent:"space-evenly", backgroundColor: "gray" }}>
        <Text style={styles.nav}>Voltar</Text>
        <Text style={styles.nav}>Home</Text>
        <Text style={styles.nav}>Detalhes</Text>
      </View>

      <View style={{ flex:8 }}>
      </View>

      <View style={{ flex:1, backgroundColor: "black" }}>
        <Text>Footer</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
