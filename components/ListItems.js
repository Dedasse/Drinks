import React, { useState } from "react";
import {ListItem as NBListItem, Left, Right, Button,Thumbnail,Body, Icon,Text} from 'native-base';
import PropTypes from "prop-types";
import {TouchableOpacity} from "react-native-gesture-handler";


const ListItem = ({navigation,singleMedia}) => {
 
  
  return (
    <TouchableOpacity style={{margin:5}} onPress={() => {
      navigation.navigate('Single', {file: singleMedia})
    }}>
      <NBListItem thumbnail >
    <Left>
          <Thumbnail style={{width:80,height:120}} source={{ uri:  singleMedia.strDrinkThumb}} />
    </Left>
    <Body>
          <Text style={{fontSize:24}}>{singleMedia.strDrink}</Text>
      
    </Body>
   
  </NBListItem>
  </TouchableOpacity>
  );
};

ListItem.propTypes = {
  singleMedia: PropTypes.object,
};


export default ListItem;