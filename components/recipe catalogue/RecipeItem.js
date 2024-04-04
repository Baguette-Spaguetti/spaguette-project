import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from '../../styles/Styles'

const RecipeItem = ( { name, cover } ) => {
  return (
    <View style={styles.listContainer}>
        <View style={{flexDirection: 'row'}}>
            <Image style={styles.listMidImage} source={{uri: cover}}/>
            <Text style={styles.h3}>{name}</Text>
        </View>
    </View>
  )
}

export default RecipeItem