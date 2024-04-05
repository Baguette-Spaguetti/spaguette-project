import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import styles from '../../styles/Styles'
import { ScrollView } from 'react-native-gesture-handler'

import { Entypo } from '@expo/vector-icons';

const DetailScreen = ({ route }) => {

    const { recId } = route.params

    const [recipes, setRecipes] = useState([
      {
        id: 1,
        name: "Carbonara",
        cover: "https://www.giallozafferano.it/images/244-24489/Spaghetti-alla-Carbonara_360x300.jpg",
        catId: 1,
        ingredients: [
          {
            name: 'Spaghetti',
            quality: 350,
            UdM: 'g',
          },
          {
            name: 'Guanciale',
            quality: 150,
            UdM: 'g',
          },
          {
            name: 'Large eggs',
            quality: 3,
            UdM: '',
          },
          {
            name: 'Pecorino',
            quality: 50,
            UdM: 'g',
          },
        ],
        recipe: `1. Bring a large pot of salted water to a boil. Cook the spaghetti according to the package instructions until al dente. Reserve 1 cup of pasta cooking water, then drain the spaghetti.

2. While the spaghetti is cooking, heat a drizzle of olive oil in a large skillet over medium heat. Add the diced pancetta or guanciale and cook until crispy and golden brown.

3. In a bowl, whisk together the eggs, Pecorino Romano cheese, and Parmesan cheese until well combined.

4. Once the pancetta or guanciale is cooked, remove the skillet from the heat and add the drained spaghetti to the skillet, tossing to combine.

5. Quickly pour the egg and cheese mixture over the hot spaghetti, tossing continuously to coat the pasta evenly. If the sauce is too thick, gradually add some of the reserved pasta cooking water until it reaches the desired consistency.

6. Season the Carbonara with freshly ground black pepper to taste.

7. Serve immediately, garnished with additional grated Parmesan cheese and black pepper if desired.`
    },
    {
      id: 2,
      name: "Gricia",
      cover: "https://www.giallozafferano.it/images/245-24521/Pasta-alla-gricia_360x300.jpg",
      catId: 1,
      ingredients: [
        {
          name: 'Maccheroni',
          quality: 350,
          UdM: 'g',
        },
        {
          name: 'Guanciale',
          quality: 150,
          UdM: 'g',
        },
        {
          name: 'Pecorino',
          quality: 50,
          UdM: 'g',
        },
      ],
      recipe: `Recipe of gricia`
  },
    {
      id: 3,
      name: "Risotto alla zucca",
      cover: "https://www.giallozafferano.it/images/0-44/Risotto-alla-zucca_360x300.jpg",
      catId: 1,
      ingredients: [
        {
          name: 'Risotto',
          quality: 320,
          UdM: 'g',
        },
      ],
      recipe: `Recipe of risotto alla zucca`
  },
    {
      id: 4,
      name: "Cannelloni",
      cover: "https://www.giallozafferano.it/images/239-23939/Cannelloni_360x300.jpg",
      catId: 1,
      ingredients: [
        {
          name: 'Besciamella',
          quality: 350,
          UdM: 'g',
        },
      ],
      recipe: `Recipe of cannelloni`
  },
    {
      id: 5,
      name: "Scaloppine ai funghi",
      cover: "https://www.giallozafferano.it/images/166-16686/Scaloppine-ai-funghi_360x300.jpg",
      catId: 2,
      ingredients: [
        {
          name: 'Scaloppine',
          quality: 120,
          UdM: 'g',
        },
      ],
      recipe: `Recipe of scaloppine ai funghi`
  },
    {
      id: 6,
      name: "Branzino al forno",
      cover: "https://www.giallozafferano.it/images/222-22246/Branzino-al-forno_360x300.jpg",
      catId: 3,
      ingredients: [
        {
          name: 'Branzino',
          quality: 80,
          UdM: 'g',
        },
      ],
      recipe: `Recipe of branzino al forno`
  },
    {
      id: 7,
      name: "Salmone croccante",
      cover: "https://www.giallozafferano.it/images/206-20645/Salmone-croccante_360x300.jpg",
      catId: 3,
      ingredients: [
        {
          name: 'Salmone',
          quality: 180,
          UdM: 'g',
        },
      ],
      recipe: `Recipe of salmone croccante`
  },
    {
      id: 8,
      name: "Insalata di gamberi",
      cover: "https://www.giallozafferano.it/images/190-19037/Insalata-di-gamberi_360x300.jpg",
      catId: 4,
      ingredients: [
        {
          name: 'Insalata',
          quality: 50,
          UdM: 'g',
        },
      ],
      recipe: `Recipe of Insalata di gamberi`
  },
  ])

  const recipe = recipes.filter((recipe) => recipe.id == recId)[0]

  return (
    <ScrollView>
        <Image style={{width: '100%', height: 200 }} source={{uri: recipe.cover}}/>
        <View style={styles.container}>
            <Text style={styles.h1}>{route.params.recName}</Text>
            <View style={styles.bubbleContainer}>
              <Text style={styles.h3}>Ingredients</Text>
              {recipe.ingredients.map((ingredient) => {
                return(
                  <View style={{flexDirection: 'row', marginTop: 10, alignItems: 'center'}}>
                    <Text style={{width: 50,}}>{ingredient.quality}{ingredient.UdM}</Text>
                    <Text style={{marginLeft: 10,}}>{ingredient.name}</Text>
                  </View>
                )
              })}
            </View>
            <Text style={styles.h3}>Instructions</Text>
            <Text>{recipe.recipe}</Text>
        </View>
    </ScrollView>
  )
}

const st = StyleSheet.create({
  
})

export default DetailScreen