import React, {useContext, useEffect, useState} from 'react';
import { AuthContext} from '../context/AuthContext';
import {Icon, Title, Container, Content,Text,Button, View} from 'native-base';
import {useLoadMedia} from "../hooks/APIHooks";


const Login = ({navigation}) => {
  const {setIsLoggedIn, setUser} = useContext(AuthContext);
  //const mediaArray = useLoadMedia(1);
  const [loginImage, setLoginImage] = useState();

  useEffect(() => {
   
  }, [])
  return (
    <Container >
    <Content padder>
    <Title>
       
      </Title>
     
      
        <Button block onPress={() => {setIsLoggedIn(true); navigation.navigate('Home');}}>
        <Text> 'Register'  'Login'</Text>
      </Button>

    </Content>
  </Container>
);
};


export default Login;