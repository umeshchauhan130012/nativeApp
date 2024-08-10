import React, { useState, useEffect } from 'react';
import { Text, FlatList, View, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import ScreenWithFooter from '../ScreenWithFooter';

const Categories = () => {
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
        //console.log(urlWithParams);
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
          console.log('API Response:', result);
          setData(result);
          setLoading(false);
        } catch (error) {
          console.error(error);
          setLoading(false);
        }
      };
      fetchData();
    }, []);
  console.log(data);
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
    return(
        <ScreenWithFooter>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handlePress(item.id)}>
                    <Text>{item.title}</Text>
                </TouchableOpacity>
                )}
            />
        </ScreenWithFooter>
    );
};
export default Categories