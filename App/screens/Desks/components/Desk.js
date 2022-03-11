import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

export const Desk = ({title, onDeletePressed, id, onTitlePressed}) => {
  return (
    <View style={styles.desk}>
      <Text onPress={() => onTitlePressed(id, title)} style={styles.title}>
        {title}
      </Text>
      {/* <TouchableOpacity>
        <Text>Del</Text>
      </TouchableOpacity> */}
      <Button title="DEL" onPress={() => onDeletePressed(id)} />
    </View>
  );
};

const styles = StyleSheet.create({
  desk: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderWidth: 1,
    borderColor: '#e5e5e5',
    borderStyle: 'solid',
    borderRadius: 4,
    marginVertical: 5,
    marginHorizontal: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 17,
    color: '#514D47',
    fontWeight: 'bold',
  },
});
