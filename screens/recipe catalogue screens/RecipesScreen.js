import { View, Text, Pressable } from 'react-native'
import React from 'react'
import styles from '../../styles/Styles'

const RecipesScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>RecipesScreen</Text>
      <Pressable onPress={() => navigation.navigate("Recipe")}>
        <Text>Go to recipe</Text>
      </Pressable>
    </View>
  )
}

export default RecipesScreen