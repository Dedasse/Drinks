import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import List from '../components/List';

const Home=({navigation})=>{
  return <View style={{backgroundColor:'"#283985'}}>
    <List navigation={navigation} output="1"/>
    <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#293985" translucent = {true}/>
  </View>
};
const styles = StyleSheet.create({});

export default Home;