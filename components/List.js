import React, {useState, useEffect, useContext}from "react";
import { FlatList } from "react-native";
import ListItem from "./ListItems";
import ListItem2 from "./ListItem2";
import {getAvatar, useLoadMedia} from "../hooks/APIHooks";
import {AuthContext} from "../context/AuthContext";




const List = ({navigation, output}) => {
  const mediaArray = useLoadMedia();
  const {setIsLoggedIn, user} = useContext(AuthContext);
  const [avatar, setAvatar] = useState([{filename: ''}]);
 

  const fetchAvatar = async () => {
    setAvatar(await getAvatar(user.user_id));
  };


  useEffect(() => {
    fetchAvatar();
  }, []);


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
        data={avatar}
        renderItem={({item}) =>
          <ListItem2
            navigation={navigation}
            singleMedia={item} />
        } />
    )
  }
};

export default List;