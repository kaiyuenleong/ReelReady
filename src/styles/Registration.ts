import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  contentContainer: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 30,
    paddingBottom: 30,
    flex: 1
  },
  pickerContainer: {
    flex: 1.75,
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputContainer: {
    flex: 2,
    justifyContent: "space-around",
  },
  bottomContainer: {
    flex: 0.75,
    justifyContent: 'space-around',
  },
  cancelText: {
    color: '#9CFFEE',
    textAlign: 'center',
    fontSize: 16,
    marginTop: 10,
    letterSpacing: 0.2
  },
  errorText: {
    fontSize: 14,
    color: 'red'
  }
});