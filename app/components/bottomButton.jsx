import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute, useIsFocused } from '@react-navigation/native';

export default function BottomButton() {
    const navigation = useNavigation();
    const route = useRoute();
    const isFocused = useIsFocused();
    const isActive = (routeName) => {
        return route.name === routeName && isFocused;
        };
        return (
            <View style={styles.footerBottom}>
                <View style={styles.footerBottomItem}>
                    <TouchableOpacity style={styles.footerBottomName} onPress={() => navigation.navigate('Home')}>
                        <Icon name="home" size={30} style={[styles.iconcolor, isActive('Home') ? styles.active : null,]} />
                        <Text style={[styles.footerBottomText, isActive('Home') ? styles.active : null,]} >होम</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.footerBottomItem}>
                    <TouchableOpacity style={styles.footerBottomName} onPress={() => navigation.navigate('Webstory')}>
                        <Icon name="amp-stories" size={30} style={[styles.iconcolor, isActive('Webstory') ? styles.active : null,]} />
                        <Text style={[styles.footerBottomText, isActive('Webstory') ? styles.active : null,]} >स्टोरीज</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.footerBottomItem}>
                    <TouchableOpacity style={styles.footerBottomName} onPress={() => navigation.navigate('Live')}>
                        <Icon name="live-tv" size={30} style={[styles.iconcolor, isActive('Live') ? styles.active : null,]} />
                        <Text style={[styles.footerBottomText, isActive('Live') ? styles.active : null,]} >लाइव</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.footerBottomItem}>
                    <TouchableOpacity style={styles.footerBottomName} onPress={() => navigation.navigate('Video')}>
                        <Icon name="videocam" size={30} style={[styles.iconcolor, isActive('Video') ? styles.active : null,]} />
                        <Text style={[styles.footerBottomText, isActive('Video') ? styles.active : null,]} >वीडियो</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.footerBottomItem}>
                    <TouchableOpacity style={styles.footerBottomName} onPress={() => navigation.navigate('Settings')}>
                        <Icon name="settings" size={30} style={[styles.iconcolor, isActive('Settings') ? styles.active : null,]} />
                        <Text style={[styles.footerBottomText, isActive('Settings') ? styles.active : null,]} >सेटिंग</Text>
                    </TouchableOpacity>
                </View>
            </View> 
        );
    }
const styles = StyleSheet.create({
        footerBottom: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#ffffff',
    },
        footerBottomItem: {
        width: '20%',
        padding: 10,
        flex: 1,
        alignItems: 'center',
    },
        footerBottomName: {
        alignItems: 'center',
    },
        footerBottomText: {
        fontSize: 16,
        color: '#000000',
        marginTop: 5, 
    },
    iconcolor: {
       color: '#000000',
    },
        active: {
        color: 'red',
    },
});
