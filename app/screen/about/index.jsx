import React from 'react';
import { Text, View, StyleSheet, ScrollView } from "react-native";
import RenderHtml from 'react-native-render-html';
import { useWindowDimensions } from 'react-native';
import ScreenWithFooter from '../ScreenWithFooter';
import aboutData from '../../components/aboutData';

const StaticPage = ({ route }) => {
  const pageName2 = route.params.pageName;
  const { width } = useWindowDimensions();
  const aboutPage = aboutData[pageName2];
    return(
        <ScreenWithFooter>
          <ScrollView verticle={false} >
            <View style={styles.container}>
              <Text style={styles.heading}>{aboutPage.title}</Text>
              {aboutPage.paragraphs.map((paragraph, pIndex) => (
                <RenderHtml
                  key={pIndex}
                  contentWidth={width}
                  source={{ html: paragraph }}
                  ignoredDomTags={['label']}
                  tagsStyles={tagsStyles}
                />
              ))}
            </View>
          </ScrollView>
        </ScreenWithFooter>
    );
};
export default StaticPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff'
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

const tagsStyles = {
  p: {
    fontSize: 16,
    lineHeight: 25,
    marginBottom: 7,
    marginTop: 7,
    textAlign: 'justify'
  },
  h2: {
    fontSize: 20,
    lineHeight: 25,
    marginBottom: 5,
    marginTop: 5,
  },
  h3: {
    fontSize: 20,
    lineHeight: 25,
    marginBottom: 5,
    marginTop: 5,
  },
  h4: {
    fontSize: 18,
    lineHeight: 25,
    marginBottom: 5,
    marginTop: 5,
  },
  h5: {
    fontSize: 18,
    lineHeight: 20,
    marginBottom: 5,
    marginTop: 5,
    color: '#b80000',
  },
  h6: {
    fontSize: 16,
    lineHeight: 20,
    marginBottom: 5,
    marginTop: 5,
    color: '#b80000',
  },
  strong: {
    fontWeight: 700,
  },
  ul: {
    marginTop: 5,
    marginBottom: 5,
    paddingLeft: 15,
    fontSize: 16,
    lineHeight: 25,
  },
  ol: {
    marginTop: 5,
    marginBottom: 5,
    paddingLeft: 15,
    fontSize: 16,
    lineHeight: 25,
  },
  li: {
    marginBottom: 10,
  }
};
