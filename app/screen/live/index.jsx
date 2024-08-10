import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import ScreenWithFooter from '../ScreenWithFooter';

const IframePlayer = () => {
  const videoUrl = 'https://www.youtube.com/embed/Zg4h0L403oA?si=NFRYOjmmoeLyKnhI?autoplay=1&playsinline=1';
  return (
    <ScreenWithFooter>
        <View style={styles.container}>
           <WebView source={{ uri: videoUrl }}  style={styles.webview} javaScriptEnabled={true} domStorageEnabled={true} onError={(error) => console.log('WebView Error:', error)} onLoad={() => console.log('WebView Loaded')} />
        </View>
    </ScreenWithFooter>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 250,
  },
  webview: {
    height: 250, 
  },
});

export default IframePlayer;
