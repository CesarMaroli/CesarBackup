import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import Header from "../../Header/Header";
import { Link } from 'expo-router';

const musicas = [
  { id: '1', titulo: 'Tudo Vai dar Certo', imagem: 'https://i.ytimg.com/vi/95sIqFXh6j0/maxresdefault.jpg' },
  { id: '2', titulo: 'Resiliência', imagem: 'https://i.ytimg.com/vi/l-zlfgAhssk/maxresdefault.jpg' },
  { id: '3', titulo: 'Natural Mystic', imagem: 'https://acdn.mitiendanube.com/stores/001/786/483/products/img_20220207_1636016971-4724eeec151381b89016442795158867-240-0.jpg' },
  { id: '4', titulo: 'Eu amo você', imagem: 'https://akamai.sscdn.co/uploadfile/letras/albuns/d/f/5/4/611171512652949.jpg' },
];

export default function Musicas() {
  const renderItem = ({ item }) => (
    <View style={styles.filmeContainer}>
      <Image 
        source={typeof item.imagem === 'string' ? { uri: item.imagem } : item.imagem} 
        style={styles.musicaImagem} 
      />
      <Text style={styles.musicaTitulo}>{item.titulo}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.content}>
      <Link href="/Profile/perfil" style={styles.homeButton}>HOME</Link>
        <Text style={styles.title}>Músicas</Text>
        <FlatList
          data={musicas}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.lista}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  title: {
    paddingTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  lista: {
    alignItems: 'center',
  },
  musicaContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  musicaImagem: {
    width: 200,
    height: 350,
    borderRadius: 10,
  },
  musicaTitulo: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  homeButton: {
    backgroundColor: '#ff0000',
    color: '#fff',
    padding: 10,
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 18,
    width: 200,
    marginTop: 60,
  },
});
