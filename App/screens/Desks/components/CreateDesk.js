import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {CustomInput} from '../../../components/CustomInput';
import {CustomButton} from '../../../components/CustomButton/CustomButton';
import {useDispatch} from 'react-redux';

export const CreateDesk = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const onAddPressed = () => {
    const newDesk = {
      title,
      description,
    };
    dispatch({
      type: 'ADD_DESK',
      payload: {newDesk, goBack: navigation.goBack},
    });
  };
  return (
    <View style={styles.root1}>
      <View style={styles.root}>
        <Text style={styles.title}>Add desk</Text>
        <CustomInput placeholder="Title" value={title} setValue={setTitle} />
        <CustomInput
          placeholder="Description"
          value={description}
          setValue={setDescription}
        />
        <CustomButton text="Add" onPress={onAddPressed} type="primary" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root1: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  root: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  logo: {
    width: '100%',
    maxWidth: 300,
    maxHeight: 200,
  },
});
