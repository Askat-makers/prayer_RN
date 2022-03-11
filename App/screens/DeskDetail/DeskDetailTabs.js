import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {DeskDetail} from './DeskDetail';

export const DeskDetailTabs = ({route}) => {
  const Tab = createMaterialTopTabNavigator();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{route.params.title}</Text>
        <TouchableOpacity>
          <View style={styles.headerRight}>
            <Icon name="settings" color="#72a8bc" size={30} />
          </View>
        </TouchableOpacity>
      </View>
      <Tab.Navigator
        initialRouteName="Prayers"
        screenOptions={{
          tabBarActiveTintColor: '#72A8BC',
          tabBarInactiveTintColor: '#C8C8C8',
          tabBarLabelStyle: {fontSize: 12},
          tabBarStyle: {backgroundColor: 'white'},
        }}>
        <Tab.Screen
          name="Prayers"
          component={DeskDetail}
          options={{tabBarLabel: 'MY PRAYERS'}}
          initialParams={route}
        />
        <Tab.Screen
          name="Subscribed"
          component={DeskDetail}
          options={{tabBarLabel: 'SUBSCRIBED'}}
          initialParams={route}
        />
      </Tab.Navigator>
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
});
