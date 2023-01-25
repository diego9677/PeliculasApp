import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator';
import { GradientProvider } from './src/context/gradientContext';
// import { FadeScreen } from './src/screens/FadeScreen';

interface Props {
  children?: JSX.Element | JSX.Element[];
}

const AppState = ({ children }: Props) => {
  return (
    <GradientProvider>
      {children}
    </GradientProvider>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <StackNavigator />
        {/* <FadeScreen /> */}
      </AppState>
    </NavigationContainer>
  );
};

export default App;
