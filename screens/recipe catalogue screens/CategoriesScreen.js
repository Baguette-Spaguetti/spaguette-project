import { View, TextInput, Alert, Pressable, Text, Image} from 'react-native'
import React from 'react'
import styles from '../../styles/Styles'
import { useQuery } from '@realm/react'
import Category from '../../schemas/Category'
import { FlatList } from 'react-native-gesture-handler'
import CategoryItem from '../../components/CategoryItem'
import { AntDesign } from '@expo/vector-icons';
import { useRealm } from '@realm/react'


const CategoriesScreen = ({ navigation }) => {

  const realm = useRealm();

  const categories = useQuery(Category);

  const [searchText, setSearchText] = React.useState('');
  const [isRemoveMode, setIsRemoveMode] = React.useState(false);

  const handleSearch = (text) => {
    // update categories using words from text to search in categories items which have name attribute
    setSearchText(text)
  };

  const handleAddCategory = () => {
    // Add code to handle adding a category
  };

  const handleRemoveCategories = () => {
    setIsRemoveMode(!isRemoveMode);
  };

  const handleRemoveCategory = (categoryId) => {
    Alert.alert(
      'Confirm Removal',
      'Are you sure you want to remove this category?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => {
            const toDelete = categories.filtered(`id == ${categoryId}`);
            realm.write(() => {
              realm.delete(toDelete);
            });
          },
        },
      ],
    );
    
  };

  const renderItem = ({ item }) => (
    <View>
      {isRemoveMode && (
        <Pressable style={styles.removeButton} onPress={() => handleRemoveCategory(item.id)}>
          <AntDesign name="closecircle" size={24} color="red" />
        </Pressable>
      )}
      <CategoryItem id={item.id} name={item.name} linkImage={item.linkImage} navigation={navigation} />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput
          style={styles.searchBox}
          placeholder="Search ..."
          onChangeText={handleSearch}
          value={searchText}
        />
        <Pressable style={styles.button} onPress={handleAddCategory}>
          <Text style={styles.text}>Add</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={handleRemoveCategories}>
          <Text style={styles.text}>{isRemoveMode ? 'Cancel' : 'Remove'}</Text>
        </Pressable>
      </View>
      <FlatList
        data={categories}
        renderItem={renderItem}
        style={{ marginBottom: 50 }}
      />
    </View>
  )
}


export default CategoriesScreen