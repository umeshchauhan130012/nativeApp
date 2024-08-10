import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const TopNews = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        const apiUrl = 'https://fakestoreapi.com/products';
        const params = {
            limit: 10, 
            pagetype:'listing',
            language: 0,
            pageslug: 1
        };
  
        const queryString = new URLSearchParams(params).toString();
        const urlWithParams = `${apiUrl}?${queryString}`;
        try {
          const response = await fetch(urlWithParams, {
            method: 'GET',
            headers: {
                'api_key': 'indianews@#123',
                'api_name': 'X-API-KEY',
                'http_user': 'indianews',
                'http_pass': 'indianews@#123',
                'http_auth': 'basic',
            },
          });
          const result = await response.json();
          setData(result);
          setLoading(false);
        } catch (error) {
          console.error(error);
          setLoading(false);
        }
      };
      fetchData();
    }, []);
    if (loading) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      );
    }
    const navigation = useNavigation();
    const handlePress = (id) => {
      navigation.navigate('Details', { id });
    };
    const TextWithLineClamp = ({ text, numberOfLines }) => {
        return (
            <Text numberOfLines={numberOfLines} style={styles.newsTitleReapeter} >
              {text}
            </Text>
        );
      };
  return (
    <View style={styles.topWrapper}>
        <View style={styles.newsTitleWrap}>
            <Text style={styles.newsTitle}>Top News</Text>
            <Text style={styles.newsTitleMore}>See All</Text>
        </View>
        <View style={styles.newsSlideContain}>
            <ScrollView horizontal={true} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                {data.map((item, ind) => (
                    <View key={ind} style={[styles.newsItemReapeter, ind === 0 && styles.firstItem, ind === data.length - 1 && styles.lastItem]}>
                        <TouchableOpacity style={styles.newsLoopImg}  onPress={() => handlePress(item.id)}>
                            <ImageBackground source={{ uri: item.image}} style={styles.newsRepeatItemImage} imageStyle={{ borderRadius: 6}}>
                                <TextWithLineClamp text={item.title} numberOfLines={2} />
                            </ImageBackground>
                        </TouchableOpacity>
                    </View> 
                    )
                )}  
            </ScrollView>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    newsTitleWrap: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingBottom: 5,
        alignItems: 'center',
    },
    newsTitleMore: {
        fontSize: 14,
    },
    topWrapper: {
        paddingTop: 8,
    },
    newsTitle: {
      fontSize: 20,
      fontWeight: '600',
    },
    newsLoopImg : {
        width: 190,
        height: 140,
        borderRadius: 10,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#ddd',
    },
    newsRepeatItemImage: {
        width: 182,
        height: 132,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#fff',
        resizeMode: 'cover',
        display: 'flex',
        justifyContent: 'flex-end',
        alignContent: 'center',
    },
    newsItemReapeter: {
        width: 200,
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: 5,
        paddingRight: 5,
    },
    newsSlideContain:{
        paddingVertical: 5,
    },
    newsTitleReapeter: {
        display: 'flex',
        textAlign: 'center',
        fontSize: 15,
        color: '#fff',
        fontWeight: '600',
        width: 182,
        height: 55,
        justifyContent: 'center',
        alignItems: 'flex-end',
        alignContent: 'flex-end',
        backgroundColor: '#0000005e',
        marginBottom: -4,
        borderBottomRightRadius: 6,
        borderBottomLeftRadius: 6,
        padding: 7,
    },
    tagWrapper: {
        backgroundColor: 'red',
        height: '200',
        width: '200',
    },
    firstItem: {
        width: 211,
        paddingLeft: 15,
      },
    lastItem: {
        width: 211,
        paddingRight: 15,
    },
}); 

