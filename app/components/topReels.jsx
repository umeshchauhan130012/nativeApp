// import React from 'react';
// import { View, Linking, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

// const reelsArray = [
//     {
//         "title": "Ranjani",
//         "image": "https://i.ibb.co/zVsj8Rv/1rl.jpg",
//         "links": "/",
//     },
//     {
//         "title": "Shikha",
//         "image": "https://i.ibb.co/kQCdXMZ/2rl.jpg",
//         "links": "/",
//     },
//     {
//         "title": "Sanjana",
//         "image": "https://i.ibb.co/Jxd3GMZ/3rl.jpg",
//         "links": "/",
//     },
//     {
//         "title": "Pinki",
//         "image": "https://i.ibb.co/yn1qtqZ/4rl.jpg",
//         "links": "/",
//     },
//     {
//         "title": "Muskan",
//         "image": "https://i.ibb.co/JjQTyDS/5rl.jpg",
//         "links": "/",
//     },
//     {
//         "title": "Anjali",
//         "image": "https://i.ibb.co/sPKh5yX/6rl.jpg",
//         "links": "/",
//     },
//     {
//         "title": "Ragni",
//         "image": "https://i.ibb.co/1nQKtWC/7rl.jpg",
//         "links": "/",
//     }
//   ];

// export default function TopReels() {
//   return (
//     <View style={styles.reelsWrapper}>
//         <Text style={styles.quickTitle}>Quick Reads Links</Text>
//         <View style={styles.quickSlideContain}>
//             <ScrollView horizontal={true} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
//                 {reelsArray.map((item, ind) => (
//                     <View key={ind} style={[styles.itemReapeter, ind === 0 && styles.firstReelsItem, ind === reelsArray.length - 1 && styles.lastReelsItem]}>
//                         <TouchableOpacity onPress={() => Linking.openURL(item.links)}>
//                         <View style={styles.loopImg}>
//                             <Image style={styles.repeatItemImage}  source={{ uri: item.image}} />
//                         </View>
//                         <Text style={styles.titleReapeter}>{item.title}</Text> 
//                         </TouchableOpacity>
//                     </View> 
//                     )
//                 )}  
//             </ScrollView>
//         </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//     quickTitle: {
//       fontSize: 20,
//       fontWeight: '600',
//       paddingHorizontal: 16,
//       paddingBottom: 5,
//     },
//     loopImg : {
//         width: 70,
//         height: 70,
//         borderRadius: 50,
//         borderStyle: 'dotted',
//         borderWidth: 2,
//         borderColor: 'red',
//     },
//     repeatItemImage: {
//         width: 66,
//         height: 66,
//         borderRadius: 50,
//         borderWidth: 2,
//         borderColor: '#fff',
//     },
//     itemReapeter: {
//         width: 80,
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         paddingLeft: 5,
//         paddingRight: 5,
//     },
//     firstReelsItem: {
//         width: 90,
//         paddingLeft: 15,
//     },
//     lastReelsItem: {
//         width: 90,
//         paddingRight: 15,
//     },
//     quickSlideContain:{
//         paddingVertical: 5,
//     },
//     titleReapeter: {
//         textAlign: 'center',
//         display: 'flex',
//         margin: 0,
//         fontSize: 13,
//         color: '#575757',
//         textTransform: 'uppercase',
//         fontWeight: '600',
//         paddingTop: 5,
//     }
// }); 


import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import InstaStory from 'react-native-insta-story';

const data = [
  {
    user_id: 1,
    user_image: 'https://i.ibb.co/zVsj8Rv/1rl.jpg',
    user_name: 'Ranjani',
    stories: [
      {
        story_id: 1,
        story_image: 'https://i.ibb.co/zVsj8Rv/1rl.jpg',
        swipeText: 'Visit website',
        onPress: () => console.log('Navigating to website'),
      },
      {
        story_id: 2,
        story_image: 'https://i.ibb.co/kQCdXMZ/2rl.jpg',
        swipeText: 'Learn more',
        onPress: () => console.log('Navigating to learn more'),
      },
    ],
  },
  {
    user_id: 2,
    user_image: 'https://i.ibb.co/kQCdXMZ/2rl.jpg',
    user_name: 'Shikha',
    stories: [
      {
        story_id: 1,
        story_image: 'https://i.ibb.co/kQCdXMZ/2rl.jpg',
        swipeText: 'Read more',
        onPress: () => console.log('Navigating to read more'),
      },
      {
        story_id: 2,
        story_image: 'https://i.ibb.co/zVsj8Rv/1rl.jpg',
        swipeText: 'Read more',
        onPress: () => console.log('Navigating to read more'),
      },
    ],
  },
  {
    user_id: 3,
    user_image: 'https://i.ibb.co/Jxd3GMZ/3rl.jpg',
    user_name: 'Sanjana',
    stories: [
      {
        story_id: 1,
        story_image: 'https://i.ibb.co/Jxd3GMZ/3rl.jpg',
        swipeText: 'Read more',
        onPress: () => console.log('Navigating to read more'),
      },
      {
        story_id: 2,
        story_image: 'https://i.ibb.co/yn1qtqZ/4rl.jpg',
        swipeText: 'Read more',
        onPress: () => console.log('Navigating to read more'),
      },
    ],
  },
  {
    user_id: 4,
    user_image: 'https://i.ibb.co/yn1qtqZ/4rl.jpg',
    user_name: 'Pinki',
    stories: [
      {
        story_id: 1,
        story_image: 'https://i.ibb.co/yn1qtqZ/4rl.jpg',
        swipeText: 'Read more',
        onPress: () => console.log('Navigating to read more'),
      },
      {
        story_id: 2,
        story_image: 'https://i.ibb.co/Jxd3GMZ/3rl.jpg',
        swipeText: 'Read more',
        onPress: () => console.log('Navigating to read more'),
      },
    ],
  },
  {
    user_id: 5,
    user_image: 'https://i.ibb.co/JjQTyDS/5rl.jpg',
    user_name: 'Muskan',
    stories: [
      {
        story_id: 1,
        story_image: 'https://i.ibb.co/JjQTyDS/5rl.jpg',
        swipeText: 'Read more',
        onPress: () => console.log('Navigating to read more'),
      },
      {
        story_id: 2,
        story_image: 'https://i.ibb.co/sPKh5yX/6rl.jpg',
        swipeText: 'Read more',
        onPress: () => console.log('Navigating to read more'),
      },
    ],
  },
  {
    user_id: 6,
    user_image: 'https://i.ibb.co/sPKh5yX/6rl.jpg',
    user_name: 'Anjali',
    stories: [
      {
        story_id: 1,
        story_image: 'https://i.ibb.co/sPKh5yX/6rl.jpg',
        swipeText: 'Read more',
        onPress: () => console.log('Navigating to read more'),
      },
      {
        story_id: 2,
        story_image: 'https://i.ibb.co/JjQTyDS/5rl.jpg',
        swipeText: 'Read more',
        onPress: () => console.log('Navigating to read more'),
      },
    ],
  },
  {
    user_id: 7,
    user_image: 'https://i.ibb.co/1nQKtWC/7rl.jpg',
    user_name: 'Priti',
    stories: [
      {
        story_id: 1,
        story_image: 'https://i.ibb.co/1nQKtWC/7rl.jpg',
        swipeText: 'Read more',
        onPress: () => console.log('Navigating to read more'),
      },
      {
        story_id: 2,
        story_image: 'https://i.ibb.co/yn1qtqZ/4rl.jpg',
        swipeText: 'Read more',
        onPress: () => console.log('Navigating to read more'),
      },
    ],
  },
  {
    user_id: 8,
    user_image: 'https://i.ibb.co/yn1qtqZ/4rl.jpg',
    user_name: 'Udita',
    stories: [
      {
        story_id: 1,
        story_image: 'https://i.ibb.co/yn1qtqZ/4rl.jpg',
        swipeText: 'Read more',
        onPress: () => console.log('Navigating to read more'),
      },
      {
        story_id: 2,
        story_image: 'https://i.ibb.co/1nQKtWC/7rl.jpg',
        swipeText: 'Read more',
        onPress: () => console.log('Navigating to read more'),
      },
    ],
  },
];

const TopReels = () => {
  return (
    <SafeAreaView style={styles.container}>
      <InstaStory
        data={data}
        duration={5}
        customSwipeUpComponent={
          <View style={styles.swipeUpContainer}>
            <Text style={styles.swipeUpText}>Swipe Up khghithekgihtk</Text>
          </View>
        }
        onStart={null}
        onClose={null}
        onPress={null}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  swipeUpContainer: {
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  swipeUpText: {
    color: 'red',
    fontSize: 16,
  },
});

export default TopReels;

