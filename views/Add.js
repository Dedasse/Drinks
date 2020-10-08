import React, {useState} from 'react';

import {Icon, Title, Container, Content, Text, Button, View, Thumbnail, Card, CardItem, CheckBox,ListItem} from 'native-base';
import List from '../components/List';
//import ListItem from '../components/ListItems';

const Add = ({navigation}) => {
  //const [ingredient,setIngredient]=useState('')
  const searchapi = "https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=";
  const [Vodka, setVodka] = useState(false);
  const [Gin, setGin] = useState(false);
  const [Rum, setRum] = useState(false);
  const [Milk,setMilk] = useState(false);
  

  const search = () => {
  /*  const loadMedia = async () => {
    
      let json = [];
  
      try {
          const response = await fetch(searchapi + 'randomselection.php'); 
           json = await response.json();
        
          setMediaArray(json.drinks);        
        } catch (error) {
          console.log('loadMedia error', error);
        }
      
        //return mediaArray;
    };   */
 
  };


  return (
    <Container>
      <Content padder>
      <Card style={{flex:1}}>
    <List output='1'/>
      </Card>

      </Content>
      <CardItem style={{flex: .5}}>
        <ListItem >
          <CheckBox style={{marginRight:15}} checked={Vodka} onPress={() => setVodka(!Vodka)}/>
          <Text>Vodka</Text>
        </ListItem>
        <ListItem>
          <CheckBox style={{marginRight:15}} checked={Gin} onPress={()=>setGin(!Gin)} />
          <Text>Gin</Text>
        </ListItem>
        <ListItem>
          <CheckBox style={{marginRight:15}} checked={Rum} onPress={()=>setRum(!Rum)} />
          <Text>Rum</Text>
        </ListItem>
        <ListItem>
          <CheckBox style={{marginRight:15}} checked={Milk} onPress={()=>setMilk(!Milk)} />
          <Text>Milk</Text>
      </ListItem>
      </CardItem>
      <Button style={{alignSelf: 'center', marginBottom:20}} onPress={()=>search()}><Text>Search</Text></Button>
  </Container>
  )
};


export default Add;