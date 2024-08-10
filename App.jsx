import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import Header from './app/components/header';
import Details from './app/screen/details';
import HomeScreen from './app/screen/HomeScreen';
import Webstory from './app/screen/webstory';
import Categories from './app/screen/categories';
import WebStoryViewer from './app/screen/webstory/webstoryView';
import IframePlayer from './app/screen/live';
import StaticPage from './app/screen/about';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing" screenOptions={{ header: () => <Header />, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Webstory" component={Webstory} />
        <Stack.Screen name="WebstoryView" component={WebStoryViewer} />
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Live" component={IframePlayer} />
        <Stack.Screen name="StaticPage" component={StaticPage} />
        {/* <Stack.Screen name="Details" component={DetailsScreen} options={{ header: () => <Header />, }} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App


