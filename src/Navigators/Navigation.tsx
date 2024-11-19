import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { authorizedScreen } from './config';

const Stack = createNativeStackNavigator();

export default function RootStack(props: any) {
  return (
    <>
      <Stack.Navigator>
        {authorizedScreen?.map((el, i) => {
          return (
            <Stack.Screen
              name={el?.name}
              component={el?.component}
              key={i}
              options={el?.options}
            />
          );
        })}
      </Stack.Navigator>
    </>
  );
}
