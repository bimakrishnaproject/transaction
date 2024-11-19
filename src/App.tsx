import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import RootStack from './Navigators/Navigation';
import { navigationRef } from './Navigators/utils';

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack />
    </NavigationContainer>
  );
}
