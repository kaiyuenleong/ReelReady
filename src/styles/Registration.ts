import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  contentContainer: {
    marginLeft: '8%',
    marginRight: '8%',
    flex: 1
  },
  pickerContainer: {
    flex: 1.75,
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputContainer: {
    flex: 1.75
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'space-around',
    paddingTop: 20,
    paddingBottom: 10
  },
  touchable: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 120,
    borderColor: 'red',
    borderWidth: 1
  },  
  imageProfile: { 
    height: 120,
    width: 120,
    borderRadius: 30,
    borderColor: 'red',
    borderWidth: 1,
    resizeMode: 'contain'
  },
  imagePlus: {
    borderColor: 'red',
    borderWidth: 1,
    resizeMode: 'contain',
    zIndex: 1,
    position: 'absolute',
    top: 100,
    left: 100
  },
  cancelText: {
    color: '#9CFFEE',
    textAlign: 'center',
    fontSize: 16
  }
});