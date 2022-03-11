import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import {Prayer} from './components';

export const DeskDetail = ({route, navigation}) => {
  const dispatch = useDispatch();
  const {notAnsweredPrayers, answeredPrayers} = useSelector(
    state => state.ColumnReducer,
  );
  const [id] = useState(route.params.id);
  const [title] = useState(route.params.title);
  const [prayerTitle, setPrayerTitle] = useState('');
  const [isShowAnsweredPrayers, setIsShowAnsweredPrayers] = useState(false);

  const onAddPrayerPressed = () => {
    const prayer = {
      title: prayerTitle,
      description: '',
      checked: false,
      columnId: id,
    };
    dispatch({type: 'ADD_PRAYER', payload: prayer});
    setPrayerTitle('');
  };

  const onCheckBoxPressed = prayer => {
    dispatch({type: 'UPDATE_PRAYER', payload: prayer});
  };

  const onDeletePressed = id => {
    dispatch({type: 'DELETE_PRAYER', payload: id});
  };

  useEffect(() => {
    dispatch({type: 'GET_PRAYERS', payload: id});
  }, [dispatch, id]);

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{title}</Text>
        <TouchableOpacity>
          <View style={styles.headerRight}>
            <Icon name="settings" color="#72a8bc" size={30} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.addPrayer}>
        <TouchableOpacity style={styles.addBtn} onPress={onAddPrayerPressed}>
          <Icon name="add" color="#72a8bc" size={30} />
        </TouchableOpacity>
        <TextInput
          value={prayerTitle}
          onChangeText={setPrayerTitle}
          placeholder="Add a prayer..."
          style={styles.addInput}
        />
      </View>
      <View>
        <FlatList
          data={notAnsweredPrayers}
          renderItem={({item}) => (
            <Prayer
              prayer={item}
              onCheckBoxPressed={onCheckBoxPressed}
              navigate={navigation.navigate}
              onDeletePressed={onDeletePressed}
            />
          )}
        />
      </View>
      <TouchableOpacity
        style={styles.SAPbtn}
        onPress={() => setIsShowAnsweredPrayers(!isShowAnsweredPrayers)}>
        <Text style={styles.SAPtext}>
          {isShowAnsweredPrayers
            ? 'HIDE ANSWERED PRAYERS'
            : 'SHOW ANSWERED PRAYERS'}
        </Text>
      </TouchableOpacity>
      {isShowAnsweredPrayers && (
        <View>
          <FlatList
            data={answeredPrayers}
            renderItem={({item}) => (
              <Prayer
                prayer={item}
                onCheckBoxPressed={onCheckBoxPressed}
                navigate={navigation.navigate}
                onDeletePressed={onDeletePressed}
              />
            )}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
    borderStyle: 'solid',
    paddingVertical: 22,
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 17,
    color: '#514D47',
    fontWeight: 'bold',
    lineHeight: 20,
  },
  headerBtn: {
    fontSize: 20,
  },
  addPrayer: {
    display: 'flex',
    flexDirection: 'row',
    padding: 15,
    margin: 16,
    borderColor: '#e5e5e5',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 10,
  },
  addBtn: {
    marginRight: 15,
  },
  addInput: {
    fontSize: 17,
  },
  SAPbtn: {
    backgroundColor: '#BFB393',
    borderRadius: 15,
    paddingHorizontal: 17,
    paddingVertical: 7,
    width: 209,
    alignSelf: 'center',
    marginVertical: 21,
  },
  SAPtext: {
    fontSize: 12,
    lineHeight: 14,
    color: '#fff',
    alignSelf: 'center',
  },
});
