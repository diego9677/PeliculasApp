import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import currencyFormatter from 'currency-formatter'

import { Cast } from '../interfaces/creditsInterfaces';
import { MovieFull } from '../interfaces/movieInterfaces';
import { CastItem } from './CastItem';

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}

export const MovieDetails = ({ movieFull, cast }: Props) => {


  return (
    <>
      <View style={{ marginHorizontal: 20 }}>
        <View style={{ flexDirection: 'row', gap: 5 }}>
          <Icon name='star-outline' color='gray' size={16} />
          <Text style={styles.textSm}>{movieFull.vote_average.toFixed(2)}</Text>
          <Text style={styles.textSm}>
            - {movieFull.genres.map(g => g.name).join(', ')}
          </Text>
        </View>

        {/* historia */}
        <Text style={styles.textXl}>
          Historia
        </Text>
        <Text style={styles.textMd}>{movieFull.overview}</Text>

        <Text style={styles.textXl}>
          Presupuesto
        </Text>

        <Text style={styles.textLg}>{currencyFormatter.format(movieFull.budget, {code: 'USD'})}</Text>
      </View>

      <View style={{ marginTop: 10, marginBottom: 10 }}>
        <Text style={{ ...styles.textXl, marginHorizontal: 20 }}>
          Actores
        </Text>

        <FlatList
          data={cast}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) =>  <CastItem actor={item} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ marginTop: 10, height: 100 }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  textXl: {
    fontSize: 20,
    marginTop: 20,
    fontWeight: 'bold',
    color: 'black'
  },
  textSm: {
    fontSize: 14,
    color: 'black',
    opacity: 0.6,
  },
  textMd: {
    fontSize: 16,
    color: 'black',
    opacity: 0.6,
  },
  textLg: {
    fontSize: 18,
    color: 'black',
    opacity: 0.6,
  }
});