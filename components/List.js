import React, {useState, useEffect}from "react";
import { FlatList } from "react-native";
import ListItem from "./ListItems";


const url = 'https://www.thecocktaildb.com/api/json/v1/1/';


const List = ({navigation}) => {
  const [mediaArray, setmediaArray] = useState([]);

  const loadMedia = async () => {
    try {
      const response = await fetch(url + 'random.php');
      const json = await response.json();
      setmediaArray(json.drinks);
      console.log('mediaArray:', json);
    } catch (error) {
      console.log('loadMedia error', error);
    }
  };

  useEffect(() => {
    loadMedia();
  }, []);

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