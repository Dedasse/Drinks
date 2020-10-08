import React, {useEffect, useState} from 'react';

import {Icon, Title, Container, Content, Text, Button, View, Thumbnail, Card, CardItem, CheckBox,ListItem} from 'native-base';
import List from '../components/List';
import {SafeAreaView} from 'react-native-safe-area-context';
import { useIsFocused} from '@react-navigation/native'; 

const Add = ({navigation}) => {
  const [haku,setHaku]=useState([])
  const searchapi = "https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=";
  const [Vodka, setVodka] = useState(false);
  const [Gin, setGin] = useState(false);
  const [Rum, setRum] = useState(false);
  const [Milk, setMilk] = useState(false);
  
  
  
  const search = async() => {
    let options = [];
    if (Vodka) {options += "Vodka,"};
    if (Gin) {options += "Gin,"};
    if (Rum) {options += "Rum,"};
    if (Milk) {options += "Milk"};
    console.log('ad', options);

    
    
      let json = [];
  
      try {
          const response = await fetch(searchapi + options); 
           json = await response.json();
           setHaku(json.drinks);        
           console.log('lista',haku);
        } catch (error) {
          console.log('loadMedia error', error);
        }
    
    };   
 
  

    

  return (
    <Container>
      
      <SafeAreaView style={{flex:1}}>
          <List navigation={navigation} output='1' other={haku}/>
      </SafeAreaView>

      
      <CardItem style={{flex: .3}}>
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