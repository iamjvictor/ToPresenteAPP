import React, { Component } from 'react'
import { Text, View, StyleSheet,StatusBar, ImageBackground } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import backImg from './imgs/fundinho2.jpg';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64 ;

interface LoginProps {
  onButtonClick: () => void;
  showUser: () => void;


};
export default function Header(props: LoginProps)  {

  
  
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.image}  source={backImg}/>
        
        <View style={styles.titleContainer}>
          <FontAwesome name="hand-peace-o" size={30} color="white" />
          <Text style={styles.title}>  TôPresente </Text>
        </View>
        
        <View style={styles.UserContent}>             
          <Feather style={styles.useIcon} name="user" size={24} color="white" onPress={props.showUser} />
          <MaterialIcons  name="logout" size={24} color="white" onPress={props.onButtonClick} />
        </View>
        
        
      </View>
    )
  
}

const styles = StyleSheet.create({
    container: {            
      paddingTop: statusBarHeight,    
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',   
      
    },
    image:{
      width:'100%',
      height:'300%',
      position:'absolute',    
    },
    UserContent:{
        flexDirection:"row",
        justifyContent:'space-between',
        marginTop:30,
        width: '90%',         
    },
    text:{
      color:'white',
      
    },
    userSpace:{
      flexDirection:"row",
      justifyContent:'space-between',
    },
    useIcon:{
        paddingRight:20,
    },
    titleContainer:{
        flexDirection:"row",
        
        fontSize:20,
        position:'absolute',
    },
    title:{
        fontSize:20,
        fontWeight:"bold",
        color:'white'
        
       
    },
  });

function render() {
  throw new Error('Function not implemented.');
}
