import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import styles from '../../styles/Styles'
import { FlatList } from 'react-native-gesture-handler'
import CategoryItem from '../../components/recipe catalogue/CategoryItem'

const RecipesScreen = ({ navigation }) => {

  const [categories, setCategories] = useState([
    {
      id: 1,
      name: "Pasta",
      cover: "https://www.giallozafferano.it/images/242-24236/Spaghetti-alle-vongole_360x300.jpg",
    },
    {
      id: 2,
      name: "Meat",
      cover: "https://www.giallozafferano.it/images/257-25714/Bistecca-alla-fiorentina_360x300.jpg",
    },
    {
      id: 3,
      name: "Fish",
      cover: "https://www.giallozafferano.it/images/266-26693/Pesce-spada-in-padella_360x300.jpg",
    },
    {
      id: 4,
      name: "Salad",
      cover: "https://www.giallozafferano.it/images/190-19037/Insalata-di-gamberi_360x300.jpg",
    }
  ])

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={({ item }) => <CategoryItem name={item.name} cover={item.cover} navigation={navigation}/>}
      />
    </View>
  )
}

export default RecipesScreen