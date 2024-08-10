import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import InstaStory from 'react-native-insta-story';

const data = [
  {
    user_id: 1,
    user_image: 'https://example.com/user1.jpg',
    user_name: 'User 1',
    stories: [
      {
        story_id: 1,
        story_image: 'https://example.com/story1.jpg',
        swipeText: 'Visit website',
        onPress: () => console.log('Navigating to website'),
      },
      {
        story_id: 2,
        story_image: 'https://example.com/story3.jpg',
        swipeText: 'Learn more',
        onPress: () => console.log('Navigating to learn more'),
      },
    ],
  },
  {
    user_id: 2,
    user_image: 'https://example.com/user2.jpg',
    user_name: 'User 2',
    stories: [
      {
        story_id: 1,
        story_image: 'https://example.com/story3.jpg',
        swipeText: 'Read more',
        onPress: () => console.log('Navigating to read more'),
      },
      {
        story_id: 2,
        story_image: 'https://example.com/story1.jpg',
        swipeText: 'Read more',
        onPress: () => console.log('Navigating to read more'),
      },
    ],
  },
  {
    user_id: 3,
    user_image: 'https://example.com/user2.jpg',
    user_name: 'User 2',
    stories: [
      {
        story_id: 1,
        story_image: 'https://example.com/story3.jpg',
        swipeText: 'Read more',
        onPress: () => console.log('Navigating to read more'),
      },
      {
        story_id: 2,
        story_image: 'https://example.com/story3.jpg',
        swipeText: 'Read more',
        onPress: () => console.log('Navigating to read more'),
      },
    ],
  },
  {
    user_id: 4,
    user_image: 'https://example.com/user2.jpg',
    user_name: 'User 2',
    stories: [
      {
        story_id: 1,
        story_image: 'https://example.com/story3.jpg',
        swipeText: 'Read more',
        onPress: () => console.log('Navigating to read more'),
      },
      {
        story_id: 2,
        story_image: 'https://example.com/story3.jpg',
        swipeText: 'Read more',
        onPress: () => console.log('Navigating to read more'),
      },
    ],
  },
  {
    user_id: 5,
    user_image: 'https://example.com/user2.jpg',
    user_name: 'User 2',
    stories: [
      {
        story_id: 1,
        story_image: 'https://example.com/story3.jpg',
        swipeText: 'Read more',
        onPress: () => console.log('Navigating to read more'),
      },
      {
        story_id: 2,
        story_image: 'https://example.com/story3.jpg',
        swipeText: 'Read more',
        onPress: () => console.log('Navigating to read more'),
      },
    ],
  },
  {
    user_id: 6,
    user_image: 'https://example.com/user2.jpg',
    user_name: 'User 2',
    stories: [
      {
        story_id: 1,
        story_image: 'https://example.com/story3.jpg',
        swipeText: 'Read more',
        onPress: () => console.log('Navigating to read more'),
      },
      {
        story_id: 2,
        story_image: 'https://example.com/story3.jpg',
        swipeText: 'Read more',
        onPress: () => console.log('Navigating to read more'),
      },
    ],
  },
  {
    user_id: 7,
    user_image: 'https://example.com/user2.jpg',
    user_name: 'User 2',
    stories: [
      {
        story_id: 1,
        story_image: 'https://example.com/story3.jpg',
        swipeText: 'Read more',
        onPress: () => console.log('Navigating to read more'),
      },
      {
        story_id: 2,
        story_image: 'https://example.com/story3.jpg',
        swipeText: 'Read more',
        onPress: () => console.log('Navigating to read more'),
      },
    ],
  },
  {
    user_id: 8,
    user_image: 'https://example.com/user2.jpg',
    user_name: 'User 2',
    stories: [
      {
        story_id: 1,
        story_image: 'https://example.com/story3.jpg',
        swipeText: 'Read more',
        onPress: () => console.log('Navigating to read more'),
      },
      {
        story_id: 2,
        story_image: 'https://example.com/story3.jpg',
        swipeText: 'Read more',
        onPress: () => console.log('Navigating to read more'),
      },
    ],
  },
];
  
const StoryViewer = () => {
  return (
    <SafeAreaView style={styles.container}>
      <InstaStory
        data={data}
        duration={5}
        customSwipeUpComponent={
          <View style={styles.swipeUpContainer}>
            <Text style={styles.swipeUpText}>Swipe Up</Text>
          </View>
        }
        onStart={item => console.log('Story Start', item)}
        onClose={item => console.log('Story Close', item)}
        onPress={story => console.log('Story Press', story)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  swipeUpContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  swipeUpText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default StoryViewer;
