import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './app/components/header';
import BottomTab from './app/components/bottomTab';
import DetailsScreen from './app/screen/details';

const Stack = createStackNavigator();
const HomeWithHeader = () => {
  return (
    <>
      <Header />
      <BottomTab />
    </>
  );
};
const App = () => {
  return (
    <>
    {/* <Header /> */}
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        {/* <Stack.Screen name="Landing" component={BottomTab} /> */}
        <Stack.Screen name="HomeWithHeader" component={HomeWithHeader} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    {/* <BottomTab /> */}
    </>
  )
}

export default App


