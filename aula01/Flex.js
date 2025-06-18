import { StyleSheet, View, StatusBar, Text } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#d1d1d1" barStyle="light-content" />
      <View style={{ flex:1, backgroundColor: "blue" }}>
        <Text>Header</Text>
      </View>

      <View style={{ flex:8, backgroundColor: "white" }}>
        <Text>Main</Text>
      </View>

      <View style={{ flex:1, backgroundColor: "red" }}>
        <Text>Footer</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
});
