import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListScreen from './screens/planning screens/ListScreen';
import HomeScreen from './screens/HomeScreen';
import RecipesScreen from './screens/recipe catalogue screens/RecipesScreen';
import DetailScreen from './screens/recipe catalogue screens/DetailScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Plan', headerShown: false }}/>

        {/* Planning Screen */}
        <Stack.Screen name="List" component={ListScreen} />

        {/* Recipes Catalogue */} 
        <Stack.Screen name="Recipes" component={RecipesScreen} options={({ route }) => ({ title: route.params.catName })}/>
        <Stack.Screen name="Details" component={DetailScreen} options={({ route }) => ({ title: route.params.recName })}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
