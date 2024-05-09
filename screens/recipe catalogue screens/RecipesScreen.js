import { View, TextInput, Alert, Pressable, Text } from 'react-native'
import React, { useState } from 'react'
import styles from '../../styles/Styles'
import { FlatList } from 'react-native-gesture-handler'
import RecipeItem from '../../components/RecipeItem'
import Recipe from '../../schemas/Recipe'
import { useQuery } from '@realm/react'
import { AntDesign } from '@expo/vector-icons';
import { useRealm } from '@realm/react'

const RecipesScreen = ({ route, navigation }) => {

  const realm = useRealm();

  const { catId } = route.params

  const recipes = useQuery(Recipe, recipes => {
        return recipes.filtered(`catId == "${catId}"`);
    }
  );

  const [searchText, setSearchText] = React.useState('');
  const [isRemoveMode, setIsRemoveMode] = React.useState(false);

  const handleSearch = (text) => {
    setSearchText(text)
  };

  const handleAddRecipe = () => {
    navigation.navigate('Add Recipe', { catName: catId });
  };

  const handleRemoveCategories = () => {
    setIsRemoveMode(!isRemoveMode);
  };

  const handleRemoveRecipe = (recipeName) => {
    Alert.alert(
      'Confirm Removal',
      'Are you sure you want to remove this recipe?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => {
            const toDelete = realm.objectForPrimaryKey('Recipe', recipeName)
            realm.write(() => {
              realm.delete(toDelete);
            });
          },
        },
      ],
    );
    
  };

  const renderItem = ({ item }) => (
    <View>
      {isRemoveMode && (
        <Pressable style={styles.removeButton} onPress={() => handleRemoveRecipe(item.name)}>
          <AntDesign name="closecircle" size={24} color="red" />
        </Pressable>
      )}
      <RecipeItem name={item.name} cover={item.linkImage} navigation={navigation}/>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput
          style={styles.searchBox}
          placeholder="Search ..."
          onChangeText={handleSearch}
          value={searchText}
        />
        <Pressable style={styles.button} onPress={handleAddRecipe}>
          <Text style={styles.text}>Add</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={handleRemoveCategories}>
          <Text style={styles.text}>{isRemoveMode ? 'Cancel' : 'Remove'}</Text>
        </Pressable>
      </View>
      <FlatList
        data={recipes}
        renderItem={renderItem}
        style={{ marginBottom: 50 }}
      />
    </View>
  )
}

export default RecipesScreen;