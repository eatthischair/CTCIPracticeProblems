import React, {useState, useMemo} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
  Alert,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {RFValue} from 'react-native-responsive-fontsize';
import RadioGroup from 'react-native-radio-buttons-group';

// import { Picker } from '@react-native-picker/picker';
import DropDownPicker from 'react-native-dropdown-picker';

import Slider from '@react-native-community/slider';

const {width, height} = Dimensions.get('window');

import {useUser} from '../../UserContext'; // Path to your UserContext
import {useNavigation} from '@react-navigation/native';

const EditProfile = ({route}) => {
  const navigation = useNavigation();
  const CustomTouchable = ({title, onPress}) => {
    return (
      <TouchableOpacity
        style={styles.buttons}
        onPress={onPress}
        activeOpacity={0.8}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    );
  };

  const {userId, setUserId} = useUser();
  // console.log('USER ID IN EDIT PROFILE', userId);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [ageRange, setAgeRange] = useState('');
  const [incomeRange, setIncomeRange] = useState('');
  const [diningFrequency, setDiningFrequency] = useState('');
  const [profileVisibility, setProfileVisibility] = useState('Public');

  const updateUserData = async () => {
    Alert.alert(
      'Profile Updates',
      'Your profile has been successfully updated!',
      [
        {
          text: 'OK',
          onPress: () => navigation.navigate('Profile'),
        },
      ],
    );
    const userRef = firestore().collection('users').doc(userId);

    try {
      await userRef.update({
        // Fields you want to update
        firstName: firstName,
        lastName: lastName,
        profileVisibility,
        // Add other fields you want to update here
      });
      console.log('User updated!');
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };
  //radio button values
  const radioButtons = useMemo(
    () => [
      {
        id: '1', // acts as primary key, should be unique and non-empty string
        label: 'Public (Open Book, share my reviews with everyone)',
        value: 'Public (Open Book, share my reviews with everyone)',
        labelStyle: styles.Text, // This sets the style for the label text
      },
      {
        id: '2',
        label: 'Private (Invite Only, reviews and followers)',
        value: 'Private (Invite Only, reviews and followers)',
        labelStyle: styles.Text, // This sets the style for the label text
      },
    ],
    [],
  );

  const radioButtons2 = useMemo(
    () => [
      {
        id: '1', // acts as primary key, should be unique and non-empty string
        label:
          'Highschool (limited experience/exposure or not too focused on it)',
        value:
          'Highschool (limited experience/exposure or not too focused on it)',
        labelStyle: styles.Text, // This sets the style for the label text
      },
      {
        id: '2',
        label:
          'Bachelors (experimented a little, developing taste buds for more adventures, basic ability to review, pretty opinionated, hard to be objective with food)',
        value:
          'Bachelors (experimented a little, developing taste buds for more adventures, basic ability to review, pretty opinionated, hard to be objective with food)',
        labelStyle: styles.Text, // This sets the style for the label text
      },
      {
        id: '3',
        label:
          'Masters (lived, loved, knows there is more to explore, can review giving details and specifics)',
        value:
          'Masters (lived, loved, knows there is more to explore, can review giving details and specifics)',
        labelStyle: styles.Text, // This sets the style for the label text
      },
      {
        id: '4',
        label:
          'Doctorate (describe specific flavors or ingredients, reviews in detail, can also be truly objective in review, even give credit for flavors I don’t like but quality worth noting)',
        value:
          'Doctorate (describe specific flavors or ingredients, reviews in detail, can also be truly objective in review, even give credit for flavors I don’t like but quality worth noting)',
        labelStyle: styles.Text, // This sets the style for the label text
      },
    ],
    [],
  );
  const [selectedId, setSelectedId] = useState();
  const [selectedId1, setSelectedId1] = useState();

  //dropdown hooks
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: '18-25', value: '18-25'},
    {label: '26-35', value: '26-35'},
    {label: '36-45', value: '36-45'},
    {label: '46-55', value: '46-55'},
  ]);

  const [open1, setOpen1] = useState(false);
  const [value1, setValue1] = useState(null);
  const [items1, setItems1] = useState([
    {label: '$0 - $50,000', value: '0-50000'},
    {label: '$50,001 - $100,000', value: '50001-100000'},
  ]);
  const [open2, setOpen2] = useState(false);
  const [value2, setValue2] = useState(null);
  const [items2, setItems2] = useState([
    {label: 'Rarely', value: 'rarely'},
    {label: 'Occasionally', value: 'occasionally'},
    {label: 'Frequently', value: 'frequently'},
  ]);

  return (
    <ScrollView style={styles.container}>
      <TextInput
        value={firstName}
        onChangeText={setFirstName}
        placeholder="First Name"
        style={styles.input}
        placeholderTextColor={'black'}
      />
      <TextInput
        value={lastName}
        onChangeText={setLastName}
        placeholder="Last Name"
        style={styles.input}
        placeholderTextColor={'black'}
      />
      {/* <Text>Age Range</Text>
      <View style={styles.box}>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          modal={true}
        />
      </View>
      <Text>Income Range</Text>
      <View style={styles.box}>
        <DropDownPicker
          open={open1}
          value={value1}
          items={items1}
          setOpen={setOpen1}
          setValue={setValue1}
          setItems={setItems1}
          modal={true}
        />
      </View>
      <View style={styles.box}>
        <Text>How often do you dine out?</Text>
        <DropDownPicker
          open={open2}
          value={value2}
          items={items2}
          setOpen={setOpen2}
          setValue={setValue2}
          setItems={setItems2}
          modal={true}
        />
      </View> */}
      <View style={styles.innerContainer}>
        <Text style={styles.Text}>Profile Visibility</Text>
        <RadioGroup
          radioButtons={radioButtons}
          onPress={setSelectedId}
          selectedId={selectedId}
        />
      </View>
      <View>
        <Text style={styles.Text}>Level of Chewology</Text>
        <RadioGroup
          radioButtons={radioButtons2}
          onPress={setSelectedId1}
          selectedId={selectedId1}
        />
      </View>
      <CustomTouchable
        title="Submit"
        onPress={() => updateUserData()}></CustomTouchable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  innerContainer: {
    height: height * 0.2, // 50% of screen height
    width: '80%', // 80% of screen width (optional)
    // backgroundColor: 'lightgray',
    justifyContent: 'center',
  },
  box: {
    margin: 40,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    color: 'black',
  },
  picker: {
    marginBottom: 20,
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 40,
  },
  radioButtonText: {
    marginRight: 10,
  },
  radioButtonInner: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButtonDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#000',
  },
  buttons: {
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    borderRadius: 8,
    height: height / 10,
    width: width,
    textAlign: 'center',
    backgroundColor: '#000000',
    marginVertical: 3,
  },
  buttonText: {
    fontSize: 20,
    color: '#ffffff',
  },
  Text: {
    color: 'black',
    flex: 1,
    // backgroundColor: 'white',
    margin: 5,
    justifyContent: 'center',
    fontSize: RFValue(14),
    alignItems: 'center',
  },
});

export default EditProfile;
