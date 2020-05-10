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
  imageContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  centerContainer: {
    flex: 1
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flex: 1
  },
  commonContainer: {
    flex: 1,
    justifyContent: "space-around"
  },
  fieldsContainer: {
    flex: 3,
    justifyContent: "space-around"
  },
  registrationText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '200',
    marginTop: 20,
    letterSpacing: 0.2
  },
  registrationSubtext: {
    color: '#9CFFEE',
    fontWeight: "bold"
  },
  forgotPasswordText: {
    textAlign: 'right',
    color: '#D9D9D9',
    fontSize: 14,
    fontWeight: '200',
    letterSpacing: 0.2
  },
  errorText: {
    fontSize: 14,
    color: 'red'
  }
});