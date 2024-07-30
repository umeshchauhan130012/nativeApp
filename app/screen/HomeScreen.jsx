import { View } from 'react-native'
import React from 'react'
import TopReels from '../components/topReels';
import { TopNews } from '../components/topNews';

const HomeScreen = () => {
  return (
    <View>
      <TopReels />
      <TopNews />
    </View>
  )
}

export default HomeScreen