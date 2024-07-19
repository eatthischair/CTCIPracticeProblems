import React, {useState, useEffect} from 'react';
import {Button, TextInput, View, Alert, Text, StyleSheet} from 'react-native';
import auth from '@react-native-firebase/auth';

import {useNavigation} from '@react-navigation/native';
import {FindUsernameByEmail} from '../DatabaseCalls';
import UpdateDisplayName from '../MiscFuns/UpdateDisplayName';
import {styles} from '../HomePage/AppStyles';

const Login = ({route}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const navigation = useNavigation();

  const findUsernameAsync = async () => {
    const findUsername = await FindUsernameByEmail(email).then(data => {
    });
    return findUsername;
  };
  useEffect(() => {
    if (route.params?.email) {
      setEmail(route.params.email);
      setUsername(route.params.username);
    }
  }, [route.params]);

  const handleLogin = async () => {
    try {
      await auth().signInWithEmailAndPassword(email, password);
      const username = await FindUsernameByEmail(email);
      UpdateDisplayName(username);
      Alert.alert('Sign in Success', 'You are successfully signed in!', [
        {
          text: 'OK',
          onPress: () => {
            navigation.reset({
              index: 0,
              routes: [
                {name: 'Tabs', params: {email: email, username: username}},
              ],
            });
          },
        },
      ]);
    } catch (error) {
      console.error('Login failed:', error);
      Alert.alert('Login Failed', 'The email or password is incorrect', [
        {text: 'OK'},
      ]);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.TextInput}
        placeholderTextColor="#000000"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.TextInput}
        placeholderTextColor="#000000"
      />
      <Button title="Login" onPress={handleLogin} />
      <Text style={styles.text}>Don't have an account?</Text>
      <Button
        title="Sign Up"
        onPress={() => navigation.navigate('Sign Up')}></Button>
    </View>
  );
};

const loginStyles = StyleSheet.create({
  text: {
    margin: 4,
    padding: 40,
    borderWidth: 10,
  }
})

export default Login;
