import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Swipeout from 'react-native-swipeout';

export const Prayer = ({
  prayer,
  onCheckBoxPressed,
  navigate,
  onDeletePressed,
}) => {
  let swipeoutBtns = [
    {
      text: 'Delete',
      backgroundColor: '#AC5253',
      onPress: () => onDeletePressed(prayer.id),
    },
  ];

  return (
    <>
      <Swipeout right={swipeoutBtns}>
        <View style={styles.root}>
          <View style={styles.verticalLine} />
          <BouncyCheckbox
            size={25}
            iconStyle={styles.checkBox}
            onPress={() => onCheckBoxPressed(prayer)}
            isChecked={prayer.checked}
            fillColor="#000"
          />
          <Text
            onPress={() =>
              navigate('PRAYER_DETAIL', {
                id: prayer.id,
                title: prayer.title,
              })
            }
            style={[
              styles.title,
              // eslint-disable-next-line react-native/no-inline-styles
              {textDecorationLine: prayer.checked ? 'line-through' : 'none'},
            ]}>
            {prayer.title}
          </Text>
        </View>
      </Swipeout>
    </>
  );
};

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 23,
    borderBottomColor: '#e5e5e5',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    backgroundColor: 'white',
  },
  verticalLine: {
    width: 2,
    backgroundColor: '#AC5253',
    marginRight: 12,
  },
  checkBox: {
    borderStyle: 'solid',
    borderColor: '#514D47',
    borderWidth: 1,
    borderRadius: 4,
  },
  // title: {
  //   display: 'flex',
  //   flexDirection: 'row',
  //   alignItems: 'center',
  // },
});
