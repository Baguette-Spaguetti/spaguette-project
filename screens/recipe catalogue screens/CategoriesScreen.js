import { View, Text, Pressable } from 'react-native'
import React from 'react'
import styles from '../../styles/Styles'
import { useQuery } from '@realm/react'
import Category from '../../schemas/Category'
import { FlatList } from 'react-native-gesture-handler'
import CategoryItem from '../../components/CategoryItem'

const CategoriesScreen = ({ navigation }) => {

  const categories = useQuery(Category);

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={({ item }) => <CategoryItem id={item.id} name={item.name} cover={item.linkImage} navigation={navigation}/>}
      />
    </View>
  )
}


export default CategoriesScreen