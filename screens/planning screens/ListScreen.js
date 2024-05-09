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
        `Plats pour le ${date}`,
        `Petit-déjeuner: ${meals.breakfast}\nDéjeuner: ${meals.lunch}\nDîner: ${meals.dinner}`,
        [
          {
            text: 'Modifier',
            onPress: () => handleEditEvent(date, meals),
          },
        ]
      );
    } else {
      Alert.alert(`Pas de plats pour le ${date}`);
    }
  };

  const handleEditEvent = (date, meals) => {
    console.log(`Modifier les plats pour le ${date}:`, meals);
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
        <Text style={styles.createButtonText}>Créer événement</Text>
      </TouchableOpacity>

      <TextInput
        placeholder="Petit-déjeuner"
        value={events[selected]?.meals?.breakfast}
        onChangeText={text => setEvents(prevEvents => ({
          ...prevEvents,
          [selected]: { ...prevEvents[selected], meals: { ...prevEvents[selected]?.meals, breakfast: text } }
        }))}
        style={styles.input}
      />
      <TextInput
        placeholder="Déjeuner"
        value={events[selected]?.meals?.lunch}
        onChangeText={text => setEvents(prevEvents => ({
          ...prevEvents,
          [selected]: { ...prevEvents[selected], meals: { ...prevEvents[selected]?.meals, lunch: text } }
        }))}
        style={styles.input}
      />
      <TextInput
        placeholder="Dîner"
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
    marginBottom: 10,
    width: '80%',
  },
  createButton: {
    backgroundColor: '#F2D680',
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  createButtonText: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default ListScreen;
