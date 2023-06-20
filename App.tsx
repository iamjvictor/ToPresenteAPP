import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, } from 'react-native';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import React, { useState, useEffect } from 'react';
import UserConfig from './components/UserConfig';











export default function App() {

  const [isLog, setLog] = useState(false)
  const [isUser, setUser] = useState(true)
  

  function changeLog() {
    setLog(!isLog);
  }

  function showUserPage(){
    setUser(!isUser)
  }

  if (!isLog){
    return <Login onButtonClick={changeLog} />
  }

  if (!isUser){
    return <UserConfig onButtonClick={showUserPage} showUser={function (): void {
      throw new Error('Function not implemented.');
    } }/>
  }

  return (
    
    < View style={styles.container}>          
      <Header onButtonClick={changeLog} showUser={showUserPage}/>
      <Home/>
      
      <StatusBar style="auto" />
    </  View>

    
  );
}

const styles = StyleSheet.create({
  container: {    
    backgroundColor: '#fff',
        
  },
});
