import {View, Dimensions, Platform, Pressable, Text} from 'react-native';

import {useContext, useEffect} from 'react';
import {useUser} from '../../UserContext'; // Path to your UserContext
import firestore from '@react-native-firebase/firestore';
import {styles} from './AppStyles';

import {
  useFocusEffect,
  useIsFocused,
  useNavigation,
} from '@react-navigation/native';

import ReviewCaller from '../../components/DatabaseCalls/ReviewCaller';
import GetCurrentUser from '../../components/MiscFuns/GetCurrentUser';
import StoreDataAsync from '../../components/MiscFuns/StoreDataAsync';


const HomeScreen = ({route, navigation}) => {
  // const {CustomTouchable} = useUser();

  const handleNavigation = screenName => {
    navigation.navigate(screenName);
  };

  const isFocused = useIsFocused();

  useEffect(() => {
    // Define an async function inside useEffect

    const fetchData = async () => {
      let user = GetCurrentUser();
      console.log('USER', user);
      let revs = await ReviewCaller('test1', user).catch(
        'revs not working boss',
      );
      // console.log('inside fetch data, boss');
      let yets = await ReviewCaller('test2', user);
      StoreDataAsync(revs, yets);
      // console.log('async stored');
    };

    if (isFocused) {
      // console.log('is focused, boss');
      fetchData();
    }
  }, [isFocused]);

  return (
    <View style={styles.Homecontainer}>
      <Pressable
        title="My Chew"
        onPress={() => handleNavigation('Profile')}
        style={[styles.Homebuttons, styles.MyChew]}
      >
        <Text>My Chew</Text>
      </Pressable>
      <Pressable
        title="Map"
        onPress={() => handleNavigation('Map')}
        style={[styles.Homebuttons, styles.Map]}
      >
        <Text>Map</Text>
      </Pressable>
      <Pressable
        title="Find Friends"
        onPress={() => handleNavigation('Find Friends')}
        style={[styles.Homebuttons, styles.FindFriends]}
      >
        <Text>Find Friends</Text>
      </Pressable>

      {/* <CustomTouchable
        title="Friends Chew"
        onPress={() => handleNavigation('Feed')}
      /> */}
      {/* <CustomTouchable title="Verified Chewologists" /> */}
    </View>
  );
};

export default HomeScreen;
