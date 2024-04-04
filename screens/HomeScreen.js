import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PlanScreen from './planning screens/PlanScreen';
import RecipesScreen from './recipe catalogue screens/RecipesScreen';
import StoreScreen from './store managing screens/StoreScreen';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Plan" component={PlanScreen} />
        <Tab.Screen name="Recipes" component={RecipesScreen} />
        <Tab.Screen name="Store" component={StoreScreen} />
    </Tab.Navigator>
  )
}

export default HomeScreen