import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PlanScreen from './PlanScreen';
import RecipesScreen from './RecipesScreen';
import StoreScreen from './StoreScreen';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Plan" component={PlanScreen} />
        <Tab.Screen name="Recipe" component={RecipesScreen} />
        <Tab.Screen name="Store" component={StoreScreen} />
    </Tab.Navigator>
  )
}

export default HomeScreen