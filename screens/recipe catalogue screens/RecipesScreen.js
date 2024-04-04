import { View, Text } from 'react-native'
import React, { useState } from 'react'
import styles from '../../styles/Styles'
import { FlatList } from 'react-native-gesture-handler'
import RecipeItem from '../../components/recipe catalogue/RecipeItem'

const RecipeScreen = () => {

  const [recipes, setRecipes] = useState([
    {
      id: 1,
      name: "Carbonara",
      cover: "https://www.giallozafferano.it/images/244-24489/Spaghetti-alla-Carbonara_360x300.jpg",
    },
    {
      id: 2,
      name: "Gricia",
      cover: "https://www.giallozafferano.it/images/245-24521/Pasta-alla-gricia_360x300.jpg",
    },
    {
      id: 3,
      name: "Risotto alla zucca",
      cover: "https://www.giallozafferano.it/images/0-44/Risotto-alla-zucca_360x300.jpg",
    },
    {
      id: 4,
      name: "Cannelloni",
      cover: "https://www.giallozafferano.it/images/239-23939/Cannelloni_360x300.jpg",
    }
  ])

  return (
    <View style={styles.container}>
      <FlatList 
        data={recipes}
        renderItem={({ item }) => <RecipeItem name={item.name}/>}
      />
    </View>
  )
}

export default RecipeScreen