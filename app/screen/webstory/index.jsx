import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import ScreenWithFooter from '../ScreenWithFooter'


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
const Webstory = () => {
  return (
    <ScreenWithFooter>
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
    </ScreenWithFooter>
    
  )
}

export default Webstory


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