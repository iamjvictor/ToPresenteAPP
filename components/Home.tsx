import { View, Text, ScrollView, TouchableOpacity, StyleSheet, FlatList, TextInput} from 'react-native'
import React, { useEffect, useState }from 'react'
import { MaterialIcons } from '@expo/vector-icons';



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

  const addTurma = () => {
    setCard(!Card);
    setAddTurma(!AddTurma)
  };

  const inputChange = (text: string) => {
    setClassName(text)
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

         {Card && (
          
        <View style={styles.card}>
          <Text style={styles.title}>Adicionar Nova Turma</Text>
          <TextInput 
          value={ClassName}
          onChangeText={inputChange}
          placeholder='Nome da Turma' 
          style={styles.input}/>

          
          <TouchableOpacity style={styles.button} onPress={addTurma}>
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
    },
  });