import { Text, Image, Pressable } from 'react-native'
import React from 'react'
import styles from '../styles/Styles'

const CategoryItem = ({ name, linkImage, navigation }) => {
  return (
    <Pressable style={styles.listContainer} onPress={() => navigation.navigate("Recipes", { catId: name })}>
        <Image style={styles.listBigImage} source={{uri: linkImage}}/>
        <Text style={styles.h2}>{name}</Text>
    </Pressable>
  )
}

export default CategoryItem