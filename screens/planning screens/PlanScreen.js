import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MaxThreeDaysPage = () => {
  const navigation = useNavigation();

  const getCurrentDay = () => {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const date = new Date();
    const dayIndex = date.getDay(); 
    return daysOfWeek[dayIndex];
  };

  const handleAddRecipe = (day, meal) => {
    console.log(`Add recipe for ${meal} on ${day}`);
  };

  const handlePlan = () => {
    navigation.navigate('ListScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.daysContainer}>
        {['Today', 'Tue', 'Wed'].map((day, index) => (
          <View key={index} style={styles.dayWrapper}>
            <Text style={styles.dayText}>{day}</Text>
          </View>
        ))}
      </View>
      <View style={styles.buttonsContainer}>
        {['Today', 'Mon', 'Tue'].map((day, index) => (
          <View key={index} style={styles.dayContainer}>
            <TouchableOpacity onPress={() => handleAddRecipe(day, 'Morning')} style={styles.button}>
              <Text style={styles.buttonText}>Add morning recipe</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleAddRecipe(day, 'Lunch')} style={styles.button}>
              <Text style={styles.buttonText}>Add lunch recipe</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleAddRecipe(day, 'Dinner')} style={styles.button}>
              <Text style={styles.buttonText}>Add dinner recipe</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
      <TouchableOpacity onPress={handlePlan} style={styles.planButton}>
        <Text style={styles.planButtonText}>View Plan</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
  },
  daysContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  dayWrapper: {
    flex: 1,
    backgroundColor: '#F2D680',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  dayText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  dayContainer: {
    alignItems: 'stretch',
    flex: 1,
    justifyContent: 'space-around',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: '#F2D680',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  planButton: {
    backgroundColor: '#F2D680',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
    alignSelf: 'center',
  },
  planButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default MaxThreeDaysPage;
