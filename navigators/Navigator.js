import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {AuthContext} from '../context/AuthContext';
import {Icon} from 'native-base';
import Home from '../views/Home';
import Login from '../views/Login';
import Add from '../views/Add';
import Profile from '../views/Profile';

//import Upload from '../views/Upload';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const TabScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home}
        options={{
          tabBarIcon: ({color}) =>(
            <Icon name={'home'} color={color} size={26}/> ),
      }}
      />
      <Tab.Screen name="Profile" component={Profile}
       options={{
        tabBarIcon: ({color}) =>(
          <Icon name={'finger-print'} color={color} size={26}/> ),
    }}
      />      
      </Tab.Navigator>
  );
 };
const StackScreen = () => {
  const {isLoggedIn} =useContext(AuthContext);
  return (
    <Stack.Navigator>
      {isLoggedIn ? (
        <>
          <Stack.Screen name="Home" component={TabScreen}/>
          <Stack.Screen name="Add" component={Add}/>
        </>
      ) : (
        <>
          <Stack.Screen name="Login" component={Login}/>
        </>
      )}
    </Stack.Navigator>
  );
 };
const Navigator = () => {
  return (
    <NavigationContainer>
      <StackScreen/>
    </NavigationContainer>
  );
};

export default Navigator;