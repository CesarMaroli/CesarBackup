import { Link } from 'expo-router';
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const App = () => {
  return (
    <View style={styles.container}>
    <Link href="/" style={styles.homeButton}>HOME</Link>
      <LinearGradient
        colors={['#ff7e5f', '#feb47b']}
        style={styles.background}
      />
      <Image
        source={require('./img/Nike-Logo.png')}
        style={styles.logo}
        resizeMode="contain"
        href="/"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  homeButton: {
    backgroundColor: '#ff0000',
    color: '#fff',
    padding: 10,
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 18,
    width: 200,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    ...StyleSheet.absoluteFillObject,
  },
  logo: {
    width: 150,
    height: 150,
  },
});

export default App;
