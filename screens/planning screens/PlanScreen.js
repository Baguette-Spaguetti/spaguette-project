import { View, Text, Pressable } from 'react-native'
import React from 'react'
import styles from '../../styles/Styles'

const PlanScreen = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Text>PlanScreen</Text>
      <Pressable onPress={() => navigation.navigate("List")}>
        <Text>Visualize List</Text>
      </Pressable>
    </View>
  )
}

export default PlanScreen