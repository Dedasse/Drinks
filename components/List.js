import React, {useState, useEffect, useContext}from "react";
import { FlatList } from "react-native";
import ListItem from "./ListItems";
import ListItem2 from "./ListItem2";
import {getAvatar, useLoadMedia} from "../hooks/APIHooks";
import {AuthContext} from "../context/AuthContext";




const List = ({navigation, output,route,haku}) => {
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
      style={{backgroundColor:'#293985'}}
        keyExtractor={(item, index) => index.toString()}
        data={mediaArray}
        extraData={haku}
        renderItem={({item}) =>
          <ListItem
            navigation={navigation}
            singleMedia={item}
            />
        } />
    );
  } else {
    return (
      <FlatList
        
        horizontal={true}
        keyExtractor={(item, index) => index.toString()}
        data={avatar}
        renderItem={({item}) =>
          <ListItem2
            navigation={navigation}
            singleMedia={item}
            route={route}/>
        } />
    )
  }
};

export default List;