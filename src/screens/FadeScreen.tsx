import React from 'react';
import { View, Text, Button, Animated } from 'react-native';
import { useFade } from '../hooks/useFeed';


export const FadeScreen = () => {
    const { opacity, fadeIn, fadeOut } = useFade();

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: 'gray',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Animated.View
                style={{
                    backgroundColor: '#084F6A',
                    width: 150,
                    height: 150,
                    borderColor: 'white',
                    borderWidth: 10,
                    marginBottom: 20,
                    opacity,
                }}
            />

            <Button
                title='Fade In'
                onPress={fadeIn}
            />
            <Button
                title='Fade Out'
                onPress={fadeOut}
            />
        </View>
    );
};
