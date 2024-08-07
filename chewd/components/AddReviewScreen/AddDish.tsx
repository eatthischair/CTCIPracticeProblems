import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import Stars from 'react-native-stars';
import {useUser} from '../../UserContext'; // Path to your UserContext
import {addDishStyles} from './AddNewRevStyles';

function AddDish({route, navigation}) {
  const {CustomTouchable} = useUser();
  const {onAddDish} = route.params;
  const [query, setQuery] = useState('');
  const [comments, setComments] = useState('');
  const initialRatings = [{label: 'Overall', value: 0}];
  const [ratings, setRatings] = React.useState(initialRatings);

  const handleSubmit = () => {
    let dishObj = {
      name: query,
      comments,
      ratings: ratings[0],
    };
    onAddDish(dishObj);
    setQuery('');
    setComments('');
    setRatings(initialRatings);
    navigation.navigate('AddNewReview');
  };

  const updateRating = (index, newValue) => {
    const newRatings = ratings.map((item, i) => {
      if (i === index) {
        return {...item, value: newValue};
      }
      return item;
    });
    setRatings(newRatings);
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fffbf2',
      }}>
      <TextInput
        style={addDishStyles.buttonText}
        placeholder="Dish name"
        onChangeText={text => setQuery(text)}
        value={query}
        placeholderTextColor="#000000"
      />
      {ratings.map((item, index) => (
        <React.Fragment key={index}>
          <Text allowFontScaling={true} style={addDishStyles.buttonText}>
            {item.label}
          </Text>
          <Stars
            half={true}
            default={0}
            update={newValue => updateRating(index, newValue)}
            spacing={6}
            starSize={50}
            count={5}
            fullStar={require('../../assets/Stars/starFilled.png')}
            emptyStar={require('../../assets/Stars/starEmpty.png')}
            halfStar={require('../../assets/Stars/starHalf.png')}
          />
        </React.Fragment>
      ))}
      <TextInput
        style={addDishStyles.buttonText}
        placeholder="Comments"
        value={comments}
        onChangeText={text => setComments(text)}
        placeholderTextColor="#000000"
      />
      <CustomTouchable title="Submit" onPress={() => handleSubmit()} />
    </View>
  );
}

export default AddDish;
