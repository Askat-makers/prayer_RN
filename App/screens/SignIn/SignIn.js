import React, {useState} from 'react';
import {Image, StyleSheet, useWindowDimensions, View} from 'react-native';
import {useDispatch} from 'react-redux';
import Logo from '../../../assets/images/logo.jpeg';
import {CustomButton} from '../../components/CustomButton/CustomButton';
import {CustomInput} from '../../components/CustomInput';

export const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const {height} = useWindowDimensions();

  const onSignInPressed = () => {
    dispatch({type: 'SIGN_IN', payload: {email, password}});
  };
  const onSignUpPressed = () => {
    navigation.navigate('SIGNUP');
  };

  return (
    <View style={styles.root1}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, {height: height * 0.3}]}
          resizeMode="contain"
        />
        <CustomInput placeholder="Email" value={email} setValue={setEmail} />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <CustomButton text="Sign In" onPress={onSignInPressed} type="primary" />
        <CustomButton
          text="Don't have an account? Create one"
          onPress={onSignUpPressed}
          type="tertiary"
        />
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
  logo: {
    width: '100%',
    maxWidth: 300,
    maxHeight: 200,
  },
});
