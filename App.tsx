import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Cat from './Cat';
import Calculator from './Calculator';

export default function App() {
  return (
    <View style={styles.container}>
      <Cat name='"Meng"'/>
      <Cat name='"Garfield"'/>
      <Cat name='Barong'/>
      <Calculator/>
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
