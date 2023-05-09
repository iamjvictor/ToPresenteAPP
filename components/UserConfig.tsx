import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import backImg from './imgs/fundinho2.jpg';
import { AntDesign } from '@expo/vector-icons';
import Header from './Header';

interface LoginProps {
    onButtonClick: () => void;
    showUser: () => void;
  
  
  };

  
const UserConfig = (props: LoginProps) => {


  return (
    <View style={styles.container}>
     <ImageBackground style={styles.image}  source={backImg}/>
     
    
    
     <TouchableOpacity style={styles.button}onPress={props.onButtonClick}>
     <AntDesign name="back" size={24} color="black" />
     </TouchableOpacity>
     
    </View>
  )
}

const styles = StyleSheet.create({
    button: {
      backgroundColor: 'white',
      marginTop: 8,
      marginLeft: 8,
      borderRadius: 25,
      width:40,
      justifyContent: 'center',
      alignItems: 'center',
      position:'absolute'
    },
    image:{
      width:'100%',
      height:'100%',
      position:'absolute',     
      
    },
    container:{
        width:'100%',
        height:'100%',
    }
  })

export default UserConfig