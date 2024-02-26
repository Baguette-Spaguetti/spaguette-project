import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
<<<<<<< HEAD
      <Text>Hello World !</Text>
=======
      <Text>Hello World! That's me</Text>
>>>>>>> ff08242241dfc66a75333325ed9d39cdd00c2c11
      <StatusBar style="auto" />
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
