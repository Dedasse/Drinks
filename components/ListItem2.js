import React, { useState } from "react";
import {ListItem as NBListItem, Left, Right, Button,Thumbnail,Body, Icon,Text} from 'native-base';
import PropTypes from "prop-types";
import {TouchableOpacity} from "react-native-gesture-handler";


const ListItem2 = ({navigation,singleMedia}) => {
  
  return (
    <TouchableOpacity style={{margin:5}} onPress={() => {
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