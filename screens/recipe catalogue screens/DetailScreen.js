import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import styles from '../../styles/Styles'
import { ScrollView } from 'react-native-gesture-handler'
import { Entypo } from '@expo/vector-icons';
import { useRealm } from '@realm/react'

const DetailScreen = ({ route }) => {

  const { recId } = route.params
  const realm = useRealm()

  const recipe = realm.objects('Recipe').filtered('id == $0', recId)[0];

  return(
    <ScrollView>
        <Image style={{width: '100%', height: 200 }} source={{uri: recipe.linkImage}}/>
        <View style={styles.container}>
            <Text style={styles.h1}>{route.params.recName}</Text>
            <View style={styles.bubbleContainer}>
              <Text style={styles.h3}>Ingredients</Text>
              {recipe.ingredientsQty.map((ingqty) => {
                const ingredient = ingqty.ingredient;
                return(
                  <View key={ingredient.name} style={{flexDirection: 'row', marginTop: 10, alignItems: 'center'}}>
                    <Text style={{width: 50,}}>{ingqty.qty}{ingredient.uom}</Text>
                    <Text style={{marginLeft: 10,}}>{ingredient.name}</Text>
                  </View>
                )
              })}
            </View>
            <Text style={styles.h3}>Instructions</Text>
            <Text>{recipe.instructions}</Text>
        </View>
    </ScrollView>
  )
}

export default DetailScreen;