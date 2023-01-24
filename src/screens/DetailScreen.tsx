import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { View, Text, Image, StyleSheet, Dimensions, ScrollView, ActivityIndicator } from 'react-native';
import { RootStackParamsList } from '../navigator/StackNavigator';
import { useMovieDetails } from '../hooks/useMovieDetails';
import { MovieDetails } from '../components/MovieDetails';
import Icon from 'react-native-vector-icons/Ionicons'
import { TouchableOpacity } from 'react-native-gesture-handler';

const { height } = Dimensions.get('screen')

interface Props extends StackScreenProps<RootStackParamsList, 'DetailScreen'> {}

export const DetailScreen = ({ route, navigation }: Props) => {
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  
  const { isLoading, movieFull, cast } = useMovieDetails(movie.id)

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <View style={styles.imageBorder}>
          <Image
            source={{
              uri,
            }}
            style={styles.posterImage}
          />
        </View>
      </View>
      <View style={styles.marginContainer}>
        <Text style={styles.subTitle}>{movie.original_title}</Text>
        <Text style={styles.title}>{movie.title}</Text>
      </View>
      {isLoading ? <ActivityIndicator size={35} color='gray'  /> : <MovieDetails movieFull={movieFull!} cast={cast} />}
      <View style={styles.backButton}>
        <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.pop()}>
          <Icon name='arrow-back-outline' size={30} color='white' />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: height * 0.7,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,

    // backgroundColor: 'red',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  imageBorder: {
    flex: 1,
    overflow: 'hidden',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  posterImage: {
    flex: 1,
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  subTitle: {
    color: 'black',
    fontSize: 16,
    opacity: 0.7
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black'
  },
  backButton: {
    position: 'absolute',
    zIndex: 999,
    elevation: 9,
    top: 20,
    left: 10,
    padding: 10,
    backgroundColor: '#581845',
    opacity: 0.9,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center'
  }
})