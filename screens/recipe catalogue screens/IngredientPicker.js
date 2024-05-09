import React, { useState } from 'react';
import { View, Text, TextInput, Button, Pressable, Alert } from 'react-native';
import styles from '../../styles/Styles'

const IngredientPicker = ({ ingredients, onIngredientSelect }) => {
  const [selectedIngredient, setSelectedIngredient] = useState(null);
  const [quantity, setQuantity] = useState('');
  const [searchText, setSearchText] = useState('');
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const handleSelect = () => {
    if (selectedIngredient && quantity) {
      const newIngredient = { ingredient: selectedIngredient, qty: quantity };
      setSelectedIngredients(prevIngredients => [...prevIngredients, newIngredient]);
      onIngredientSelect(newIngredient);
      setSelectedIngredient(null);
      setQuantity('');
    }
  };

  const filteredIngredients = ingredients.filter(ingredient =>
    ingredient.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View>
      <TextInput
        value={searchText}
        onChangeText={setSearchText}
        placeholder="Search ingredients"
        style={styles.addRecipeForm}
      />
      {searchText && filteredIngredients.map((ingredient) => (
        <Pressable 
            key={ingredient.name} 
            style={[styles.button, selectedIngredient && selectedIngredient.name === ingredient.name && styles.selectedButton]} 
            onPress={() => selectedIngredient && selectedIngredient.name === ingredient.name ? setSelectedIngredient(null) : setSelectedIngredient(ingredient)}>
          <Text style={styles.textAddRecipe}>{ingredient.name}</Text>
        </Pressable>
      ))}
      <TextInput
        value={quantity}
        onChangeText={setQuantity}
        placeholder="Enter quantity"
        keyboardType="numeric"
        style={styles.addRecipeForm}
      />
      <Pressable style={styles.button} onPress={() => {
        if (!selectedIngredient) {
        Alert.alert(
            "Missing Information",
            "Please select an ingredient before pressing 'Select Ingredient'.",
            [{ text: "OK" }]
        );
        } else if (!quantity) {
        Alert.alert(
            "Missing Information",
            "Please enter a quantity before pressing 'Select Ingredient'.",
            [{ text: "OK" }]
        );
        } else if (isNaN(quantity)) {
        Alert.alert(
            "Invalid Information",
            "Quantity must be a valid number.",
            [{ text: "OK" }]
        );
        } else {
        handleSelect();
        }
      }}>
          <Text style={styles.textAddRecipe}>Select Ingredient</Text>
      </Pressable>
    </View>
  );
};

export default IngredientPicker;