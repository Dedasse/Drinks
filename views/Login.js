import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from '../context/AuthContext';
import {checkToken} from '../hooks/APIHooks';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import {Icon, Title, Container, Content, Text, Button, View, Thumbnail} from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import {useLoadMedia} from "../hooks/APIHooks";
import PropTypes from 'prop-types';


const Login = ({navigation}) => {
  const {setIsLoggedIn, setUser} = useContext(AuthContext);
  const [showRegistration, setShowRegistration] = useState(true);
  const getToken = async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    if (userToken) {
      try {
        const userData = await checkToken(userToken);
        console.log('token valid', userData);
        setUser(userData);
        setIsLoggedIn(true);
      } catch (e) {
        console.log('token chek failed', e.message);
      }

    }
  };

  
  useEffect(() => {
    setIsLoggedIn(false);
    getToken();
    
  }, [])
  return (
    <Container >
    <Content padder>
    <Title>
    <Icon name={'person'} style={{fontSize: 200}}/>
      </Title>
        {showRegistration ?
          <LoginForm navigation={navigation} /> :
          <RegisterForm navigation={navigation} />}
        <View style={{alignItems: 'center'}}>
          <Text>or</Text>
        </View>
        <Button block onPress={() => {setShowRegistration(!showRegistration);}}>
          <Text>{showRegistration ? 'Register' : 'Login'}</Text>
        </Button>
      
    </Content>
  </Container>
);
};

Login.propTypes = {
  navigation: PropTypes.object,
};


export default Login;