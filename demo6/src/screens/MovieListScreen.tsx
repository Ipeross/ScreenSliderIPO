import React from 'react';
import { FlatList, View, ActivityIndicator, StyleSheet, Text} from 'react-native';
import { useMovies } from '../hooks/useMovies';
import Slider from '../components/Slider';

export default function MovieListScreen() {
  const { nowPlaying, loading, loadMovies } = useMovies();

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
        🎥 Películas en Cartelera 🎬
      </Text>
      <Text style={styles.subHeaderText}>
        Disfruta de las mejores películas disponibles en los cines. Desplázate para explorar más.
      </Text>

      <FlatList
        data={nowPlaying?.movies || []}
        renderItem={({ item }) => (
          <Slider movies={[item]} height={300} backgroundColor="#1c1c1c" />
        )}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        horizontal={true}
        onEndReached={loadMovies}
        onEndReachedThreshold={0.5}
        ListFooterComponent={loading ? <ActivityIndicator size="large" color="#0000ff" /> : null}
        initialNumToRender={5}
        windowSize={3}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#1c1c1c',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
    textAlign: 'center',
  },
  subHeaderText: {
    fontSize: 16,
    color: '#aaa',
    marginBottom: 20,
    textAlign: 'center',
  },
});