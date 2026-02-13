import React, { useState, useContext } from 'react';
import { View, TextInput, Button, Alert, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AuthContext } from '../App';  // Import the context
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login, logout, isLoggedIn } = useContext(AuthContext);  // Access context

  const handleLogin = async () => {
    const users = JSON.parse(await AsyncStorage.getItem('users')) || [];
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
      login();  // Call the login function from the context
      navigation.navigate('Welcome');
    } else {
      Alert.alert('Error', 'Invalid credentials');
    }
  };

  const handleLogout = () => {
    logout();  // Call the logout function from the context
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      {isLoggedIn ? (
        <>
          <Text style={styles.welcomeText}>Welcome! You are logged in.</Text>
          <Button title="Logout" onPress={handleLogout} />
        </>
      ) : (
        <>
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
          <Button title="Login" onPress={handleLogin} />
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.link}>Create Account</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')}>
            <Text style={styles.link}>Forgot Password?</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    padding: 20, 
    backgroundColor: '#000000'  // Black background color
  },
  input: { 
    height: 40, 
    borderColor: 'gold',  // Gold border color
    borderWidth: 1, 
    marginBottom: 10, 
    padding: 10, 
    color: 'white', // White text color
  },
  link: { 
    color: 'gold', // Gold color for links
    marginTop: 15, 
    textAlign: 'center' 
  },
  welcomeText: { 
    fontSize: 20, 
    textAlign: 'center', 
    marginBottom: 20, 
    color: 'gold'  // Gold color for welcome text
  },
});

export default LoginScreen;
