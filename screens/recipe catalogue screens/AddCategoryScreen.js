import React, { useState } from 'react';
import { Pressable, TextInput, View, StyleSheet, Text, Alert} from 'react-native';
import Realm from 'realm';
import Category from '../../schemas/Category.js'
import styles from '../../styles/Styles'
import { useRealm } from '@realm/react';

const AddCategoryScreen = () => {
  const [name, setName] = useState('');
  const [linkImage, setLinkImage] = useState('');
  const [description, setDescription] = useState('');

  const realm = useRealm();

  const handleAddCategory = () => {

    if (!name.trim()) {
      Alert.alert(
        'Category Name Missing',
        'Please enter a category name.',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')}
        ],
        {cancelable: false},
      );
      return;
    }

    const existingCategory = realm.objects('Category').filtered(`name = "${name}"`);

    if (existingCategory.length > 0) {
      Alert.alert(
        'Category Exists',
        'A category with this name already exists, please use a different name.',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')}
        ],
        {cancelable: false},
      );
      return;
    }

    const imageLink = linkImage.trim() !== '' ? linkImage : 'https://www.emme2servizi.it/wp-content/uploads/2020/12/no-image.jpg';

    realm.write(() => {
      realm.create(Category, {
        name: name,
        linkImage: imageLink,
        description: description,
      });
      console.log('New category added');
    });

    setName('');
    setLinkImage('');
    setDescription('');
    Alert.alert(
      'Success',
      'Category created successfully!',
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')}
      ],
      {cancelable: false},
    );
  };

  return (
    <View>
      <TextInput placeholder="Name" onChangeText={setName} value={name} style={styles.addCategoryForm}/>
      <TextInput placeholder="Image Link" onChangeText={setLinkImage} value={linkImage} style={styles.addCategoryForm}/>
      <TextInput placeholder="Description" onChangeText={setDescription} value={description} style={styles.addCategoryForm}/>
      <Pressable style={styles.button} onPress={handleAddCategory}>
          <Text style={styles.textAddCategory}>Add Category</Text>
        </Pressable>
    </View>
  );
};


export default AddCategoryScreen;