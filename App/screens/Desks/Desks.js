import React, {useEffect} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import {Desk} from './components';

export const Desks = ({navigation}) => {
  const dispatch = useDispatch();

  const user = useSelector(state => state.AuthReducer.user);
  const {columns} = useSelector(state => state.ColumnReducer);
  console.log(columns);

  const onAddPressed = () => {
    navigation.navigate('ADD_DESK');
  };

  const onDeletePressed = id => {
    dispatch({type: 'DELETE_DESK', payload: id});
  };

  const onTitlePressed = (id, title) => {
    navigation.navigate('DESK_DETAIL', {id, title});
  };

  useEffect(() => {
    dispatch({type: 'GET_COLUMNS', payload: user.token});
  }, [dispatch, user]);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>My Desk</Text>
          <TouchableOpacity onPress={onAddPressed}>
            <View style={styles.headerRight}>
              <Icon name="add" color="black" size={30} />
            </View>
          </TouchableOpacity>
        </View>
        <FlatList
          data={columns}
          renderItem={({item}) => (
            <Desk
              title={item.title}
              id={item.id}
              onDeletePressed={onDeletePressed}
              onTitlePressed={onTitlePressed}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
  headerRight: {},
  headerBtn: {
    fontSize: 20,
  },
});
