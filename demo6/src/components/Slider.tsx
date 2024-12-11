import { ScrollView, StyleSheet, View, Image } from 'react-native';
import React from 'react';
import { Movie } from '../config/entities/Movie';

interface ConfigurableSlider {
  movies: Movie[];
  height: number;
  backgroundColor: string;
  width?: number;
}

export default function Slider({ movies, height, backgroundColor, width }: ConfigurableSlider) {
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {movies.map((movie, index) => (
          <Image
            key={`${movie.id}-${index}`}
            style={[
              styles.image,
              {
                height,
                width: width || 200,
              },
            ]}
            source={{
              uri: `https://image.tmdb.org/t/p/original${movie.poster}`,
            }}
            accessibilityLabel={`Poster de la película ${movie.title}`}
            resizeMode="cover"
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    borderRadius: 15,
    overflow: 'hidden',
  },
  image: {
    marginHorizontal: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#fff',
  },
});