import { View, Text, ScrollView, TouchableOpacity, StyleSheet, FlatList, TextInput,} from 'react-native'
import React, { useEffect, useState }from 'react'
import { MaterialIcons } from '@expo/vector-icons';

import Model from '../models/objects'

interface User {
    id: number;
    name: string;
    email: string;
    faltas: number & { readonly __integer: never };
    presença: number & { readonly __integer: never };
    porcentagem: number;
    
  }


export default function Home() {  
  const [Card, setCard] = useState(false);
  const [AddTurma, setAddTurma] = useState(true)
  const [ClassName, setClassName] = useState('')
  const [ClassHours, setClassHours] = useState('')

  const addTurma = () => {
    setCard(!Card);
    setAddTurma(!AddTurma)
  };

  const sendTurma = (ClassName: string, ClassHours: number) => {
    const turma =  new Model.Turma (ClassName, ClassHours);
    turma.adicionarTurma();
    setClassName('');
    setClassHours('');
  };

 
 

  return (


    <ScrollView style={styles.container}>
      {AddTurma && (
        <View style={styles.buttonArea}>
        <TouchableOpacity style={styles.button} onPress={addTurma}>
            <MaterialIcons name="group-add" size={30} color="black" />
            <Text style={styles.buttonTitle}>Criar Nova turma</Text>
        </TouchableOpacity>
        </View>  
      )}
      
      {/* Funcionalidade do Card ao clicar em adicionar turma*/}

         {Card && (
          
        <View style={styles.card}>
          <Text style={styles.title}>Adicionar Nova Turma</Text>
          <TextInput 
          value={ClassName}
          onChangeText={setClassName}
          placeholder='Nome da Turma' 
          style={styles.input}/>
          <TextInput 
          keyboardType = 'numeric'
          value={ClassHours}
          onChangeText={setClassHours}
          placeholder='Carga Horaria' 
          style={styles.input}/>

          
          <TouchableOpacity style={styles.button} onPress={() => sendTurma (ClassName,  parseInt(ClassHours, 10))}>
            <MaterialIcons name="group-add" size={30} color="black" />
            <Text style={styles.buttonTitle}>Adicionar</Text>
        </TouchableOpacity> 

        </View>

      )}     
      
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#DBF2FF',     
    },
    buttonArea:{
      alignItems:'center',
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
        width:'75%',        
    },
    buttonTitle:{
        fontWeight:'bold',
        fontSize:15,
    },
    title:{
        fontSize:20,
        fontWeight:"bold",
        paddingBottom:30,
    },
    card: {
      alignItems:'center',
      margin:30,
      padding:5,
    },
    input:{
      backgroundColor:'grey',
      borderRadius:40,
      height:40,
      width:'75%',
      textAlign:'center',
      margin: 5,
    },
  });