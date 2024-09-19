import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Link href="/Profile/perfil" style={styles.headerText}>
        César de Almeida Maroli
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Header;
