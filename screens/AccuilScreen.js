import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {StyleSheet,Text, View,Image, ImageBackground, TouchableOpacity, } from 'react-native';

export default function WelcomScreen() {
//WelcomeScreen
  const navigation = useNavigation();
  return (
    <View  style={styles.container}>
      <ImageBackground source={require("../assets/images/home1.jpg")} style={styles.image}>

      <Text style={styles.text}>
      {'\n  '}Welcome To {'\n     '} hospital
        </Text>




        <View style={{marginVertical: 80}}>
          <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('SignUp')}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>

          <View style={{flexDirection: 'row',justifyContent: 'center', margin:10}}>
            <Text style={{color: 'white'}}>Already have an account? </Text>
            <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
              <Text style={{color: '#FFB001'}}>
                 Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
</ImageBackground>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4080bf',
    // justifyContent: 'center',
    // alignItems: 'center',
  },

  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 26,
    alignItems: 'center',
    marginRight:80,
    margin: 100,

  },
  containerImage: {
    flexDirection: 'row',

  },
  image: {
    width: 400,
    height: 700

  },

  button: {
    height:40,
    width: 300,
    backgroundColor: '#E5E7EB',
    borderRadius: 10,
    marginLeft:30,
  },
  buttonText: {
    margin:10,
    marginLeft:10,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',

  },
});



