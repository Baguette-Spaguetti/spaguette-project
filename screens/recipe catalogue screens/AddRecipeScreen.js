import React, { useState } from 'react';
import { Pressable, TextInput, View, StyleSheet, Text, Alert} from 'react-native';
import Realm from 'realm';
import Recipe from '../../schemas/Recipe.js'
import styles from '../../styles/Styles'
import { useRealm } from '@realm/react';
import IngredientPicker from './IngredientPicker.js'

const AddRecipeScreen = ( { route, navigation } ) => {
  const [name, setName] = useState('');
  const [linkImage, setLinkImage] = useState('');
  const [instructions, setInstructions] = useState('');
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const { catName } = route.params

  const realm = useRealm();

  const handleIngredientSelect = (ingredient) => {
    setSelectedIngredients(prevIngredients => [...prevIngredients, ingredient]);
  };

  const handleAddRecipe = () => {

    if (!name.trim()) {
      Alert.alert(
        'Recipe Name Missing',
        'Please enter a recipe name.',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')}
        ],
        {cancelable: false},
      );
      return;
    }

    const existingRecipe = realm.objects('Recipe').filtered(`name = "${name}"`);

    if (existingRecipe.length > 0) {
      Alert.alert(
        'Recipe Exists',
        'A recipe with this name already exists, please use a different name.',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')}
        ],
        {cancelable: false},
      );
      return;
    }

    const imageLink = linkImage.trim() !== '' ? linkImage : 'https://www.emme2servizi.it/wp-content/uploads/2020/12/no-image.jpg';

    realm.write(() => {
      realm.create(Recipe, {
        name: name,
        catId: catName,
        linkImage: imageLink,
        instructions: instructions,
        ingredientsQty: selectedIngredients.map(ingredient => {
            return {
              ingredient: ingredient.ingredient,
              qty: parseInt(ingredient.qty)
            };
          })
      });
      console.log('New recipe added');
      navigation.goBack();
    });

    setName('');
    setLinkImage('');
    setInstructions('');
    Alert.alert(
      'Success',
      'Recipe created successfully!',
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')}
      ],
      {cancelable: false},
    );
  };

  return (
    <View>
      <TextInput placeholder="Name" onChangeText={setName} value={name} style={styles.addRecipeForm}/>
      <TextInput placeholder="Image Link" onChangeText={setLinkImage} value={linkImage} style={styles.addRecipeForm}/>
      <TextInput placeholder="Instructions" onChangeText={setInstructions} value={instructions} style={styles.addRecipeForm}/>
      <IngredientPicker ingredients={realm.objects('Ingredient')} onIngredientSelect={handleIngredientSelect} />
      <View>
      {selectedIngredients.map((item, index) => (
        <View key={index} style={styles.selectedIngredient}>
          <Text style={styles.addRecipeForm}>{item.ingredient.name} - {item.qty}{item.ingredient.uom}</Text>
          <Pressable 
            style={styles.removeButtonIngredients} 
            onPress={() => {
              const newSelectedIngredients = [...selectedIngredients];
              newSelectedIngredients.splice(index, 1);
              setSelectedIngredients(newSelectedIngredients);
            }}
          >
            <Text style={styles.removeButtonText}>Remove</Text>
          </Pressable>
        </View>
      ))}
    </View>
      <Pressable style={styles.button} onPress={handleAddRecipe}>
          <Text style={styles.textAddRecipe}>Add Recipe</Text>
      </Pressable>
    </View>
  );
};


export default AddRecipeScreen;