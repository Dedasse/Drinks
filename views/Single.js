import React, {useEffect, useState} from 'react';
import {Image} from 'react-native';
import {Card, CardItem, Left, Container, Content, Icon,Text,Title, Body} from 'native-base';

const Single = ({route,navigation}) => {
  const [ingredient, setingredient] = useState([]);
  const file = route.params.file;
  
  const ingredients = () => {

    let apu = [];
    for (let n = 0; n < 14; n++) {
      let helpv = `strIngredient${n+1}`;
      if (file[helpv] != null) {
        {apu[n]=(file[helpv])+', '}
      }
    }
    setingredient(apu);
    console.log('Täällä', navigation);
  }
  
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
                Ingredients:
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