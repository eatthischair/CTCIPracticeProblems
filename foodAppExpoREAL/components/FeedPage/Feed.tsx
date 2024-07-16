import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import tweets from './tweets';
import Tweet from './Tweet';

const Feed = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      {tweets.map(tweet => (
        <Tweet key={tweet.id} tweet={tweet} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
});
export default Feed;
