import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  contentContainer: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 30,
    paddingBottom: 30,
    flex: 1
  },
  image: { 
    height: 250, 
    width: 250
  },
  registrationText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '200',
    marginTop: 20,
    letterSpacing: 0.2
  },
  forgotPasswordText: {
    textAlign: 'right',
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '200',
    letterSpacing: 0.2
  },
  errorText: {
    fontSize: 14,
    color: 'red'
  },
  imageContainer: {
    backgroundColor: 'transparent',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputContainer: {
    backgroundColor: 'transparent',
    flex: 1
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "red",
    borderWidth: 1,
    height: 40
  }
});