import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListScreen from './screens/planning screens/ListScreen';
import HomeScreen from './screens/HomeScreen';
import RecipeScreen from './screens/recipe catalogue screens/RecipeScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Plan', headerShown: false }}/>

        {/* Planning Screen */}
        <Stack.Screen name="List" component={ListScreen} />

        {/* Recipes Catalogue */}
        <Stack.Screen name="Recipe" component={RecipeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
