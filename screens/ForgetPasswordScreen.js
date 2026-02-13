import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';

const ForgetPasswordScreen = () => {
  const [email, setEmail] = useState('');

  const handleForgetPassword = () => {
    // Here you can add your logic for sending a reset password link to the email
    Alert.alert('Password Reset', 'Password reset link sent to ' + email);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
      />
      <Button title="Reset Password" onPress={handleForgetPassword} />
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
  }
});

export default ForgetPasswordScreen;
