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

const Stack = createStackNavigator();

export default function App() {
  return (
    <RealmProvider schema={[Category]}>
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