import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import styles from '../styles/Styles'

const RecipeItem = ( { id, name, cover, navigation } ) => {
  return (
    <Pressable style={styles.listContainer} onPress={() => navigation.navigate("Details", { recName: name , recId: id })}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image style={styles.listMidImage} source={{uri: cover}}/>
            <Text style={styles.h3}>{name}</Text>
        </View>
    </Pressable>
  )
}

export default RecipeItem;