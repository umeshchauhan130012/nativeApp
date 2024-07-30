import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Text, TouchableOpacity, Modal, StyleSheet, Image, ScrollView, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Header() {
  const navigation = useNavigation();
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [isNotificationVisible, setNotificationVisible] = useState(false);
  const [notification, setNotification] = useState(1);
  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };
  const notificationToggle = () => {
    setNotificationVisible(!isNotificationVisible);
    setNotification(0)
  }; 

  const notificationData = [
    {
        "title": "Ranjanit",
        "image": "https://i.ibb.co/zVsj8Rv/1rl.jpg",
        "content": "ईरान मे अपनों का ही हत्यारा बना शख्स, फायरिंग कर ली 12 लोगों की जान",
        "links": "/",
    },
    {
        "title": "Shikha",
        "image": "https://i.ibb.co/kQCdXMZ/2rl.jpg",
        "content": "ईरान मे अपनों का ही हत्यारा बना शख्स, फायरिंग कर ली 12 लोगों की जान",
        "links": "/",
    },
    {
        "title": "Sanjana",
        "image": "https://i.ibb.co/Jxd3GMZ/3rl.jpg",
        "content": "ईरान मे अपनों का ही हत्यारा बना शख्स, फायरिंग कर ली 12 लोगों की जान",
        "links": "/",
    },
    {
        "title": "Pinki",
        "image": "https://i.ibb.co/yn1qtqZ/4rl.jpg",
        "content": "ईरान मे अपनों का ही हत्यारा बना शख्स, फायरिंग कर ली 12 लोगों की जान",
        "links": "/",
    },
    {
        "title": "Muskan",
        "image": "https://i.ibb.co/JjQTyDS/5rl.jpg",
        "content": "ईरान मे अपनों का ही हत्यारा बना शख्स, फायरिंग कर ली 12 लोगों की जान",
        "links": "/",
    },
    {
        "title": "Anjali",
        "image": "https://i.ibb.co/sPKh5yX/6rl.jpg",
        "content": "ईरान मे अपनों का ही हत्यारा बना शख्स, फायरिंग कर ली 12 लोगों की जान",
        "links": "/",
    },
    {
        "title": "Ragni",
        "image": "https://i.ibb.co/1nQKtWC/7rl.jpg",
        "content": "ईरान मे अपनों का ही हत्यारा बना शख्स, फायरिंग कर ली 12 लोगों की जान",
        "links": "/",
    },
    {
      "title": "Rajni",
      "image": "https://i.ibb.co/sPKh5yX/6rl.jpg",
      "content": "ईरान मे अपनों का ही हत्यारा बना शख्स, फायरिंग कर ली 12 लोगों की जान",
      "links": "/",
  },
    ];
    const TextWithLineClamp = ({ text, numberOfLines }) => {
      return (
          <Text numberOfLines={numberOfLines} style={styles.ListContent} >
            {text}
          </Text>
      );
    };
  return (
        <View style={styles.headerWrapper}>
          <View style={styles.headerContainer}>
            <Image style={styles.tinyLogo} source={require('../images/logo-theindiadaily.png')} />
            <TouchableOpacity onPress={notificationToggle} style={styles.searchmain}>
              <Icon name="notifications-outline" size={30} color="#333333" />
              {notification > 0 && (
                <View style={styles.notificationwrap}>
                  <Text style={styles.notification}>4</Text>
                </View>
              )}
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleMenu}>
              <Icon name="menu" size={40} color="#222222" />
            </TouchableOpacity>
          </View>
          <Modal transparent={true} animationType="slide" visible={isMenuVisible} onRequestClose={toggleMenu}>
            <View style={styles.menuWrapper}>
              <TouchableOpacity onPress={toggleMenu}>
                <View style={styles.menuButton}><Text style={styles.menuButtontext}>Close</Text><Icon style={styles.menuButtonClose} name="close" size={28} color="#000000" /></View>
              </TouchableOpacity>
              <View style={styles.menuitemContain}>
                <Button title="Go to Details" onPress={() => navigation.navigate('Details')} />
                <Text style={styles.menuItem} >देश</Text>
                <Text style={styles.menuItem}>बजट 2024</Text> 
                <Text style={styles.menuItem}>UP</Text>
                <Text style={styles.menuItem}>बिहार</Text>
                <Text style={styles.menuItem}>मनोरंजन</Text>
                <Text style={styles.menuItem}>धर्म</Text>
                <Text style={styles.menuItem}>लाइफस्टाइल</Text>
                <Text style={styles.menuItem}>खेल</Text>
                <Text style={styles.menuItem}>जॉब्स</Text>
                <Text style={styles.menuItem}>ऑटो</Text>
                <Text style={styles.menuItem}>विदेश</Text>
                <Text style={styles.menuItem}>यूटिलिटी</Text>
                <Text style={styles.menuItem}>वायरल</Text>
                <Text style={styles.menuItem}>वेब स्टोरीज</Text>
                <Text style={styles.menuItem}>टेक</Text>
                <Text style={styles.menuItem}>फोटो गैलरी</Text>
                <Text style={styles.menuItem}>वीडियो</Text>
                <Text style={styles.menuItem}>टॉपिक</Text>
              </View>
            </View>
          </Modal>
          <Modal transparent={true} animationType="slide" visible={isNotificationVisible} onRequestClose={notificationToggle}>
            <View style={styles.notificationWrapper}>
              <View style={styles.authorcontain}>
                  <TouchableOpacity onPress={notificationToggle}>
                    <Icon name="close" size={30} color="#333333" />
                  </TouchableOpacity>
                  <Image style={styles.authorImage} source={require('../images/logo-theindiadaily.png')} />
                  <Text style={styles.authorname}>Umesh Chauhan</Text>
              </View>
              <ScrollView style={styles.scrollView} verticle={false}>
                <View style={styles.tabContainer}>
                  {notificationData.map((item, ind) => (
                  <View key={ind} style={styles.tabItemList}>
                    <View>
                      <Image style={styles.tabItemListImgMain} source={{ uri: item.image}} />
                    </View>
                    <View style={styles.tabItemListContent}>
                      <Text style={styles.ListContentTitle}>{item.title}</Text>
                      <TextWithLineClamp key={ind} text={item.content} numberOfLines={2} />
                    </View>
                  </View>
                  ))}
                </View>
              </ScrollView> 
            </View>
          </Modal>
        </View> 
  );
}
const styles = StyleSheet.create({
  headerWrapper: {
    paddingBottom: 10, 
  },
  headerContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical:10,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3}, 
    shadowOpacity: .3,  
    elevation: 1,
  }, 
  menuWrapper: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 10,
  },
  notificationWrapper: {
    backgroundColor: '#fff',
    flex: 1,
    paddingBottom: 10,
  },
  tinyLogo: {
    width: 80,
    height: 60,
  },
  searchmain: {
    marginLeft: 'auto',
    marginRight: 30,
    position: 'relative',
  },
  notificationwrap: {
    position: 'absolute',
    right: -10,
    top: -5,
    backgroundColor: 'red',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notification: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  scrollView: {
    backgroundColor: '#dddddd'
  },
  tabContainer: {
    display: 'flex',
    flex: 1,
    padding: 15,
    paddingBottom: 0,
  },
  tabItemList: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    marginBottom: 10, 
    padding: 10,
    borderRadius: 10,
  },
  tabItemListContent: {
    paddingHorizontal: 10,
    flex: 1,
    paddingLeft: 20,
  },
  ListContentTitle: {
    fontSize: 16,
    fontWeight: '600',
    paddingBottom: 5,
    lineHeight: 17,
  },
  ListContent: {
    fontSize: 15,
  },
  tabItemListImgMain: {
    height: 70,
    width: 70,
    borderRadius: 10,
  },
  authorImage: {
    height: 100,
    width: 100,
    borderRadius: 50,
    objectFit: 'cover',
    display: 'block',
    margin: 'auto',
    borderWidth: 2,
    borderColor: "#ffffff",
    borderRadius: 50,
  },
  authorcontain: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#dddddd'
  },
  authorname: {
    fontSize: 25,
    color: 'red',
    fontWeight: '700',
    textAlign: 'center',
    paddingTop: 15,
  },
  menuitemContain: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  menuItem: {
    width: '50%',
    padding: 10,
    fontSize: 20,
    color: '#333333',
  },
  menuButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  menuButtontext: {
    fontSize: 20,
    color: '#000000',
    fontWeight: '700',
  },
  menuButtonClose: {
    paddingLeft: 10,
    color: '#000000',
  },
});
