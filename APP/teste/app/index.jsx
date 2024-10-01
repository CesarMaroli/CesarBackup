import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
  return (
    <View style={styles.container}>
      <Link id="banco" href="./Banco/banco" style={styles.banco}>
        Banco
      </Link>
      <Link id="calculadora" href="./Calculadora" style={styles.calculadora}>
        Calculadora
      </Link>
      <Link id="tarefas" href="./Tarefas" style={styles.tarefas}>
        Tarefas
      </Link>
      <Link id="screen" href="./Screen" style={styles.screen}>
        Screen
      </Link>
      <Link id="screen" href="./Profile/perfil" style={styles.perfil}>
        Perfil
      </Link>
      <Link id="screen" href="./Pokedex" style={styles.perfil}>
        Pokedex
      </Link>
      <Link id="screen" href="./Ifome" style={styles.perfil}>
        Ifome
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  banco: {
    backgroundColor: '#4CAF50',
    color: '#fff',
    padding: 10,
    marginVertical: 10,
    fontSize: 18,
    borderRadius: 5,
    width: 200,
    textAlign: 'center',
  },
  calculadora: {
    backgroundColor: '#2196F3',
    color: '#fff',
    padding: 10,
    marginVertical: 10,
    fontSize: 18,
    borderRadius: 5,
    width: 200,
    textAlign: 'center',
  },
  tarefas: {
    backgroundColor: '#FF5722',
    color: '#fff',
    padding: 10,
    marginVertical: 10,
    fontSize: 18,
    borderRadius: 5,
    width: 200,
    textAlign: 'center',
  },
  screen: {
    backgroundColor: '#9C27B0',
    color: '#fff',
    padding: 10,
    marginVertical: 10,
    fontSize: 18,
    borderRadius: 5,
    width: 200,
    textAlign: 'center',
  },
  perfil: {
    backgroundColor: '#FF5722',
    color: '#fff',
    padding: 10,
    marginVertical: 10,
    fontSize: 18,
    borderRadius: 5,
    width: 200,
    textAlign: 'center',
  }
});
