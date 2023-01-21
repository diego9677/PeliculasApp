import React from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';
import { Movie } from '../interfaces/MovieInterface';
import { MoviePoster } from './MoviePoster';

interface Props {
  title?: string;
  movies: Movie[];
}

export const HorizontalSlider = ({title, movies}: Props) => {

  return (
    <View
      style={(title) ? styles.listWithTitle : styles.listWithoutTitle}
    >
      {title && <Text style={styles.title}>{title}</Text>}
      <FlatList
        data={movies}
        renderItem={({ item }) => (
          <MoviePoster movie={item} width={140} height={200} />
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginHorizontal: 8,
  },
  listWithTitle: {
    height: 260,
  },
  listWithoutTitle: {
    height: 220,
  },
});
