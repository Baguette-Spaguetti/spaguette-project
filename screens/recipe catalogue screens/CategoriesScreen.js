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
      cover: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=2706&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Meat",
      cover: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "Fish",
      cover: "https://images.unsplash.com/photo-1584300005420-38486f627b07?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      name: "Salad",
      cover: "https://plus.unsplash.com/premium_photo-1673590981774-d9f534e0c617?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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