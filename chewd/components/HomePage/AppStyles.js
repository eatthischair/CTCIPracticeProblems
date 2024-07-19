// AppStyles.js
import {Dimensions} from 'react-native';
import {StyleSheet} from 'react-native';
// import {RFValue} from 'react-native-responsive-fontsize';

const {width, height} = Dimensions.get('window');
export const styles = StyleSheet.create({
  Homebuttons: {
    justifyContent: 'center',
    alignItems: 'center',
    color: 'blue',
    borderRadius: 8,
    height: height / 10,
    width: width / 1.5,
    textAlign: 'center',
    backgroundColor: '#03a9fc',
    marginVertical: 10,
  },
  HomebuttonText: {
    color: 'white',
    // fontSize: RFValue(30),
    fontSize: 30,
  },
  MyChew: {
    backgroundColor: '#696D7D',
  },
  Map: {
    backgroundColor: '#68B0AB',
  },
  FindFriends: {
    backgroundColor: '#8FC0A9',
  },
  Homecontainer: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#fff8e7',
  },
  App: {
    flex: 1,
    backgroundColor: '#9dd3fa', // Set your desired background color here
  },
  TextInput: {
    height: 60,
    color: 'black',
    padding: 4,
    margin: 4,
    borderWidth: 1,
    borderColor: 'white',
  },
  text: {
    margin: 4,
    padding: 4,

  }
});
