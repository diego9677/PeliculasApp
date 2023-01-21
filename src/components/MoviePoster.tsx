import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity} from 'react-native';
import { Movie } from '../interfaces/MovieInterface';
import { RootStackParams } from '../navigator/StackNavigator';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}

export const MoviePoster = ({ movie, height = 420, width = 300 }: Props) => {

  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const { navigate } = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigate('DetailScreen', movie)}
      style={{
        ...styles.containerImage,
        height,
        width,
      }}
    >
      <Image
        source={{uri}}
        style={styles.image}
      />
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  containerImage: {
    alignSelf: 'center',
    marginHorizontal: 8,
  },
  image: {
    flex: 1,
    borderRadius: 18,
  },
});
