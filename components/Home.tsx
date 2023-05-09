import { View, Text, ScrollView, TouchableOpacity, StyleSheet} from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';


export default function Home() {

   

  return (
    <ScrollView style={styles.container}>
        <TouchableOpacity style={styles.button}>
            <MaterialIcons name="group-add" size={30} color="black" />
            <Text style={styles.buttonTitle}>Criar Nova turma</Text>
        </TouchableOpacity>
      
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#DBF2FF',
        
    },
   
    button:{
        flexDirection:"row",
        justifyContent:'space-between',
        margin:20,
        padding:10, 
        alignItems:'center',
        borderColor:'black',
        borderStyle:'dashed',
        borderWidth:2,  
            

    },
    buttonTitle:{
        
        fontSize:15,
    },
    title:{
        fontSize:20,
        fontWeight:"bold",
       
    },
  });