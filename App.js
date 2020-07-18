import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function App() {
  return (
    
    <View style={styles.container}>
      <Text>Enter Tracking Number</Text>
      <TextInput style={styles.input} />
      <View style={styles.buttonContainer}>
        <Button title='track' />
      </View>
      <View style={styles.buttonContainer}>
        <Button title='return' />
      </View>
      
    </View>
  
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 20,
    width: 70,
    height: 50,
  },
  buttonContainer: {
    marginTop: 20,
    width: 70,
    height: 50,
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  }
});
