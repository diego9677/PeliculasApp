import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import { Movie } from '../interfaces/movieInterfaces';
import { RootStackParamsList } from '../navigator/StackNavigator';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}

export const MoviePoster = ({ movie, height = 420, width = 300 }: Props) => {

  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const { navigate } = useNavigation<NavigationProp<RootStackParamsList>>();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigate('DetailScreen', movie)}
      style={{
        height,
        width,
        marginHorizontal: 2,
        paddingBottom: 20,
        paddingHorizontal: 7,
      }}
    >
      <View style={styles.containerImage}>
        <Image
          source={{uri}}
          style={styles.image}
        />
      </View>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  containerImage: {
    flex: 1,
    borderRadius: 18,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  image: {
    flex: 1,
    borderRadius: 18
  },
});
