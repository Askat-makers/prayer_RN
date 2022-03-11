import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CustomButton} from '../../../components/CustomButton';

export const HiddenButtons = () => {
  return (
    <View>
      <CustomButton title="Edit" type="primary" />
      <CustomButton title="Del" type="primary" />
    </View>
  );
};

const styles = StyleSheet.create({});
