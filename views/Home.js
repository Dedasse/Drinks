import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import List from '../components/List';

const Home=({navigation})=>{
  return <View>
    <List navigation={navigation}/>
    <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "lightgreen" translucent = {true}/>
  </View>
};
const styles = StyleSheet.create({});

export default Home;