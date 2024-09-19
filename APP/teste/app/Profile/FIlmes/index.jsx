import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import Header from "../../Header/Header";
import { Link } from 'expo-router';
// Dados fictícios para os filmes (você pode substituir por dados reais)
const filmes = [
  { id: '1', titulo: 'Se7ven', imagem: require('./Img/Se7en_poster.jpeg') },
  { id: '2', titulo: 'O Lobo de Wall Sreet', imagem: 'https://m.media-amazon.com/images/I/71Xt2UpcoBL._AC_UF1000,1000_QL80_.jpg' },
  { id: '3', titulo: 'Forest Gump', imagem: 'https://upload.wikimedia.org/wikipedia/pt/c/c0/ForrestGumpPoster.jpg' },
  { id: '4', titulo: 'Baby Driver', imagem: 'https://acdn.mitiendanube.com/stores/593/401/products/c0143-poster-baby-driver-em-ritmo-de-fuga-041-90b4c91ad29b62ef1915097363154762-1024-1024.jpg' },
];

export default function Filmes() {
  const renderItem = ({ item }) => (
    <View style={styles.filmeContainer}>
      <Image 
        source={typeof item.imagem === 'string' ? { uri: item.imagem } : item.imagem} 
        style={styles.filmeImagem} 
      />
      <Text style={styles.filmeTitulo}>{item.titulo}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
      <Link href="/Profile/perfil" style={styles.homeButton}>HOME</Link>
        <Text style={styles.title}>Filmes</Text>
        <FlatList
          data={filmes}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.lista}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    paddingTop: 10,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  lista: {
    alignItems: 'center',
  },
  filmeContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  filmeImagem: {
    width: 200,
    height: 350,
    borderRadius: 10,
  },
  filmeTitulo: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
