import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';

const Calculator: React.FC = () => {
  const [angka1, setAngka1] = useState<string>('');
  const [angka2, setAngka2] = useState<string>('');
  const [hasil, setHasil] = useState<string | number | null>(null);

  const hitung = (operator: '+' | '-' | '*' | '/') => {
    const a = parseFloat(angka1);
    const b = parseFloat(angka2);

    if (isNaN(a) || isNaN(b)) {
      setHasil('Masukkan angka yang valid');
      return;
    }

    switch (operator) {
      case '+':
        setHasil(a + b);
        break;
      case '-':
        setHasil(a - b);
        break;
      case '*':
        setHasil(a * b);
        break;
      case '/':
        setHasil(b !== 0 ? a / b : 'Tidak bisa dibagi 0');
        break;
    }
  };

  const reset = () => {
    setAngka1('');
    setAngka2('');
    setHasil(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kalkulator Sederhana</Text>
      <TextInput
        style={styles.input}
        placeholder="Angka pertama"
        keyboardType="numeric"
        value={angka1}
        onChangeText={setAngka1}
      />
      <TextInput
        style={styles.input}
        placeholder="Angka kedua"
        keyboardType="numeric"
        value={angka2}
        onChangeText={setAngka2}
      />
      <View style={styles.buttonRow}>
        <Button title="+" onPress={() => hitung('+')} />
        <Button title="-" onPress={() => hitung('-')} />
        <Button title="×" onPress={() => hitung('*')} />
        <Button title="÷" onPress={() => hitung('/')} />
      </View>
      <Button title="Reset" onPress={reset} color="#FF6347" />
      <Text style={styles.result}>Hasil: {hasil !== null ? hasil : '-'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 50,
    paddingVertical: 50,
    marginTop: 20,
    backgroundColor: '#B2CD9C',
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white'
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    padding: 10,
    marginVertical: 10,
    borderRadius: 8,
    color: 'white'
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  result: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    marginTop: 20,
  },
});

export default Calculator;
