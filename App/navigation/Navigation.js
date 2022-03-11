import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {DeskDetail} from '../screens/DeskDetail';
import {Desks} from '../screens/Desks';
import {CreateDesk} from '../screens/Desks/components';
import {PrayerDetail} from '../screens/PrayerDetail';
import {SignIn} from '../screens/SignIn';
import {SignUp} from '../screens/SignUp';

export const Navigation = () => {
  const Stack = createStackNavigator();
  const dispatch = useDispatch();
  const isSignedIn = useSelector(state => state.AuthReducer.isSignedIn);

  useEffect(() => {
    console.log('bbbb');
    dispatch({type: 'IS_SIGNED_IN'});
  }, [dispatch]);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {isSignedIn ? (
          <>
            <Stack.Screen name="DESKS" component={Desks} />
            <Stack.Screen name="ADD_DESK" component={CreateDesk} />
            <Stack.Screen name="DESK_DETAIL" component={DeskDetail} />
            <Stack.Screen name="PRAYER_DETAIL" component={PrayerDetail} />
          </>
        ) : (
          <>
            <Stack.Screen name="SIGNIN" component={SignIn} />
            <Stack.Screen name="SIGNUP" component={SignUp} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
