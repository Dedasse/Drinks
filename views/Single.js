import React, {useEffect, useState} from 'react';
import {Image} from 'react-native';
import {Card, CardItem, Left, Container, Content, Icon,Text,Title, Body} from 'native-base';

const Single = ({route}) => {
  const [ingredient, setingredient] = useState([]);
  const file = route.params.file;
  
  const ingredients = () => {
    for (let n = 1; n < 15; n++) {
      let helpv = `strIngredient${n}`;
      if (file[helpv] != null) {
        {
          console.log(file[helpv]);
        setingredient(file[helpv])}
      }
       
    }}
  
  useEffect(() => {
    ingredients();
  }, []);

  return (
    <Container>
      <Content padder>
      <Card>
      <CardItem>
        <Left>
              <Icon name={'image'} />
              <Body><Text> {file.strDrink}</Text></Body>
        </Left>
          </CardItem>
          <CardItem cardBody>
          <Image source={{uri:  file.strDrinkThumb}}
              style={{height: 400, width: null, flex: 1}}
            />
          </CardItem>
          <CardItem>
            <Body>
            <Text>
                Increidients:
                {ingredient}   
            </Text>
            <Text>
          {file.strInstructions}
            </Text>
            </Body>
          </CardItem>
    </Card>
      </Content>
    </Container>

  );
};



export default Single;