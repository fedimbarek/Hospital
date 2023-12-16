import { useNavigation } from '@react-navigation/native';

import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button,Image,ImageBackground ,TextInput, TouchableOpacity } from 'react-native';
import { collection, addDoc, onSnapshot, doc, updateDoc, deleteDoc } from 'firebase/firestore';

import Ionicons from '@expo/vector-icons/Ionicons';
import { FIREBASE_DB } from '../data/firebase';

 const image =  require("../assets/y.jpg");

export default function ListeScreen() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');
  const navigation = useNavigation();
  useEffect(() => {
    const todoRef = collection(FIREBASE_DB, 'todos');
    const subscriber = onSnapshot(todoRef, {
      next: (snapshot) => {
        const todos = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        setTodos(todos);
      }
    });
    return () => subscriber();
  }, []);

  const addTodo = async () => {
    try {
      await addDoc(collection(FIREBASE_DB, 'todos'), {
        title: todo,
        done: false
      });
      setTodo('');
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  const toggleDone = async (todoId) => {
    const todoRef = doc(FIREBASE_DB, 'todos', todoId);
    try {
      await updateDoc(todoRef, { done: true });
    } catch (error) {
      console.error('Error updating document: ', error);
    }
  };

  const deleteItem = async (todoId) => {
    const todoRef = doc(FIREBASE_DB, 'todos', todoId);
    try {
      await deleteDoc(todoRef);
    } catch (error) {
      console.error('Error deleting document: ', error);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image}>
      </Image>
      <View style={styles.form}>
        
        <TextInput
          style={styles.input}
          placeholder='create Liste'
          onChangeText={(e) => setTodo(e)}
          value={todo}
        />
         <TouchableOpacity onPress={() => addTodo()} style={styles.button}>
   <Text style={{color: '#4B5563',borderRadius:100,backgroundColor: '#E5E7EB',margin:8,
textAlign: 'center',
fontWeight: 'bold',
color: 'black', }}>
      add List
   </Text>
 </TouchableOpacity>
        {/* <Button style={{borderRadius: 100}}   onPress={() => addTodo()} title='Add LIST' color='#4080bf' disabled={todo === ''} /> */}
          </View>
      <View>
        {todos.map((todo) => (
          <View key={todo.id} style={styles.todoItem}>
            <Text style={{color: '#4B5563',margin:8,
textAlign: 'center',
fontWeight: 'bold',
}}>{todo.title}</Text>
            {!todo.done && (
              <TouchableOpacity onPress={() => toggleDone(todo.id)}>
                <Ionicons name='md-checkmark-circle' size={30} color='green' />
              </TouchableOpacity>
            )}
            <Ionicons
              name='trash-bin-outline'
              size={24}
              color='red'
              onPress={() => deleteItem(todo.id)}
            />
          </View>
        ))}
      </View>
      <View>
      <TouchableOpacity style={styles.x} onPress={() => navigation.navigate('Accuil')}>
  <Text style={{margin:8,
textAlign: 'center',
fontWeight: 'bold',
color: 'black',}}>BACK ACCUIL</Text>
</TouchableOpacity>
      {/* <Button style={styles.btn} onPress={() => navigation.navigate('Accuil')} title='BACK ACCUIL' /> */}
      </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#7D8C8B',
    flex: 1,
  },
  form: {
   justifyContent:"center",
    marginTop:10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  button: {
    height:40,
    width:70,
    backgroundColor: '#E5E7EB', 
    borderRadius: 10, 
  },
  x: {
    marginTop:30,
    marginLeft:90,
    height:40,
    width: 200,
    backgroundColor: '#E5E7EB', 
    borderRadius: 10, 
  },
  input: {
   
    marginTop:1,
    marginRight:10,
    width:250,
    padding: 10, 
    backgroundColor: '#E5E7EB', 
    color: '#4B5563',
    borderRadius: 100,
  },
  btn:{
    backgroundColor:"red",
    width:1,
    height:5,
    marginTop:500,
    borderRadius:100,
  },
  image:{
height:200,
width:370,
marginLeft:0,
borderBottomLeftRadius:25,
borderBottomRightRadius:40

  },
  placeholder:{
    color:"red",
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 12,
    backgroundColor: '#E5E7EB',
    marginLeft:10,
    height:70,
    borderRadius:20,
  }
});