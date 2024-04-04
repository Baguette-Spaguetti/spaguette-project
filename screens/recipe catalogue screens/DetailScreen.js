import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import styles from '../../styles/Styles'
import { ScrollView } from 'react-native-gesture-handler'

const DetailScreen = ({ route }) => {

    const [details, setDetails] = useState({
        id: 1,
        name: "Carbonara",
        cover: "https://www.giallozafferano.it/images/244-24489/Spaghetti-alla-Carbonara_360x300.jpg",
        recipe: `Ingredients:

- 350g spaghetti
- 150g pancetta or guanciale, diced
- 3 large eggs
- 50g Pecorino Romano cheese, grated
- 50g Parmesan cheese, grated
- Freshly ground black pepper
- Salt
- Olive oil

Instructions:

1. Bring a large pot of salted water to a boil. Cook the spaghetti according to the package instructions until al dente. Reserve 1 cup of pasta cooking water, then drain the spaghetti.

2. While the spaghetti is cooking, heat a drizzle of olive oil in a large skillet over medium heat. Add the diced pancetta or guanciale and cook until crispy and golden brown.

3. In a bowl, whisk together the eggs, Pecorino Romano cheese, and Parmesan cheese until well combined.

4. Once the pancetta or guanciale is cooked, remove the skillet from the heat and add the drained spaghetti to the skillet, tossing to combine.

5. Quickly pour the egg and cheese mixture over the hot spaghetti, tossing continuously to coat the pasta evenly. If the sauce is too thick, gradually add some of the reserved pasta cooking water until it reaches the desired consistency.

6. Season the Carbonara with freshly ground black pepper to taste.

7. Serve immediately, garnished with additional grated Parmesan cheese and black pepper if desired.`
    })

  return (
    <ScrollView>
        <Image style={{width: '100%', height: 200 }} source={{uri: details.cover}}/>
        <View style={styles.container}>
            <Text style={styles.h1}>{route.params.recName}</Text>
            <Text>{details.recipe}</Text>
        </View>
    </ScrollView>
  )
}

export default DetailScreen