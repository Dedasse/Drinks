import React, {useContext, useEffect, useState} from 'react';
import {Image} from 'react-native';
import {Card, CardItem, Left, Container, Content, Icon,Text,Title, Body} from 'native-base';
import {AuthContext} from '../context/AuthContext';

const Single = ({route,navigation}) => {
  const [ingredient, setingredient] = useState([]);
  const file = route.params.file;
  const {isLoggedIn} = useContext(AuthContext);
  
  const ingredients = () => { //erotellaan osaset 

    let apu = [];
    for (let n = 0; n < 14; n++) {
      if (file[`strIngredient${n+1}`] != null) {
        {apu[n]=(file[`strIngredient${n+1}`])+', '+file[`strMeasure${n+1}`]+'. '}
      }
    }
    setingredient(apu);
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
              <Body><Text style={{fontSize: 25}}> {file.strDrink}</Text></Body>
        </Left>
          </CardItem>
          <CardItem cardBody>
          <Image source={{uri:  file.strDrinkThumb}}
              style={{height: 400, width: null, flex: 1}}
            />
          </CardItem>
          {isLoggedIn ? ( //näytetään osat ja ohje logautuneille
          <>
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
              </>):(<></>)
          }
    </Card>
      </Content>
    </Container>

  );
};



export default Single;