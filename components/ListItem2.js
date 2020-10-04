import React, { useState } from "react";
import {ListItem as NBListItem, Left, Right, Button,Thumbnail,Body, Icon,Text} from 'native-base';
import PropTypes from "prop-types";


const ListItem2 = ({navigation,singleMedia}) => {
  
  
  return (
    <NBListItem thumbnail>
    <Left>
      <Thumbnail square source={{ uri:  singleMedia.strDrinkThumb}} />
    </Left>
    <Body>
      <Text >{singleMedia.strDrink}</Text>
      <Text note >{singleMedia.description}</Text>
    </Body>
    <Right>
      <Button transparent

       onPress={() => {
          navigation.navigate('Single', {file: singleMedia})
        }}>
        <Icon name={'eye'}/>
        </Button>
    </Right>
  </NBListItem>

  );
};

ListItem2.propTypes = {
  singleMedia: PropTypes.object,
};


export default ListItem2;