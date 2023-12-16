import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { StyleSheet, TouchableOpacity, View,Image,Text,TextInput,ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../data/firebase';


export default function LoginScreen() {
  const navigation = useNavigation();

  const[email, setEmail]= useState('');
  const[password, setPassword]= useState('');

  const handleSubmit = async ()=>{
    if(email && password){
      try{
        await signInWithEmailAndPassword(auth, email, password)
      }catch(err){
        console.log('go error : ',err.message);

      }

    }
  }


  return (
    <View style={styles.container}>
    
    
    
    <ImageBackground source={require("../assets/images/home1.jpg")} style={styles.img} >

    

      {/* <View style={styles.containerImage}> */}
        {/* <Image source={require("../assets/images/login2.jpg")} style={styles.image}/> */}
      {/* </View> */}
      <View style={{flex:1 , marginTop:40, borderTopRightRadius: 50  , borderTopLeftRadius: 50}}>

        <View style={{margin:30 }}>
          <Text style={{marginLeft:16, color:'white',fontSize:20,marginTop:20 }}>Email Address</Text>
          <TextInput style={styles.input}
          placeholder='Enter Email'
          value={email}
          onChangeText={value=> setEmail(value)}
          />

          <Text style={{marginLeft:16, color:'white',marginTop:45 ,fontSize:20}}>Password</Text>
          <TextInput style={styles.input}
          placeholder='Enter Password'
          secureTextEntry
          value={password}
          onChangeText={value=> setPassword(value)}
          />

          <TouchableOpacity>
            <Text style={{marginLeft:20, color:'white',marginTop:10}}>Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          
        </View>
        <View style={{flexDirection: 'row',justifyContent: 'center', marginTop:30,}}>
            <Text style={{color: 'white'}}>Don't have an account? </Text>
            <TouchableOpacity onPress={()=> navigation.navigate('SignUp')}>
              <Text style={{color: '#FFB001'}}>
                 Sign Up
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
  },
  
  icon : {
    backgroundColor: 'white',
    padding:8,
    borderTopRightRadius: 30, 
    borderBottomLeftRadius: 10,
  }, 
  containerIcon: {
    flexDirection: 'row', 
    justifyContent: 'flex-start', 
    marginTop:60 , 
    marginLeft: 16,
  },
  img:{
    width:370,
    height:700,
    borderRadius:100
  },

  containerImage: {
    flexDirection:"row",
    justifyContent:'center',
  

  },
  image : {
    width:300,
    height:200,
    borderRadius:100
  },

  input :{
    
    marginTop:50,
    marginLeft:16,
    padding: 10, 
    backgroundColor: '#E5E7EB', 
    color: '#4B5563',
    borderRadius: 8,



  },
  button: {
    marginTop:30,
    marginLeft:60,
    height:40,
    width: 200,
    backgroundColor: '#E5E7EB', 
    borderRadius: 50, 
  },
  buttonText: {

    margin:8,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',

  },

  imageIcon:{
    marginTop:20,
    flexDirection:'row',
    justifyContent:'center'
  }
  
});

