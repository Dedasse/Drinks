import React, { useState } from "react";
import {ListItem as NBListItem, Left, Right, Button,Thumbnail,Body, Icon,Text} from 'native-base';
import PropTypes from "prop-types";
import {TouchableOpacity} from "react-native-gesture-handler";


const ListItem = ({navigation,singleMedia}) => {
 
  
  return (
    <TouchableOpacity style={{marginBottom:5,backgroundColor:'#293985' }} onPress={() => {
      navigation.navigate('Single', {file: singleMedia})
    }}>
      <NBListItem thumbnail style={{backgroundColor: '#4b63d1'}} >
    <Left>
          <Thumbnail style={{width:80,height:120}} source={{ uri:  singleMedia.strDrinkThumb}} />
    </Left>
    <Body>
          <Text style={{fontSize:24,color:'white'}}>{singleMedia.strDrink}</Text>
      
    </Body>
   
  </NBListItem>
  </TouchableOpacity>
  );
};

ListItem.propTypes = {
  singleMedia: PropTypes.object,
};


export default ListItem;