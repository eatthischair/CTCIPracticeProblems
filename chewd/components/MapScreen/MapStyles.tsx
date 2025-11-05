import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
import {RFValue} from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  container: {
    ...StyleSheet.absoluteFillObject,
    // flex: 1,
    borderColor: 'black',
    borderWidth: 2,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    // borderColor: 'red',
    // borderWidth: 2,
  },
  buttonContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '10%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 2,
    borderColor: 'red',
    borderWidth: 2,
  },
  buttonRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderColor: 'red',
    borderWidth: 2,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    height: height / 1.2,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    flexShrink: 1, // Ensure the text will not overflow

    // borderRadius: 50,
    // padding: 10,
    // elevation: 2,
    // fontSize: RFValue(20),
    flex: 1,
    marginHorizontal: 5,
    paddingHorizontal: 20,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 30,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  blackText: {
    color: 'black',
  },
});
