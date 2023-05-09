import { View, Text, TouchableOpacity, StyleSheet, ImageBackground} from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';


import backImg from './imgs/fundinho2.jpg';

interface LoginProps {
  onButtonClick: () => void;


}

export default function Login(props: LoginProps) {

 
  return (
    
    <View style={styles.container}>

      <ImageBackground style={styles.image}  source={backImg}/>
      
     
        <View style={styles.titleContainer} >
            <FontAwesome name="hand-peace-o" size={50} color="white" />
              <Text style={styles.title}>  TôPresente </Text>
            
        </View>
      <View>
        <TouchableOpacity style={styles.button} onPress={props.onButtonClick}>
              <Text style={styles.buttonText}>ENTRAR</Text>
        </TouchableOpacity>
      </View>
      
      
          
      

    </View>
   
  )
}


const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 25,
    width:130,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image:{
    width:'100%',
    height:'100%',
    position:'absolute',     
    
  },
  buttonText:{
    fontWeight:'bold',
    fontSize:20,
    
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  titleContainer:{
    flexDirection:"row",    
    fontSize:50,
    marginBottom:40,
    
  },
  title:{
      fontSize:40,
      fontWeight:"bold",
      color:'white',
      
      
      
    
  },
})