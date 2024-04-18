import { Text, Image, Pressable } from 'react-native'
import React from 'react'
import styles from '../styles/Styles'

const CategoryItem = ({ id, name, cover, navigation }) => {
  return (
    <Pressable style={styles.listContainer} onPress={() => navigation.navigate("Recipes", { catName: name, catId: id })}>
        <Image style={styles.listBigImage} source={{uri: cover}}/>
        <Text style={styles.h2}>{name}</Text>
    </Pressable>
  )
}

export default CategoryItem