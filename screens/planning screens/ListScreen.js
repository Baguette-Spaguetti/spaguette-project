import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert, StyleSheet } from 'react-native'; 
import { Calendar } from 'react-native-calendars';

const ListScreen = ({ navigation }) => {
  const [selected, setSelected] = useState(null);
  const [events, setEvents] = useState({
    '2024-04-16': { marked: true, dotColor: 'orange', meals: { breakfast: '', lunch: '', dinner: '' } },
    '2024-04-20': { marked: true, dotColor: 'green', meals: { breakfast: '', lunch: '', dinner: '' } }
  });

  const addEvent = () => {
    if (selected) {
      setEvents(prevEvents => ({
        ...prevEvents,
        [selected]: { marked: true, dotColor: 'blue', meals: { breakfast: '', lunch: '', dinner: '' } }
      }));
    }
  };

  const showMeals = (date) => {
    const meals = events[date]?.meals;
    if (meals) {
      Alert.alert(
        `Meals for ${date}`,
        `Breakfast: ${meals.breakfast}\nLunch: ${meals.lunch}\nDinner: ${meals.dinner}`,
        [
          {
            text: 'Edit',
            onPress: () => handleEditEvent(date, meals),
          },
        ]
      );
    } else {
      Alert.alert(`No meals for ${date}`);
    }
  };

  const handleEditEvent = (date, meals) => {
    console.log(`Edit meals for ${date}:`, meals);
  };

  return (
    <View style={styles.plan}>
      <Calendar
        onDayPress={(day) => {
          setSelected(day.dateString);
          showMeals(day.dateString);
        }}
        markedDates={{
          [selected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' },
          ...events
        }}
      />

      <TouchableOpacity style={styles.createButton} onPress={addEvent}>
        <Text style={styles.createButtonText}>Create</Text>
      </TouchableOpacity>

      <TextInput
        placeholder="Breakfast"
        value={events[selected]?.meals?.breakfast}
        onChangeText={text => setEvents(prevEvents => ({
          ...prevEvents,
          [selected]: { ...prevEvents[selected], meals: { ...prevEvents[selected]?.meals, breakfast: text } }
        }))}
        style={styles.input}
      />
      <TextInput
        placeholder="Lunch"
        value={events[selected]?.meals?.lunch}
        onChangeText={text => setEvents(prevEvents => ({
          ...prevEvents,
          [selected]: { ...prevEvents[selected], meals: { ...prevEvents[selected]?.meals, lunch: text } }
        }))}
        style={styles.input}
      />
      <TextInput
        placeholder="Dinner"
        value={events[selected]?.meals?.dinner}
        onChangeText={text => setEvents(prevEvents => ({
          ...prevEvents,
          [selected]: { ...prevEvents[selected], meals: { ...prevEvents[selected]?.meals, dinner: text } }
        }))}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    margin: 20,
    fontSize: 18,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  createButton: {
    backgroundColor: 'orange',
    paddingVertical: 10,
    borderRadius: 5,
    margin: 20,
  },
  createButtonText: {
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18
  },
});

export default ListScreen;
