import * as ImagePicker from 'expo-image-picker';
import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet } from 'react-native';

import ImageRotator from './ImageRotator';

export default function App() {
  const [image, setImage] = useState();

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Button title="Pick an Image" onPress={pickImage} />
      <ImageRotator imageUri={image} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
});
