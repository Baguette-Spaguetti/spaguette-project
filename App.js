import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListScreen from './screens/planning screens/ListScreen';
import HomeScreen from './screens/HomeScreen';
import RecipesScreen from './screens/recipe catalogue screens/RecipesScreen';
import DetailScreen from './screens/recipe catalogue screens/DetailScreen';
import { RealmProvider, useRealm } from '@realm/react';
import Category from './schemas/Category'
import Recipe from './schemas/Recipe'
import Ingredient from './schemas/Ingredient';
import IngredientQty from './schemas/IngredientQty';
const Stack = createStackNavigator();

export default function App() {
  return (
    <RealmProvider schema={[Category, Recipe, Ingredient, IngredientQty]}>
      <AppContent />
    </RealmProvider>
  );
}

function AppContent() {
  const realm = useRealm();

  useEffect(() => {
    initializeApp();
  }, []);

  const initializeApp = () => {
    console.log('Inizialize...');
    
    realm.write(()=>{
      realm.deleteAll();
    })

    {/* CATEGORIES */}
    realm.write(() => {
      realm.create(Category, {
        id: 1,
        name: "Pasta",
        cover: "https://www.giallozafferano.it/images/242-24236/Spaghetti-alle-vongole_360x300.jpg",
      });
      
      realm.create(Category, {
        id: 2,
        name: "Meat",
        cover: "https://www.giallozafferano.it/images/257-25714/Bistecca-alla-fiorentina_360x300.jpg",
      });
      
      realm.create(Category, {
        id: 3,
        name: "Fish",
        cover: "https://www.giallozafferano.it/images/266-26693/Pesce-spada-in-padella_360x300.jpg",
      });
      
      realm.create(Category, {
        id: 4,
        name: "Salad",
        cover: "https://www.giallozafferano.it/images/190-19037/Insalata-di-gamberi_360x300.jpg",
      });
    });

    {/* INGREDIENTS */}
    realm.write(() => {
      realm.create(Ingredient, {
        id: 1,
        name: 'Spaghetti',
        uom: 'g'
      });
      realm.create(Ingredient, {
        id: 2,
        name: 'Guanciale',
        uom: 'g'
      });
      realm.create(Ingredient, {
        id: 3,
        name: 'Large Eggs',
        uom: 'x'
      });
      realm.create(Ingredient, {
        id: 4,
        name: 'Pecorino',
        uom: 'g'
      });
      realm.create(Ingredient, {
        id: 5,
        name: 'Maccheroni',
        uom: 'g'
      });
      realm.create(Ingredient, {
        id: 6,
        name: 'Risotto',
        uom: 'g'
      });
      realm.create(Ingredient, {
        id: 7,
        name: 'Besciamella',
        uom: 'g'
      });
      realm.create(Ingredient, {
        id: 8,
        name: 'Scaloppine',
        uom: 'g'
      });
      realm.create(Ingredient, {
        id: 9,
        name: 'Branzino',
        uom: 'g'
      });
      realm.create(Ingredient, {
        id: 10,
        name: 'Salmone',
        uom: 'g'
      });
      realm.create(Ingredient, {
        id: 11,
        name: 'Insalata',
        uom: 'g'
      });
    })

    {/* RECIPES */}
    realm.write(() => {
      realm.create(Recipe, {
        id: 1,
        catId: 1,
        name: 'Carbonara',
        cover: 'https://www.giallozafferano.it/images/244-24489/Spaghetti-alla-Carbonara_360x300.jpg',
        ingredientsQty: [
          {ingredient: realm.objectForPrimaryKey('Ingredient', 1),
          qty: 350},
          {ingredient: realm.objectForPrimaryKey('Ingredient', 2),
          qty: 150},
          {ingredient: realm.objectForPrimaryKey('Ingredient', 3),
          qty: 3},
          {ingredient: realm.objectForPrimaryKey('Ingredient', 4),
          qty: 50}
        ],
        instructions: `1. Bring a large pot of salted water to a boil. Cook the spaghetti according to the package instructions until al dente. Reserve 1 cup of pasta cooking water, then drain the spaghetti.

        2. While the spaghetti is cooking, heat a drizzle of olive oil in a large skillet over medium heat. Add the diced pancetta or guanciale and cook until crispy and golden brown.
        
        3. In a bowl, whisk together the eggs, Pecorino Romano cheese, and Parmesan cheese until well combined.
        
        4. Once the pancetta or guanciale is cooked, remove the skillet from the heat and add the drained spaghetti to the skillet, tossing to combine.
        
        5. Quickly pour the egg and cheese mixture over the hot spaghetti, tossing continuously to coat the pasta evenly. If the sauce is too thick, gradually add some of the reserved pasta cooking water until it reaches the desired consistency.
        
        6. Season the Carbonara with freshly ground black pepper to taste.
        
        7. Serve immediately, garnished with additional grated Parmesan cheese and black pepper if desired.`
      });
      realm.create(Recipe, {
        id: 2,
        catId: 1,
        name: 'Gricia',
        cover: 'https://www.giallozafferano.it/images/245-24521/Pasta-alla-gricia_360x300.jpg',
        ingredientsQty: [
          {ingredient: realm.objectForPrimaryKey('Ingredient', 5),
          qty: 350},
          {ingredient: realm.objectForPrimaryKey('Ingredient', 2),
          qty: 150},
          {ingredient: realm.objectForPrimaryKey('Ingredient', 4),
          qty: 50}
        ],
        instructions: `Recipe of gricia`
      });
      realm.create(Recipe, {
        id: 3,
        catId: 1,
        name: 'Risotto alla zucca',
        cover: 'https://www.giallozafferano.it/images/0-44/Risotto-alla-zucca_360x300.jpg',
        ingredientsQty: [
          {ingredient: realm.objectForPrimaryKey('Ingredient', 6),
          qty: 320}
        ],
        instructions: `Recipe of risotto alla zucca`
      });
      realm.create(Recipe, {
        id: 4,
        catId: 1,
        name: 'Cannelloni',
        cover: 'https://www.giallozafferano.it/images/239-23939/Cannelloni_360x300.jpg',
        ingredientsQty: [
          {ingredient: realm.objectForPrimaryKey('Ingredient', 7),
          qty: 350}
        ],
        instructions: `Recipe of cannelloni`
      });
      realm.create(Recipe, {
        id: 5,
        catId: 2,
        name: 'Scaloppine ai funghi',
        cover: 'https://www.giallozafferano.it/images/166-16686/Scaloppine-ai-funghi_360x300.jpg',
        ingredientsQty: [
          {ingredient: realm.objectForPrimaryKey('Ingredient', 8),
          qty: 120}
        ],
        instructions: `Recipe of scaloppine ai funghi`
      });
      realm.create(Recipe, {
        id: 6,
        catId: 3,
        name: 'Branzino al forno',
        cover: 'https://www.giallozafferano.it/images/222-22246/Branzino-al-forno_360x300.jpg',
        ingredientsQty: [
          {ingredient: realm.objectForPrimaryKey('Ingredient', 9),
          qty: 80}
        ],
        instructions: `Recipe of branzino al forno`
      });
      realm.create(Recipe, {
        id: 7,
        catId: 3,
        name: 'Salmone croccante',
        cover: 'https://www.giallozafferano.it/images/206-20645/Salmone-croccante_360x300.jpg',
        ingredientsQty: [
          {ingredient: realm.objectForPrimaryKey('Ingredient', 10),
          qty: 180}
        ],
        instructions: `Recipe of salmone croccante`
      });
      realm.create(Recipe, {
        id: 8,
        catId: 4,
        name: 'Insalata di gamberi',
        cover: 'https://www.giallozafferano.it/images/190-19037/Insalata-di-gamberi_360x300.jpg',
        ingredientsQty: [
          {ingredient: realm.objectForPrimaryKey('Ingredient', 11),
          qty: 50}
        ],
        instructions: `Recipe of Insalata di gamberi`
      });
    })
};

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Plan', headerShown: false }}/>

        {/* Planning Screen */}
        <Stack.Screen name="List" component={ListScreen} />

        {/* Recipes Catalogue */}
        <Stack.Screen name="Recipes" component={RecipesScreen} options={({ route }) => ({ title: route.params.catName, headerBackTitle: 'Categories',  })}/>
        <Stack.Screen name="Details" component={DetailScreen} options={({ route }) => ({ title: route.params.recName })}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}