import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  contentContainer: {
    marginLeft: '8%',
    marginRight: '8%',
    flex: 1
  },
  image: { 
    height: '75%', 
    width: '75%'
  },
  registrationText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '200',
    marginTop: '5%',
    letterSpacing: 0.2
  },
  forgotPasswordText: {
    textAlign: 'right',
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '200',
    letterSpacing: 0.2
  },
  errorText: {
    fontSize: 13,
    color: 'red'
  },
  imageContainer: {
    backgroundColor: 'transparent',
    flex: 3,
    marginTop: '10%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputContainer: {
    backgroundColor: 'transparent',
    flex: 1,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  buttonContainer: {
    backgroundColor: 'transparent',
    flex: 1,
    flexDirection: 'column',
    paddingBottom: 20,
    justifyContent: 'space-between'
  }
});