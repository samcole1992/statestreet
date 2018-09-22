import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {

      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    },

  navContainer:{
    flexDirection: 'column',
    flex:1,
    backgroundColor: 'white',
    paddingBottom: 10,
    paddingTop: 10,
    borderWidth: 0.5,
    borderColor: '#d6d7da'
  },
  signupLink: {
    fontSize: 17,
    marginRight: 10,
    color: '#007AFF',
    textAlign: 'center',
    marginTop: 30,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  signUpHeader: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
    marginHorizontal: 10,
    marginTop: 10,

  },
  horizontalRule: {
    borderBottomColor: '#a5a5a5',
    borderBottomWidth: 1,
  },
  signInLink:{
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 15,
    fontSize: 13,
    color: 'black',
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },
  signupInputContainer: {
    borderWidth: 1,
    borderColor: 'rgba(0.3, 0.3, 0.3, 0.3)',
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15,
    position:'relative',
  },
  signupInput:{
    backgroundColor:'white',
  },
  listContainerStyle:{
    backgroundColor: '#fff'
  },
  listItemTitleStyle:{
    color:"#000",
  },
  androidLink: {
    fontSize: 17,
    marginRight: 10,
    color: '#007AFF'
  },
})
