import { StyleSheet, View, Text, StatusBar } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Teste 1234</Text>
      <StatusBar barStyle='dark-content' translucent={true} backgroundColor="#F1F1F1" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
