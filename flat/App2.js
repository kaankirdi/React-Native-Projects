
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const SumInput = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [sum, setSum] = useState(0);

  const calculateSum = () => {
    const sum = number1 + number2;
    setSum(sum);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Number 1:</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setNumber1(parseInt(text))}
        value={number1.toString()}
      />
      <Text style={styles.text}>Number 2:</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setNumber2(parseInt(text))}
        value={number2.toString()}
      />
      <Button title="Calculate" onPress={calculateSum} />
      <Text style={styles.text}>Sum:</Text>
      <Text style={styles.sum}>{sum}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    margin: 10,
    width: 200,
  },
  sum: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default SumInput;
