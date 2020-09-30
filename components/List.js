import React, {useState, useEffect}from "react";
import { FlatList } from "react-native";
import ListItem from "./ListItems";
import {useLoadMedia} from "../hooks/APIHooks";




const List = ({navigation}) => {
  const mediaArray = useLoadMedia();
  

  return (
    <FlatList
      keyExtractor={(item, index) => index.toString()}
      data={mediaArray}
      renderItem={({item}) => <ListItem
        navigation={navigation}
        singleMedia={item} />}
    />
  );
};

export default List;