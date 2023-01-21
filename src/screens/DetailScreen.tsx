import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { View, Text } from 'react-native';
import { RootStackParams } from '../navigator/StackNavigator';

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen', ''> {}

export const DetailScreen = ({ route }: Props) => {
  const movie = route.params;

  return (
    <View>
      <Text>Detail Screen</Text>
    </View>
  );
};
