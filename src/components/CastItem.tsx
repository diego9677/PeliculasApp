import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Cast } from '../interfaces/creditsInterfaces';

interface Props {
  actor: Cast;
}

export const CastItem = ({ actor }: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;

  return (
    <View style={styles.container}>
      {actor.profile_path &&
        <Image
          source={{ uri }}
          style={styles.image}
        />
      }
      <View>
        <Text style={styles.textLg}>{actor.name}</Text>
        <Text style={styles.textMd}>{actor.character}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    height: 70,
    marginHorizontal: 10,

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
    width: 50,
    height: 50,
    borderRadius: 100
  },
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
    fontWeight: 'bold'
  }
});