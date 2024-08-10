// components/ScreenWithFooter.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import BottomButton from '../components/bottomButton';
//import Header from '../components/header';

const ScreenWithFooter = ({ children }) => {
  return (
    <View style={styles.screencontainer}>
      {/* <Header /> */}
      <View style={styles.screencontent}>
        {children}
      </View>
      <BottomButton />
    </View>
  );
};

const styles = StyleSheet.create({
    screencontainer: {
    flex: 1,
  },
  screencontent: {
    flex: 1,
  },
});

export default ScreenWithFooter;
