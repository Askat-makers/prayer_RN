import {Pressable, StyleSheet, Text} from 'react-native';
import React from 'react';

export const CustomButton = ({onPress, text, type}) => {
  return (
    <Pressable
      style={[styles.container, styles[`container_${type}`]]}
      onPress={onPress}>
      <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 15,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 5,
  },
  container_primary: {
    backgroundColor: '#3b71f3',
  },
  container_tertiary: {
    backgroundColor: 'transparent',
  },
  text: {
    fontWeight: 'bold',
  },
  text_primary: {
    color: 'white',
  },
  text_tertiary: {
    color: 'black',
  },
});
