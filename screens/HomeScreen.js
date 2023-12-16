import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.cont}>
      <ImageBackground source={require("../assets/images/home1.jpg")} style={styles.image}>
        <View style={styles.container}>
          <Text style={{ fontWeight: 'bold', fontSize: 20, color: "white" }}>
             Page Accuil 
          </Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Liste')}>
            <Text style={styles.logoutText} >Liste</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  cont: {
    alignItems: 'center',
  },
  container: {
    marginTop: 300,
    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutText: {
    backgroundColor: 'white',
    color: 'black',
    padding: 10,
    borderRadius: 10,
    margin: 5
    
  },
  button:{},
  image: {
    width: 500,
    height: 800,
  }
});