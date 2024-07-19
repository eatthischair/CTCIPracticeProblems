import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Ionicons from '@expo/vector-icons/Ionicons';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import {useUser} from '../UserContext'; // Path to your UserContext
import {UserProvider} from '../UserContext';

//screens
import UserProfile from '../components/ProfileScreen/UserProfile';
import Login from '../components/Login/Login';
import SignupScreen from '../components/Login/SignupScreen';
import Feed from '../components/FeedPage/Feed';
import Map from '../components/MapScreen/Map';
import RenderList from '../components/ProfileScreen/RenderList';
import HomeScreen from '../components/HomePage/HomeScreen';
import AddDish from '../components/AddReviewScreen/AddDish';
import EditProfile from '../components/ProfileScreen/EditProfile';
import FindFriends from '../components/HomePage/FindFriends';
import ViewFriendsProfile from '../components/ProfileScreen/ViewFriendsProfile';
import RenderFollowList from '../components/ProfileScreen/RenderFollowList';
import YetToReviewScreen from '../YetToReviewScreen';
import AddNewReviewScreen from '../components/AddReviewScreen/AddNewReviewScreen';


const {width, height} = Dimensions.get('window');

const Tab = createBottomTabNavigator();

function App(): React.JSX.Element {
  const [user, setUser] = useState();

  const {setUsername} = useUser();

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const findUsername = async email => {
    const querySnapshot = await firestore()
      .collection('users') // The name of the collection you're searching
      .where('email', '==', email) // Replace 'username' with the field you're searching by
      .get();

    let foundDocuments = [];
    querySnapshot.forEach(documentSnapshot => {
      // console.log(`Found document with ID ${documentSnapshot.id}`);
      foundDocuments.push(documentSnapshot.data());
    });
    console.log('FOUND DOCUMENTS', foundDocuments);
    setUsername(foundDocuments[0].username);
    return foundDocuments;
  };

  function onAuthStateChanged(user) {
    if (user) {
      // User is logged in
      // console.log('User is logged in', user);
      findUsername(user.email);
      setUser(user);
    } else {
      // User is not logged in
      // console.log('User is not logged in');
    }
  }

  // // eslint-disable-next-line react/no-unstable-nested-components
  function MyTabs() {
    return (
      <Tab.Navigator
        initialRouteName="Sign Up"
        screenOptions={({route}) => ({
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Map') {
              iconName = 'map-outline';
            } else if (route.name === 'AddNewReview') {
              iconName = 'add-circle-outline';
            } else if (route.name === 'Profile') {
              iconName = 'person-outline';
            } else if (route.name === 'Feed') {
              iconName = 'reader-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />

        <Tab.Screen name="Map" component={Map} />
        <Tab.Screen name="AddNewReview" component={AddNewReviewScreen} />
        <Tab.Screen name="Feed" component={Feed} />
        <Tab.Screen name="Profile" component={UserProfile} />
      </Tab.Navigator>
    );
  }

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer independent={true}>
  {/* <Stack.Screen name="Sign Up" component={SignupScreen} /> */}
       <Stack.Navigator initialRouteName="Tabs">
         {user ? (
           <Stack.Screen
             name="Tabs"
             component={MyTabs}
             options={{headerShown: false}}
           />
         ) : (
           <Stack.Screen name="SignUp" component={SignupScreen} />
         )}
            <Stack.Screen name="Login" component={Login} />

      <Stack.Screen name="YetToReview" component={YetToReviewScreen} />
      <Stack.Screen name="AddDish" component={AddDish} />
      <Stack.Screen name="Reviews" component={RenderList} />
      <Stack.Screen name="FriendsProfile" component={ViewFriendsProfile} />
      <Stack.Screen name="Edit Profile" component={EditProfile} />
      <Stack.Screen name="Find Friends" component={FindFriends} />
      <Stack.Screen name="Followers/Following" component={RenderFollowList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  buttons: {
    justifyContent: 'center',
    alignItems: 'center',
    color: 'blue',
    borderRadius: 8,
    height: height / 15,
    width: width / 2,
    textAlign: 'center',
    backgroundColor: '#03a9fc',
    marginVertical: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
});

export default App;
