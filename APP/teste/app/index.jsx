import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';


export default function Page(){
return(
    <View>
        <Link href="./Banco/banco">Banco</Link>
        <Link href="./Calculadora">Calculadora</Link>
        <Link href="./Tarefas">Tarefas</Link>
        <Link href="./Screen">Screen</Link>
    </View>
);
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
      backgroundColor: '#f5f5f5',
    },
})
};