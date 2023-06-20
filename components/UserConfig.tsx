import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import backImg from './imgs/fundinho2.jpg';
import { MaterialIcons } from '@expo/vector-icons';


interface LoginProps {
    onButtonClick: () => void;
    showUser: () => void; 
  
  };

  
const UserConfig = (props: LoginProps) => {

  return (
    
    <View style={styles.container}>     
      <ImageBackground style={styles.image}  source={backImg}/>   
      <View >
      <TouchableOpacity style={styles.backButton}onPress={props.onButtonClick}>
      <MaterialIcons name="arrow-back" size={20} color="black" />
      </TouchableOpacity>          
      </View>

      <View style={styles.info}>
      <Text>nome</Text>
      <Text>email</Text>
      <Text>editar senha</Text>
    </View>
  </View> 
  )
}

const styles = StyleSheet.create({
  backButton: {
    position: "absolute",
    
      
    },
    info: {
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop:100,
      borderRadius:10,
     
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