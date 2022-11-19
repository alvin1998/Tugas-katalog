import React, { useEffect, useState } from 'react';
import { Card, ActivityIndicator, FlatList, Text, View, ImageBackground, ScrollView, SafeArray } from 'react-native';
import styles from "./styles";
export default App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch('https://raw.githubusercontent.com/algosigma/js-reactjs/master/homestays.json');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

  const listHomestay = ({ item }) => {
    return (
      //  <Text>{item.nama}, {item.harga}</Text>
      //  <Card style={styles.cardUtama}></Card>

      <View style={styles.cardUtama}>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>{item.nama}</Text>
        </View>
        <View style={styles.containerImage}>
          <ImageBackground style={styles.image}
            source={{ uri: item.fotoUrl }}>
            <Text style={styles.price}>Rp. {item.harga} Rb</Text>
          </ImageBackground>
        </View>
      </View>
    );
  };

  return (
    <View style={{ flex: 1, padding: 24 }}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={listHomestay} />
    </View>
  );


}
