import React, {useContext, useEffect, useState} from 'react';
import { AuthContext} from '../context/AuthContext';
import {Icon, Title, Container, Content,Text,Button, View} from 'native-base';


const Login = ({navigation}) => {
  const {setIsLoggedIn, setUser} = useContext(AuthContext);
  

  return (
    <Container >
    <Content padder>
    <Title>
        <Icon name={'person'} style={{fontSize: 200}}/>
      </Title>
     
      
        <Button block onPress={navigation.navigate('Home')}>
        <Text> 'Register'  'Login'</Text>
      </Button>

    </Content>
  </Container>
);
};


export default Login;