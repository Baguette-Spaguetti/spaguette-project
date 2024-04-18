import { View, Text } from 'react-native'
import React, { useState } from 'react'
import styles from '../../styles/Styles'
import { FlatList } from 'react-native-gesture-handler'
import RecipeItem from '../../components/RecipeItem'

const RecipesScreen = ({ route, navigation }) => {

  const { catId } = route.params

  const [recipes, setRecipes] = useState([
    {
      id: 1,
      name: "Carbonara",
      cover: "https://www.giallozafferano.it/images/244-24489/Spaghetti-alla-Carbonara_360x300.jpg",
      catId: 1,
    },
    {
      id: 2,
      name: "Gricia",
      cover: "https://www.giallozafferano.it/images/245-24521/Pasta-alla-gricia_360x300.jpg",
      catId: 1,
    },
    {
      id: 3,
      name: "Risotto alla zucca",
      cover: "https://www.giallozafferano.it/images/0-44/Risotto-alla-zucca_360x300.jpg",
      catId: 1,
    },
    {
      id: 4,
      name: "Cannelloni",
      cover: "https://www.giallozafferano.it/images/239-23939/Cannelloni_360x300.jpg",
      catId: 1,
    },
    {
      id: 5,
      name: "Scaloppine ai funghi",
      cover: "https://www.giallozafferano.it/images/166-16686/Scaloppine-ai-funghi_360x300.jpg",
      catId: 2,
    },
    {
      id: 6,
      name: "Branzino al forno",
      cover: "https://www.giallozafferano.it/images/222-22246/Branzino-al-forno_360x300.jpg",
      catId: 3,
    },
    {
      id: 7,
      name: "Salmone croccante",
      cover: "https://www.giallozafferano.it/images/206-20645/Salmone-croccante_360x300.jpg",
      catId: 3,
    },
    {
      id: 8,
      name: "Insalata di gamberi",
      cover: "https://www.giallozafferano.it/images/190-19037/Insalata-di-gamberi_360x300.jpg",
      catId: 4,
    },
  ])

  return (
    <View style={styles.container}>
      <Text>{route.path}</Text>
      <FlatList 
        data={recipes.filter((recipe) => recipe.catId == catId)}
        renderItem={({ item }) => <RecipeItem id={item.id} name={item.name} cover={item.cover} navigation={navigation}/>}
      />
    </View>
  )
}

export default RecipesScreen;