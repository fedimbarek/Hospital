import React, { useState } from 'react';

import { StyleSheet, TouchableOpacity, View,Image,Text,TextInput ,ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Use any icon family you prefer
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../data/firebase';
import { useNavigation } from '@react-navigation/native';

const image =  require("../assets/y.jpg");
export default function SignUpScreen() {
  const navigation = useNavigation();

  const[email, setEmail]= useState('');
  const[password, setPassword]= useState('');

  const handleSubmit = async ()=>{
    if(email && password){
      try{
        await createUserWithEmailAndPassword(auth, email, password)
      }catch(err){
        console.log('go error : ',err.message);

      }

    }
  }

  return (
    <View style={styles.container}>
      {/* <View style={styles.containerIcon}> */}
        {/* <TouchableOpacity style={styles.icon} onPress={()=>navigation.goBack()} > */}
          {/* <Icon name="arrow-left" size={20} color="black" /> */}
        {/* </TouchableOpacity> */}
      {/* </View> */}

   
   
   
      <View style={{flex:1 ,backgroundColor:'white', marginTop:1, borderTopRightRadius: 50  , borderTopLeftRadius: 50}}>
      <ImageBackground source={image} style={styles.image}>

        <View style={{margin:40 }}>

          <Text style={{marginLeft:10, color:'white', fontSize:20}}>Ful Name</Text>
          <TextInput style={styles.input}
          placeholder='Enter Name'
          />

          <Text style={{marginLeft:10, color:'white',marginTop:16 ,fontSize:20}}>Email Address</Text>
          <TextInput style={styles.input}
          placeholder='Enter Email'
          value={email}
          onChangeText={value=> setEmail(value)}
          />

          
          <Text style={{marginLeft:10, color:'white',marginTop:16,fontSize:20 }}>Password</Text>
          <TextInput style={styles.input}
          placeholder='Enter Password'
          secureTextEntry
          value={password}
          onChangeText={value=> setPassword(value)}
          />

          <TouchableOpacity >
            <Text style={{marginLeft:20, color:'white'}}>Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          
        </View>
        <View style={{flexDirection: 'row',justifyContent: 'center', marginTop:10,}}>
            <Text style={{color: '#E5E7EB',fontSize:17}}>Already have acount? </Text>
            <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
              <Text style={{color: '#E5E7EB' ,fontSize:17 }}>
                 Login
              </Text>
            </TouchableOpacity>
          </View>

        </ImageBackground>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4080bf',
  },
  
  icon : {
    backgroundColor: 'white',    padding:8,
   borderTopRightRadius: 30, 
   borderBottomLeftRadius: 10,
  }, 
  containerIcon: {
    flexDirection: 'row', 
    justifyContent: 'flex-start', 
    marginTop:20 , 
    marginLeft: 16,
  },

  containerImage: {
    flexDirection:"row",
    justifyContent:'center',
  

  },
  image : {
//  marginTop:,
    width:360,
    height:700,
  },

  input :{
    
    marginTop:50,
    marginLeft:10,
    padding: 10, 
    backgroundColor: '#E5E7EB', 
    color: '#4B5563',
    borderRadius: 8,



  },
  button: {
    marginTop:30,
    marginLeft:50,
    height:40,
    width: 200,
    backgroundColor: '#E5E7EB', 
    borderRadius: 10, 
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


