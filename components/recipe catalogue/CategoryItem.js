import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from '../../styles/Styles'

const CategoryItem = ({ name, cover }) => {
  return (
    <View style={styles.listContainer}>
        <Image style={styles.listBigImage} source={{uri: cover}}/>
        <Text style={styles.h2}>{name}</Text>
    </View>
  )
}

export default CategoryItem