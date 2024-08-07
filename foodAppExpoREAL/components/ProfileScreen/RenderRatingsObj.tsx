import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
// import {Rating} from 'react-native-stock-star-rating';

import Stars from 'react-native-stars';

const RenderRatingsObj = ({ratings, style}) => {
  // console.log('RENDERATINGSOBJS REVS', ratings);

  return (
    <FlatList
      data={ratings}
      keyExtractor={item => item.place_id}
      renderItem={({item}) => (
        <View style={styles.row}>
          <Text allowFontScaling={true} style={styles.Text}>
            {item.label}
          </Text>
          <Stars
            display={item.value}
            spacing={8}
            count={5}
            starSize={40}
            fullStar={require('../../assets/Stars/starFilled.png')}
            halfStar={require('../../assets/Stars/starHalf.png')}
            emptyStar={require('../../assets/Stars/starEmpty.png')}
            disabled={true}
          />
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10, // Adjust the spacing between rows as needed
  },
  Text: {
    color: 'black',
  },
});

export default RenderRatingsObj;
