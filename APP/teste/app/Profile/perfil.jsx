import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import Header from '../Header/Header'; 
import { Link } from 'expo-router';

export default function Perfil() {
  return (
    <View style={styles.container}>
      <Header />
      <Image 
        source={{ uri: 'https://yt3.googleusercontent.com/ytc/AIdro_leqsTnV5cYaIUyl7hB6nLg1K5TSvI-cfiKIbaZKhlNtu8=s160-c-k-c0x00ffffff-no-rj' }}
        style={styles.profileImage}
      />
      <View style={styles.buttonContainer}>
        <Link href="./" style={styles.button}>
          <Text style={styles.buttonText}>Filmes</Text>
        </Link>
        <Link href="./" style={styles.button}>
          <Text style={styles.buttonText}>Músicas</Text>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginTop: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
  button: {
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#FF5733',
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
