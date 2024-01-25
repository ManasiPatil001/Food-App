import React from 'react';
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Business Sreach'>
      <Stack.Screen name="Business Sreach" component={SearchScreen} />
      <Stack.Screen name="ResultShow" component={ResultsShowScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

