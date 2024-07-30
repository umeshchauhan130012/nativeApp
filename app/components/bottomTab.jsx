import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TopReels from './topReels';
import { TopNews } from './topNews';
import TabViewExample from './tabView';

  const webstoryList = [
    {
        "title": "आखिर अपने ही देश में क्यों 'बेगाने' होते जा रहे हैं",
        "image": "https://i.ibb.co/zVsj8Rv/1rl.jpg",
        "links": "/",
    },
    {
        "title": "आखिर अपने ही देश में क्यों 'बेगाने' होते जा रहे हैं",
        "image": "https://i.ibb.co/kQCdXMZ/2rl.jpg",
        "links": "/",
    },
    {
        "title": "आखिर अपने ही देश में क्यों 'बेगाने' होते जा रहे हैं",
        "image": "https://i.ibb.co/Jxd3GMZ/3rl.jpg",
        "links": "/",
    },
    {
        "title": "आखिर अपने ही देश में क्यों 'बेगाने' होते जा रहे हैं",
        "image": "https://i.ibb.co/yn1qtqZ/4rl.jpg",
        "links": "/",
    },
    {
        "title": "आखिर अपने ही देश में क्यों 'बेगाने' होते जा रहे हैं",
        "image": "https://i.ibb.co/JjQTyDS/5rl.jpg",
        "links": "/",
    },
    {
        "title": "आखिर अपने ही देश में क्यों 'बेगाने' होते जा रहे हैं",
        "image": "https://i.ibb.co/sPKh5yX/6rl.jpg",
        "links": "/",
    },
    {
        "title": "आखिर अपने ही देश में क्यों 'बेगाने' होते जा रहे हैं",
        "image": "https://i.ibb.co/1nQKtWC/7rl.jpg",
        "links": "/",
    },
  ];

  function FirstScreen() {
    return (
      <View style={styles.tabitem}>
        <TopReels />
        <TopNews />
        <TabViewExample />
      </View>
    );
  }
  
  function SecondScreen() {
    return (
      <View style={styles.tabitem}>
        <ScrollView verticle={false}>
          <View style={styles.webstorywrp}>
            {webstoryList.map((item, ind) => (
                <View key={ind}  style={styles.webstoryitem}>
                    <Image style={styles.webstoryImage}  source={{ uri: item.image}} />
                    <Text style={styles.webstorytitle}>{item.title}</Text> 
                </View>
                )
              )}  
          </View> 
        </ScrollView>
      </View>
    );
  }

  function ThirdScreen() {
    return (
      <View style={styles.tabitem}>
        <Text>Livetv</Text>
      </View>
    );
  }

  function FourScreen() {
    return (
      <View style={styles.tabitem}>
        <Text>Videos</Text>
      </View>
    );
  }

  function FiveScreen() {
    return (
      <View style={styles.tabitem}>
        <Text>Settings</Text>
      </View>
    );
  }
  
  const Tab = createBottomTabNavigator();
  function MyTabs() {
    return (
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Stories') {
            iconName = focused ? 'amp-stories' : 'amp-stories';
          } else if (route.name === 'Live') {
            iconName = focused ? 'live-tv' : 'live-tv';
          } else if (route.name === 'Videos') {
            iconName = focused ? 'videocam' : 'videocam';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings';
          }
          return <Icon name={iconName} size={30} color={color} />;
        },
        tabBarLabel: ({ focused }) => {
          let labelText;
          if (route.name === 'Home') {
            labelText = 'होम';
          } else if (route.name === 'Stories') {
            labelText = 'स्टोरीज';
          } else if (route.name === 'Live') {
            labelText = 'लाइव';
          } else if (route.name === 'Videos') {
            labelText = 'वीडियो';
          } else if (route.name === 'Settings') {
            labelText = 'सेटिंग';
          }
          return (
            <Text style={{ color: focused ? 'tomato' : 'black', fontSize: 14, }}>
              {labelText}
            </Text>
          );
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        tabBarItemStyle: {
          paddingVertical: 5,
        },
        tabBarStyle: {
          height: 65,
        },
      })}
      >
        <Tab.Screen name="Home" component={FirstScreen} options={{headerShown: false }} />
        <Tab.Screen name="Stories" component={SecondScreen} options={{headerShown: false }} />
        <Tab.Screen name="Live" component={ThirdScreen} options={{headerShown: false }} />
        <Tab.Screen name="Videos" component={FourScreen} options={{headerShown: false }} />
        <Tab.Screen name="Settings" component={FiveScreen} options={{headerShown: false }} />
      </Tab.Navigator>
    );
  }
  
const BottomTab = () => {

  return (
    // <NavigationContainer>
      <MyTabs />
    // </NavigationContainer>
  )
}

export default BottomTab

const styles = StyleSheet.create({
  tabitem: {
    backgroundColor: '#FFF8F9',
    paddingBottom: 10, 
    flex: 1
  },
  webstorywrp: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#f9f9f9',
  },
  webstoryitem: {
    width: '50%',
    padding: 10,
  },
  webstoryImage: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
    display: 'block',
    borderWidth: 2,
    borderColor: '#000000',
    borderStyle: 'dotted',
  },
  webstorytitle: {
    textAlign: 'center',
    fontSize: 16,
    backgroundColor: '#ffffff',
    padding: 10,
  },
  
});