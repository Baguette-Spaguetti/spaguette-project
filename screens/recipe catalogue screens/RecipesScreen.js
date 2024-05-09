import { View, Text } from 'react-native'
import React, { useState } from 'react'
import styles from '../../styles/Styles'
import { FlatList } from 'react-native-gesture-handler'
import RecipeItem from '../../components/RecipeItem'
import Recipe from '../../schemas/Recipe'
import { useQuery } from '@realm/react'

const RecipesScreen = ({ route, navigation }) => {

  const { catId } = route.params

  const recipes = useQuery(Recipe, recipes => {
        return recipes.filtered(`catId == "${catId}"`);
    }
  );

  return (
    <View style={styles.container}>
      <Text>{route.path}</Text>
      <FlatList 
        data={recipes}
        renderItem={({ item }) => <RecipeItem name={item.name} cover={item.linkImage} navigation={navigation}/>}
      />
    </View>
  )
}

export default RecipesScreen;