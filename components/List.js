import React, {useState, useEffect}from "react";
import { FlatList } from "react-native";
import ListItem from "./ListItems";
import ListItem2 from "./ListItem2";
import {useLoadMedia} from "../hooks/APIHooks";




const List = ({navigation, output}) => {
  const mediaArray = useLoadMedia();
  

  if (output == 1) {
    return (
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={mediaArray}
        renderItem={({item}) =>
          <ListItem
            navigation={navigation}
            singleMedia={item} />
        } />
    );
  } else {
    return (
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={mediaArray}
        renderItem={({item}) =>
          <ListItem2
            navigation={navigation}
            singleMedia={item} />
        } />
    )
  }
};

export default List;