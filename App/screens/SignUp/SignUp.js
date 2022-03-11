import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {CustomButton} from '../../components/CustomButton/CustomButton';
import {CustomInput} from '../../components/CustomInput';

export const SignUp = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const onRegisterPressed = () => {
    dispatch({
      type: 'SIGN_UP',
      payload: {
        user: {email, password, name: username},
        navigate: navigation.navigate,
      },
    });
  };
  const onSignInPressed = () => {
    navigation.navigate('SIGNIN');
  };

  return (
    <View style={styles.root1}>
      <View style={styles.root}>
        <Text style={styles.title}>Create an account</Text>
        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <CustomInput placeholder="Email" value={email} setValue={setEmail} />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <CustomButton
          text="Register"
          onPress={onRegisterPressed}
          type="primary"
        />
        <Text style={styles.text}>
          By registering, you conifrm that you accept our{' '}
          <Text style={styles.link}>Terms of Use </Text>and{' '}
          <Text style={styles.link}>Privacy Policy</Text>
        </Text>
        <CustomButton
          text="Have an account? Sign In"
          onPress={onSignInPressed}
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051c60',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#fdb075',
  },
});
