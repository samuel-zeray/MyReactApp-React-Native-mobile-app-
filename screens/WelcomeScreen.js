import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the App!</Text>
      <Button title="Go to Profile" onPress={() => alert('Profile Page Coming Soon!')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#000000' 
  },
  text: { 
    color: 'gold', 
    fontSize: 24 
  },
});

export default WelcomeScreen;
