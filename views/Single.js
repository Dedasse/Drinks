import React, {useContext, useEffect, useState} from 'react';
import {Image} from 'react-native';
import {Card, CardItem, Left, Container, Content, Icon,Text,Title, Body, Button} from 'native-base';
import {AuthContext} from '../context/AuthContext';
import StarRating from 'react-native-star-rating';

const Single = ({route,navigation}) => {
  const [ingredient, setingredient] = useState([]);
  const file = route.params.file;
  const {isLoggedIn} = useContext(AuthContext);
  const [starCount, setStarCount] = useState(1);
  
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

  const onStarRatingPress = (rating) => {
    console.log('aijiji', starCount)
    setStarCount(rating);
  }

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
                  <StarRating
                    disabled={false}
                    maxStars={5}
                    rating={starCount}
                    selectedStar={(rating) => onStarRatingPress(rating)}
                    fullStarColor={'red'}
                  />
                  <Button>
                    <Text>Save rating and upload</Text>
                  </Button>
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