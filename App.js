import React, { useEffect } from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ListScreen from "./screens/planning screens/ListScreen";
import HomeScreen from "./screens/HomeScreen";
import RecipesScreen from "./screens/recipe catalogue screens/RecipesScreen";
import DetailScreen from "./screens/recipe catalogue screens/DetailScreen";
import AddCategoryScreen from "./screens/recipe catalogue screens/AddCategoryScreen";
import { RealmProvider, useRealm } from "@realm/react";
import Category from "./schemas/Category";
import Recipe from "./schemas/Recipe";
import Settings from './schemas/Settings'
import Ingredient from "./schemas/Ingredient";
import IngredientQty from "./schemas/IngredientQty";
const Stack = createStackNavigator();

export default function App() {
  return (
    <RealmProvider schema={[Category, Recipe, Ingredient, IngredientQty, Settings]}>
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
    let settings = realm.objects("Settings");

    if (settings.length === 0 || settings[0].firstLaunch) {
      console.log("Adding default data...");

      realm.write(() => {
        if (settings.length === 0) {
          realm.create('Settings', {firstLaunch: false});
        } else {
          settings[0].firstLaunch = false;
        }
      });

      {
        /* CATEGORIES */
      }
      realm.write(() => {
        realm.create(Category, {
          name: "Pasta",
          linkImage:
            "https://www.giallozafferano.it/images/242-24236/Spaghetti-alle-vongole_360x300.jpg",
        });

        realm.create(Category, {
          name: "Meat",
          linkImage:
            "https://www.giallozafferano.it/images/257-25714/Bistecca-alla-fiorentina_360x300.jpg",
        });

        realm.create(Category, {
          name: "Fish",
          linkImage:
            "https://www.giallozafferano.it/images/266-26693/Pesce-spada-in-padella_360x300.jpg",
        });

        realm.create(Category, {
          name: "Salad",
          linkImage:
            "https://www.giallozafferano.it/images/190-19037/Insalata-di-gamberi_360x300.jpg",
        });
      });

      {
        /* INGREDIENTS */
      }
      realm.write(() => {
        realm.create(Ingredient, {
          name: "Spaghetti",
          uom: "g",
        });
        realm.create(Ingredient, {
          name: "Guanciale",
          uom: "g",
        });
        realm.create(Ingredient, {
          name: "Large Eggs",
          uom: "x",
        });
        realm.create(Ingredient, {
          name: "Pecorino",
          uom: "g",
        });
        realm.create(Ingredient, {
          name: "Maccheroni",
          uom: "g",
        });
        realm.create(Ingredient, {
          name: "Risotto",
          uom: "g",
        });
        realm.create(Ingredient, {
          name: "Besciamella",
          uom: "g",
        });
        realm.create(Ingredient, {
          name: "Scaloppine",
          uom: "g",
        });
        realm.create(Ingredient, {
          name: "Branzino",
          uom: "g",
        });
        realm.create(Ingredient, {
          name: "Salmone",
          uom: "g",
        });
        realm.create(Ingredient, {
          name: "Insalata",
          uom: "g",
        });
      });

      {
        /* RECIPES */
      }
      realm.write(() => {
        realm.create(Recipe, {
          name: "Carbonara",
          catId: "Pasta",
          linkImage:
            "https://www.giallozafferano.it/images/244-24489/Spaghetti-alla-Carbonara_360x300.jpg",
          ingredientsQty: [
            {
              ingredient: realm.objectForPrimaryKey("Ingredient", "Spaghetti"),
              qty: 350,
            },
            {
              ingredient: realm.objectForPrimaryKey("Ingredient", "Guanciale"),
              qty: 150,
            },
            {
              ingredient: realm.objectForPrimaryKey("Ingredient", "Large Eggs"),
              qty: 3,
            },
            {
              ingredient: realm.objectForPrimaryKey("Ingredient", "Pecorino"),
              qty: 50,
            },
          ],
          instructions: `1. Bring a large pot of salted water to a boil. Cook the spaghetti according to the package instructions until al dente. Reserve 1 cup of pasta cooking water, then drain the spaghetti.

        2. While the spaghetti is cooking, heat a drizzle of olive oil in a large skillet over medium heat. Add the diced pancetta or guanciale and cook until crispy and golden brown.
        
        3. In a bowl, whisk together the eggs, Pecorino Romano cheese, and Parmesan cheese until well combined.
        
        4. Once the pancetta or guanciale is cooked, remove the skillet from the heat and add the drained spaghetti to the skillet, tossing to combine.
        
        5. Quickly pour the egg and cheese mixture over the hot spaghetti, tossing continuously to coat the pasta evenly. If the sauce is too thick, gradually add some of the reserved pasta cooking water until it reaches the desired consistency.
        
        6. Season the Carbonara with freshly ground black pepper to taste.
        
        7. Serve immediately, garnished with additional grated Parmesan cheese and black pepper if desired.`,
        });
        realm.create(Recipe, {
          name: "Gricia",
          catId: "Pasta",
          linkImage:
            "https://www.giallozafferano.it/images/245-24521/Pasta-alla-gricia_360x300.jpg",
          ingredientsQty: [
            {
              ingredient: realm.objectForPrimaryKey("Ingredient", "Maccheroni"),
              qty: 350,
            },
            {
              ingredient: realm.objectForPrimaryKey("Ingredient", "Guanciale"),
              qty: 150,
            },
            {
              ingredient: realm.objectForPrimaryKey("Ingredient", "Pecorino"),
              qty: 50,
            },
          ],
          instructions: `Recipe of gricia`,
        });
        realm.create(Recipe, {
          name: "Risotto alla zucca",
          catId: "Pasta",
          linkImage:
            "https://www.giallozafferano.it/images/0-44/Risotto-alla-zucca_360x300.jpg",
          ingredientsQty: [
            {
              ingredient: realm.objectForPrimaryKey("Ingredient", "Risotto"),
              qty: 320,
            },
          ],
          instructions: `Recipe of risotto alla zucca`,
        });
        realm.create(Recipe, {
          name: "Cannelloni",
          catId: "Pasta",
          linkImage:
            "https://www.giallozafferano.it/images/239-23939/Cannelloni_360x300.jpg",
          ingredientsQty: [
            {
              ingredient: realm.objectForPrimaryKey(
                "Ingredient",
                "Besciamella"
              ),
              qty: 350,
            },
          ],
          instructions: `Recipe of cannelloni`,
        });
        realm.create(Recipe, {
          name: "Scaloppine ai funghi",
          catId: "Meat",
          linkImage:
            "https://www.giallozafferano.it/images/166-16686/Scaloppine-ai-funghi_360x300.jpg",
          ingredientsQty: [
            {
              ingredient: realm.objectForPrimaryKey("Ingredient", "Scaloppine"),
              qty: 120,
            },
          ],
          instructions: `Recipe of scaloppine ai funghi`,
        });
        realm.create(Recipe, {
          name: "Branzino al forno",
          catId: "Fish",
          linkImage:
            "https://www.giallozafferano.it/images/222-22246/Branzino-al-forno_360x300.jpg",
          ingredientsQty: [
            {
              ingredient: realm.objectForPrimaryKey("Ingredient", "Branzino"),
              qty: 80,
            },
          ],
          instructions: `Recipe of branzino al forno`,
        });
        realm.create(Recipe, {
          name: "Salmone croccante",
          catId: "Fish",
          linkImage:
            "https://www.giallozafferano.it/images/206-20645/Salmone-croccante_360x300.jpg",
          ingredientsQty: [
            {
              ingredient: realm.objectForPrimaryKey("Ingredient", "Salmone"),
              qty: 180,
            },
          ],
          instructions: `Recipe of salmone croccante`,
        });
        realm.create(Recipe, {
          name: "Insalata di gamberi",
          catId: "Salad",
          linkImage:
            "https://www.giallozafferano.it/images/190-19037/Insalata-di-gamberi_360x300.jpg",
          ingredientsQty: [
            {
              ingredient: realm.objectForPrimaryKey("Ingredient", "Insalata"),
              qty: 50,
            },
          ],
          instructions: `Recipe of Insalata di gamberi`,
        });
      });
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Plan", headerShown: false }}
        />

        {/* Planning Screen */}
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen name="Add Category" component={AddCategoryScreen} />

        {/* Recipes Catalogue */}
        <Stack.Screen
          name="Recipes"
          component={RecipesScreen}
          options={({ route }) => ({
            title: route.params.catName,
            headerBackTitle: "Categories",
          })}
        />
        <Stack.Screen
          name="Details"
          component={DetailScreen}
          options={({ route }) => ({ title: route.params.recName })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
