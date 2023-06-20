import { View, Text, ScrollView, TouchableOpacity, StyleSheet, FlatList, TextInput,} from 'react-native'
import React, { useEffect, useState }from 'react'

export default function List(props: { arrayProp: ArrayLike<any> | null | undefined }) {
return(
<View>
      <FlatList
          style={styles.list}
          data={props.arrayProp}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
                <Text style={styles.itemText}>
                Nome: {item.nome}
                </Text>
                <Text style={styles.itemText}>
                Carga Horária: {item.cargaHoraria}
                </Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />   
</View>
)
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
      },
      list: {
        paddingVertical: 10,
        paddingHorizontal: 20,
      },
      itemContainer: {
        borderWidth: 2,
        borderColor: 'blue',
        padding: 10,
        marginBottom: 10,
      },
      itemText: {
        fontSize: 16,
        fontWeight: 'bold',
      },
})