import React, { Component } from 'react'
import { Text, View, StyleSheet,StatusBar } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64 ;

export default function Header()  {
  
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
        <FontAwesome name="hand-peace-o" size={30} color="black" />
        <Text style={styles.title}>  TôPresente </Text>
        </View>
        <View style={styles.UserContent}>
             <Text>User.name</Text>
             <Feather name="user" size={24} color="black" />
        </View>
        
      </View>
    )
  
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#83D2FF',
      paddingTop: statusBarHeight,           
    },
    UserContent:{
        flexDirection:"row",
        justifyContent:'space-between',
        paddingTop:5,
        paddingLeft:15,
        width: '75%',
    },
    titleContainer:{
        flexDirection:"row",
        padding: 5,
        fontSize:20,
    },
    title:{
        fontSize:20,
        fontWeight:"bold",
       
    },
  });