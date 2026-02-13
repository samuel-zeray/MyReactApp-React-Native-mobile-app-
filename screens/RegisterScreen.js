import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, TouchableOpacity, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    const existingUsers = JSON.parse(await AsyncStorage.getItem('users')) || [];
    const userExists = existingUsers.some(user => user.username === username);

    if (userExists) {
      Alert.alert('Error', 'Username already taken');
      return;
    }

    const newUser = { username, password };
    existingUsers.push(newUser);

    await AsyncStorage.setItem('users', JSON.stringify(existingUsers));
    Alert.alert('Success', 'Account created successfully');
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        placeholderTextColor="white" // White placeholder text color
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        placeholderTextColor="white" // White placeholder text color
      />
      <Button title="Register" onPress={handleRegister} />
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.link}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    padding: 20, 
    backgroundColor: '#000000' 
  },
  input: { 
    height: 40, 
    borderColor: 'gold', 
    borderWidth: 1, 
    marginBottom: 10, 
    padding: 10, 
    color: 'white' 
  },
  link: { 
    color: 'gold', 
    marginTop: 15, 
    textAlign: 'center' 
  }
});

export default RegisterScreen;
