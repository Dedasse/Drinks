import React, { useState,useContext } from "react";
import {ListItem as NBListItem, Left, Right, Button,Thumbnail,Body, Icon,Text} from 'native-base';
import PropTypes from "prop-types";
import {TouchableOpacity} from "react-native-gesture-handler";
import {updateFile} from "../hooks/APIHooks";
import AsyncStorage from "@react-native-community/async-storage";
import {AuthContext} from "../context/AuthContext";


const ListItem2 = ({navigation,singleMedia,route}) => {
    

  const doModify = async () => {

   

    try {
      const userToken = await AsyncStorage.getItem('userToken');
      const result1= await updateFile(route[0].file_id, {description:' '}, userToken);
      const result = await updateFile(singleMedia.file_id, {description:'set'}, userToken);
      console.log('update file info:', result1.message);
      console.log('update file info:', result.message);

    } catch (e) {
      console.log('update error:', e.message);
    } finally {
      //setIsLoading(false);
    }
  }


  return (
    <TouchableOpacity style={{margin: 5}} onPress={() => {
      console.log('file', singleMedia);
      doModify();
      navigation.navigate('Profile');
    }}>
    <NBListItem thumbnail>
    
      <Thumbnail square source={{ uri: 'http://media.mw.metropolia.fi/wbma/uploads/' + singleMedia.filename}} />
    
  </NBListItem>
    </TouchableOpacity>
  );
};

ListItem2.propTypes = {
  singleMedia: PropTypes.object,
};


export default ListItem2;