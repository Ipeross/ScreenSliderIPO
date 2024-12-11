import React from 'react';
import { View, FlatList, ActivityIndicator, StyleSheet, Dimensions } from 'react-native';
import { useMovies } from '../hooks/useMovies';
import Slider from '../components/Slider';

const { width } = Dimensions.get("window");

export default function MovieListVerticalScreen() {
  const { nowPlaying, loading, loadMovies } = useMovies();

  return (
    <View style={styles.container}>
      <FlatList
        data={nowPlaying?.movies || []}
        renderItem={({ item }) => (
          <Slider
            movies={[item]}
            height={400}
            width={width - 40}
            backgroundColor="#1c1c1c"
          />
        )}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        horizontal={false}
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
});