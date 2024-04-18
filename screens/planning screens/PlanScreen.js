import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { Calendar } from 'react-native-calendars'; 
import styles from '../../styles/Styles';

const PlanScreen = ({ navigation }) => {
  const [selected, setSelected] = useState(null); 
  const [events, setEvents] = useState({
    '2024-04-16': { marked: true, dotColor: 'orange' }, 
    '2024-04-20': { marked: true, dotColor: 'green' } 
  });

  return (
    <View style={styles.plan}>
      <Calendar
        onDayPress={(day) => {
          setSelected(day.dateString);
        }}
        markedDates={{
          [selected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' },
          
          ...events 
        }}
      />
      <Pressable onPress={() => navigation.navigate("List")}>
      </Pressable>
    </View>
  );
}

export default PlanScreen;
