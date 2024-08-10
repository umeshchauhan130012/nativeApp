import React from 'react'
import TopReels from '../components/topReels';
import { TopNews } from '../components/topNews';
import ScreenWithFooter from './ScreenWithFooter';
import TopTabView from '../components/topTabView';
// import BottomTab from '../components/bottomTab';

const HomeScreen = () => {
  return (
    <ScreenWithFooter>
        <TopReels />
        <TopNews />
        <TopTabView />
    </ScreenWithFooter>
  )
}

export default HomeScreen