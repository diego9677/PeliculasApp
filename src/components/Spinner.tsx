import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

export const Spinner = () => {
  return (
    <View style={styles.container}>
        <ActivityIndicator color="red" size={50} />
      </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
